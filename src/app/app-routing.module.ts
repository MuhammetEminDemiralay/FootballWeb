import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballerComponent } from './Components/Main/Footballer/footballer.component';
import { CountryComponent } from './Components/Main/Country/country.component';
import { HomeComponent } from './Components/Main/home/home.component';
import { LeagueComponent } from './Components/Main/League/league.component';
import { ClubComponent } from './Components/Main/Club/club.component';

const routes: Routes = [
  {path : "", redirectTo:"/home", pathMatch:"full"},
  {path : "home", component : HomeComponent},
  {path : "country/:ıd", component : CountryComponent},
  {path : "league/:ıd", component : LeagueComponent},
  {path : "club/:ıd", component : ClubComponent},
  {path : "footballer/:ıd", component : FootballerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
