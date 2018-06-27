import { Injectable } from '@angular/core';
import {Film} from "../models";
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  getAllMovies()
  {
    return this.http.get('http://localhost:8080/getAllMovies');
  }

  save(k: Film) {

    var params = JSON.stringify(k);
    console.log(params);
    let headers = new Headers({'Content-Type': 'application/json'});


    return this.http.post('http://localhost:8080/saveMovie', params, httpOptions);
  }

}
