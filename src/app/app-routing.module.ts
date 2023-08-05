import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballerComponent } from './Components/Main/Footballer/footballer.component';
import { CountryComponent } from './Components/Main/Country/country.component';
import { HomeComponent } from './Components/Main/home/home.component';
import { LeagueComponent } from './Components/Main/League/league.component';
import { ClubComponent } from './Components/Main/Club/club.component';
import { NationalteamComponent } from './Components/Main/nationalteam/nationalteam.component';
import { CountryupdateComponent } from './Components/Main/Country/CountryUpdate/countryupdate.component';

const routes: Routes = [
  {path : "", redirectTo:"/home", pathMatch:"full"},
  {path : "home", component : HomeComponent},
  {path : "country/:ıd", component : CountryComponent},
  {path : "league/:ıd", component : LeagueComponent},
  {path : "club/:ıd", component : ClubComponent},
  {path : "footballer/:ıd", component : FootballerComponent},
  {path : "nationalTeam/:ıd", component : NationalteamComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
