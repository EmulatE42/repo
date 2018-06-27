import { Component, OnInit } from '@angular/core';
import {Projekcija} from "../../models";
import {ProjectionsService} from "../../services/projections.service";

@Component({
  selector: 'app-search-projections',
  templateUrl: './search-projections.component.html',
  styleUrls: ['./search-projections.component.css']
})
export class SearchProjectionsComponent implements OnInit {

  projs: Projekcija[];

  constructor(public projectionsService: ProjectionsService) {

    this.projectionsService.getAllPro().subscribe((data: Projekcija[]) => this.projs = data,() => this.vidi());

  }
  vidi()
  {
    console.log(this.projs)
  }
  ngOnInit() {
  }

}
