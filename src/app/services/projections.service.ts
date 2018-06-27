import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Projekcija} from "../models";


const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
};


@Injectable()
export class ProjectionsService {

  constructor(private http: HttpClient) {
  }

  getAllPro()
  {
    //alert("POZIVAM")
    return this.http.get('http://localhost:8080/getAllPro');
  }

  save(k: Projekcija) {

    var params = JSON.stringify(k);
    console.log(params);
    let headers = new Headers({'Content-Type': 'application/json'});


    return this.http.post('http://localhost:8080/savePro', params, httpOptions);
  }

}
