import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballerComponent } from './Components/Main/Footballer/footballer.component';
import { CountryComponent } from './Components/Main/Country/country.component';
import { HomeComponent } from './Components/Main/Home/home.component';
import { LeagueComponent } from './Components/Main/League/league.component';
import { ClubComponent } from './Components/Main/Club/club.component';
import { NationalteamComponent } from './Components/Main/NationalTeam/nationalteam.component';
import { CountryupdateComponent } from './Components/Main/Country/LeagueUpdate/countryupdate.component';
import { ClubaddComponent } from './Components/Main/League/clubadd/clubadd.component';
import { ClubupdateComponent } from './Components/Main/League/clubupdate/clubupdate.component';
import { FootballerupdateComponent } from './Components/Main/Club/FootballerUpdate/footballerupdate.component';

const routes: Routes = [
  {path : "", redirectTo:"/home", pathMatch:"full"},
  {path : "home", component : HomeComponent},
  {path : "country/:ıd", component : CountryComponent},
  {path : "league/:ıd", component : LeagueComponent},
  {path : "club/:ıd", component : ClubComponent},
  {path : "footballer/:ıd", component : FootballerComponent},
  {path : "nationalTeam/:ıd", component : NationalteamComponent},
  {path : "leagueUpdate/:id", component : CountryupdateComponent},
  {path : "clubUpdate/:id", component: ClubupdateComponent},
  {path : "footballerUpdate/:id", component : FootballerupdateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
