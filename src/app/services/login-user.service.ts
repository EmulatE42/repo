import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {RequestOptions} from "@angular/http";
import {Korisnik} from "../models";
import 'rxjs/add/operator/map'
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable()
export class LoginUserService {

  constructor(private http: HttpClient) {
  }


  login(auth: string, password: string) {

    var params = JSON.stringify(auth + ";" + password);
    let headers = new Headers({'Content-Type': 'application/json'});


    return this.http.post('https://obscure-refuge-36079.herokuapp.com/login', params, httpOptions);
  }

  updatePassword(email: string, lozinka: string)
  {
    var param = JSON.stringify(email + ";" + lozinka);
    return this.http.put("http://localhost:8080/updatePassword", param, httpOptions);
  }

  getAllUsers()
  {
    return this.http.get('http://localhost:8080/getAllUsers');
  }

  save(k: Korisnik) {

    var params = JSON.stringify(k);
    console.log(params);
    let headers = new Headers({'Content-Type': 'application/json'});


    return this.http.post('http://localhost:8080/register', params, httpOptions);
  }


}
