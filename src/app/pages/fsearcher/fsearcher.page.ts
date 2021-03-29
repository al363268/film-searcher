import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fsearcher',
  templateUrl: './fsearcher.page.html',
  styleUrls: ['./fsearcher.page.scss'],
})
export class FsearcherPage implements OnInit {

  constructor(
    public http: HttpClient
  ) { }

  films: any = [];

  ngOnInit() {
    this.index();
  }

  index(){
    this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=9b06d6cb3a9bff49394c6dcd24a4ec19').subscribe(response => {
      console.log(response.results);
      this.films = response.results;
    });
  }

}
