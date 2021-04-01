import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';
import { GenericResponse } from '../models/tmdbGenericResponse.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  api: string = environment.api;

  getMovies(){
    return this.http.get<GenericResponse<Movie>>(`${this.api}discover/movie?api_key=9b06d6cb3a9bff49394c6dcd24a4ec19`);
  }
  getMoviesLike(text: string){
    return this.http.get<GenericResponse<Movie>>(`${this.api}search/movie?api_key=9b06d6cb3a9bff49394c6dcd24a4ec19&query=`
     + text.replace(' ', '+')
    );
  }
  getMovieById(id: string){
    return this.http.get<Movie>(`${this.api}movie/` + id + `?api_key=9b06d6cb3a9bff49394c6dcd24a4ec19`);
  }
}
