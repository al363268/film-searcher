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
      this.moviesService.getMoviesLike(text).subscribe(res => this.films = res.results);
    }
    // this.searchText = text;
  }

  /* Valido si hay un listado de peliculas, aplicar un filtro de búsqueda
  searchMovie(event){
    const text = event.target.value;
    this.searchText = text;
  }*/

}
