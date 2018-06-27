import { Component, OnInit } from '@angular/core';
import {Korisnik} from "../../models";
import {LoginUserService} from "../../services/login-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oldPassword: string = "";
  newPassword1: string = "";
  newPassword2: string = "";
  korisnik: Korisnik = JSON.parse(sessionStorage.getItem("loginUser"));
  controlMessage: boolean = true;

  constructor(private loginUserService: LoginUserService, private router: Router) { }

  ngOnInit() {
  }





    save(): void
  {
    if (!this.isValidForm())
    {
      return;
    }
    console.log(this.korisnik.lozinka);
    if(this.korisnik.lozinka === this.oldPassword)
    {
      this.loginUserService.updatePassword(this.korisnik.email, this.newPassword1).subscribe();
      setTimeout(() => {
          this.router.navigate(['/user']);
        },
        2000);
    }
    else {
      this.controlMessage = false;
      document.getElementById("changePass").innerHTML = "<div class=\"alert alert-danger col-sm-offset-4 col-sm-4\"> Wrong old password! </div>";

    }

  }



  isValidForm(): boolean
  {

    if (this.newPassword1.length == 0|| this.newPassword2.length == 0 || this.oldPassword.length == 0)
    {
      return false;
    }

    if(this.newPassword1 == this.newPassword2 && this.newPassword1 && this.newPassword2) {
      document.getElementById("changePass").innerHTML = "<div class=\"alert alert-success col-sm-offset-4 col-sm-4\"> New passwords match! </div>";
      return true;
    }
    else if((this.newPassword1 || this.newPassword2)) {
      document.getElementById("changePass").innerHTML = "<div class=\"alert alert-danger col-sm-offset-4 col-sm-4\"> New passwords do not match! </div>";
      return false;
    }
    else
      return true;
  }


}
