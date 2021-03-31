import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movieData: Movie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.index();
  }

  index(){
    this.moviesService.getMovieById(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(res => this.movieData = res);
  }
}
