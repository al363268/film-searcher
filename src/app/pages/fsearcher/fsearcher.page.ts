import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-fsearcher',
  templateUrl: './fsearcher.page.html',
  styleUrls: ['./fsearcher.page.scss'],
})
export class FsearcherPage implements OnInit {

  constructor(
    private moviesService: MoviesService
  ) { }

  films: Movie[] = [];
  searchText = '';

  ngOnInit() {
    this.index();
  }

  index(){
    this.moviesService.getMovies().subscribe(res => this.films = res.results);
  }

  searchMovie(event){
    const text = event.target.value;
    if (text.length === 0){
      this.index();
    }else{
      this.moviesService.searchMovies(text).subscribe(res => this.films = res.results);
    }
  }

}
