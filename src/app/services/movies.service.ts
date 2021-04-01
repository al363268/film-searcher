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

  apiURL: string = environment.apiURL;
  apikey: string = environment.apikey;

  getMovies(){
    return this.http.get<GenericResponse<Movie>>(`${this.apiURL}discover/movie?api_key=${this.apikey}`);
  }
  searchMovies(text: string){
    return this.http.get<GenericResponse<Movie>>(`${this.apiURL}search/movie?api_key=${this.apikey}&query=`
     + text.replace(' ', '+')
    );
  }
  getMovieById(id: string){
    return this.http.get<Movie>(`${this.apiURL}movie/` + id + `?api_key=${this.apikey}`);
  }
}
