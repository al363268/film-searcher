import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movieId: string;
  movieData: [];
  movieImg = 'https://image.tmdb.org/t/p/w300/';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.index();
  }

  index(){
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<any>('https://api.themoviedb.org/3/movie/' + this.movieId + '?api_key=9b06d6cb3a9bff49394c6dcd24a4ec19')
    .subscribe(res => {
      console.log(res);
      this.movieData = res;
      this.movieImg += res.poster_path;
    });
  }
}
