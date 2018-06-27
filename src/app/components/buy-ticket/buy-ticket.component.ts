import { Component, OnInit } from '@angular/core';
import {Projekcija} from "../../models";
import {ProjectionsService} from "../../services/projections.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  projs: Projekcija[];
  constructor(public projectionsService: ProjectionsService,private router: Router) {


  }

  ngOnInit() {
    this.projectionsService.getAllPro().subscribe((data: Projekcija[]) => this.projs = data);

  }
  gotovo()
  {
    document.getElementById("kraj").innerHTML = "<div class=\"alert alert-success col-sm-offset-4 col-sm-4\"> You have been successfully purchased ticket </div>";
    setTimeout(() => {
        this.router.navigate(['/user']);
      },
      2000);
  }

}
