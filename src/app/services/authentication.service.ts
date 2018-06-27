import {EventEmitter, Injectable, Output} from '@angular/core';
import {Korisnik} from "../models";

@Injectable()
export class AuthenticationService {

  constructor() {
  }

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  login(korisnik: Korisnik) {

    this.getLoggedInName.emit(korisnik);

  }

}
