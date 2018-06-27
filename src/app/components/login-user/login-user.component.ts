import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginUserService} from "../../services/login-user.service";
import {Korisnik} from "../../models";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  email: string;
  password: string;
  korisnik: Korisnik;

  constructor(private loginUserService: LoginUserService, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

  }

  login() {
    this.loginUserService.login(this.email, this.password).subscribe((user: Korisnik) => this.korisnik = user, error => alert(error), () => this.proveri());

  }

  proveri() {
    console.log(this.korisnik);
    if (JSON.stringify(this.korisnik) !== '{}') {
      this.korisnik.lozinka = this.password;
      sessionStorage.setItem('loginUser', JSON.stringify(this.korisnik));
      this.authenticationService.login(this.korisnik);
      if (this.korisnik.tipKorisnika === "k")
        this.router.navigate(['/user']);
      else
        this.router.navigate(['/manager']);


    }
    else {
      document.getElementById("login").innerHTML = "<div class=\"alert alert-danger col-sm-offset-4 col-sm-4\"> Wrong email/password! </div>";
    }
  }
}
