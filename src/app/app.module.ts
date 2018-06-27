import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import {LoginUserService} from "./services/login-user.service";
import { HttpClientModule} from "@angular/common/http";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {AuthenticationService} from "./services/authentication.service";
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { SearchProjectionsComponent } from './components/search-projections/search-projections.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import {MoviesService} from "./services/movies.service";
import { NazivfilmaPipe } from './nazivfilma.pipe';
import { ZanrFilmaPipe } from './zanr-filma.pipe';
import {ProjectionsService} from "./services/projections.service";
import { NazivfilmaProjekcijaPipe } from './nazivfilma-projekcija.pipe';
import { ManagerProfileComponent } from './components/manager-profile/manager-profile.component';
import { MakenewmovieComponent } from './components/makenewmovie/makenewmovie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RegisterUserComponent,
    UserProfileComponent,
    ChangePasswordComponent,
    SearchMoviesComponent,
    SearchProjectionsComponent,
    BuyTicketComponent,
    NazivfilmaPipe,
    ZanrFilmaPipe,
    NazivfilmaProjekcijaPipe,
    ManagerProfileComponent,
    MakenewmovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginUserComponent},
      {path: 'register', component: RegisterUserComponent},
      {path: 'user', component: UserProfileComponent},
      {path: 'changePassword', component: ChangePasswordComponent},
      {path: 'user/movies', component: SearchMoviesComponent},
      {path: 'user/tickets', component: BuyTicketComponent},
      {path: 'user/projections', component: SearchProjectionsComponent},
      {path: 'manager', component: ManagerProfileComponent},
      {path: 'manager/addmovie', component: MakenewmovieComponent}
      //

    ])
  ],
  providers: [LoginUserService,AuthenticationService,MoviesService,ProjectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }




