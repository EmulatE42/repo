import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Film} from "../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-makenewmovie',
  templateUrl: './makenewmovie.component.html',
  styleUrls: ['./makenewmovie.component.css']
})
export class MakenewmovieComponent implements OnInit {

  constructor(public moviesService: MoviesService,private router: Router) {
  }

  f: Film;

  ngOnInit() {
  }

  dodao(prvi: string, drugi: string, treci: string, cetvrti: string,) {
    this.moviesService.save(new Film(null, prvi, drugi, 2018, +treci, "Srbija", cetvrti)).subscribe(user => this.f, error => alert(error));
    setTimeout(() => {
        this.router.navigate(['/manager']);
      },
      2000);
  }
}

