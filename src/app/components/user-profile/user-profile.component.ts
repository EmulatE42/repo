import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  firstname: string;
  lastname: string;
  username: string;
  role: string;

  constructor(private router: Router) {
    this.firstname = JSON.parse(sessionStorage.getItem("loginUser")).ime;
    this.lastname = JSON.parse(sessionStorage.getItem("loginUser")).prezime;
    this.username = JSON.parse(sessionStorage.getItem("loginUser")).korisnickoIme;
    this.role = JSON.parse(sessionStorage.getItem("loginUser")).tipKorisnika == 'k' ? "Kupac" : "Menadzer";
  }

  ngOnInit() {
  }

  changePassword() {

    this.router.navigate(['/changePassword']);
  }

}
