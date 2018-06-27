import {Component, OnInit} from '@angular/core';
import {Film} from "../../models";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  movies: Film[];

  constructor(public moviesServce: MoviesService) {

    this.moviesServce.getAllMovies().subscribe((data: Film[]) => this.movies = data);

  }

  provera() {
    console.log(this.movies);
  }

  ngOnInit() {

  }

}
