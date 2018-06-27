import {Component, OnInit} from '@angular/core';
import {LoginUserService} from "../../services/login-user.service";
import {Router} from "@angular/router";
import {Korisnik} from "../../models";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password1: string;
  password2: string;
  korisnik: Korisnik;
  korisnici: Korisnik[];

  constructor(private loginUserService: LoginUserService, private router: Router) {
  }

  ngOnInit() {
  }


  register() {
    console.log(this.firstname);
    this.loginUserService.getAllUsers().subscribe((users: Korisnik[]) => this.korisnici = users, error => alert(error), () => this.provera());

  }

  provera() {
    console.log(this.korisnici);
    if (this.password1 !== this.password2) {
      document.getElementById("reg").innerHTML = "<div class=\"alert alert-danger col-sm-offset-4 col-sm-4\"> Password doesn't match</div>";
      return;
    }
    var greska = true;
    for (var i = 0; i < this.korisnici.length; i++) {
      if (this.korisnici[i].email == this.email || this.korisnici[i].korisnickoIme == this.username) {
        greska = false;

        document.getElementById("reg").innerHTML = "<div class=\"alert alert-danger col-sm-offset-4 col-sm-4\"> Email or username already exists </div>";
        break;
      }
    }
    if (greska) {
      console.log("nije");
      this.loginUserService.save(new Korisnik(null, this.firstname, this.lastname, this.username, this.email, this.password1, "k")).subscribe(user => this.korisnik, error => alert(error));
      document.getElementById("reg").innerHTML = "<div class=\"alert alert-success col-sm-offset-4 col-sm-4\"> You have been successfully registered  </div>";
      setTimeout(() => {
          this.router.navigate(['/login']);
        },
        2000);
    }
  }

}
