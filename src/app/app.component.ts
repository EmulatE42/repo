import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  user: any;
  provera: any;
  putanja: string;

  constructor(private authenticationService: AuthenticationService) {
    authenticationService.getLoggedInName.subscribe(name => this.changeName(name));
  }

  private changeName(name: any): void {
    this.user = name;
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("loginUser");
  }

  proveriUsera(): void {

    this.user = sessionStorage.getItem("loginUser");
    this.provera = JSON.parse(sessionStorage.getItem("loginUser"));

    try {
      if (this.provera.tipKorisnika === "k") {
        this.putanja = '/user';
      }
      else {
        this.putanja = '/manager';
      }
    }
    catch (e) {
    }


  }

  izlogovao(): void {
    sessionStorage.clear();
    this.proveriUsera();

  }


}
