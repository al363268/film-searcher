import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { GenericResponse } from '../models/tmdbGenericResponse.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies(){
    return this.http.get<GenericResponse<Movie>>('https://api.themoviedb.org/3/discover/movie?api_key=9b06d6cb3a9bff49394c6dcd24a4ec19');
  }
  getMoviesLike(text: string){
    return this.http.get<GenericResponse<Movie>>('https://api.themoviedb.org/3/search/movie?api_key=9b06d6cb3a9bff49394c6dcd24a4ec19&query='
     + text.replace(' ', '+')
    );
  }
  getMovieById(id: string){
    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/' + id + '?api_key=9b06d6cb3a9bff49394c6dcd24a4ec19');
  }
}
