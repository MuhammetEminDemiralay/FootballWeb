import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballerComponent } from './Components/Main/Footballer/footballer.component';
import { CountryComponent } from './Components/Main/Country/country.component';
import { HomeComponent } from './Components/Main/Home/home.component';
import { LeagueComponent } from './Components/Main/League/league.component';
import { ClubComponent } from './Components/Main/Club/club.component';
import { NationalteamComponent } from './Components/Main/NationalTeam/nationalteam.component';
import { CountryupdateComponent } from './Components/Main/Country/LeagueUpdate/leagueupdate.component';
import { ClubaddComponent } from './Components/Main/League/clubadd/clubadd.component';
import { ClubupdateComponent } from './Components/Main/League/clubupdate/clubupdate.component';
import { FootballerupdateComponent } from './Components/Main/Club/FootballerUpdate/footballerupdate.component';
import { AdminComponent } from './Components/Header/admin/admin/admin.component';

const routes: Routes = [
  {path : "", redirectTo:"/home", pathMatch:"full"},
  {path : "home", component : HomeComponent},
  {path : "country/:id", component : CountryComponent},
  {path : "league/:id", component : LeagueComponent},
  {path : "club/:id", component : ClubComponent},
  {path : "footballer/:id", component : FootballerComponent},
  {path : "nationalTeam/:id", component : NationalteamComponent},
  {path : "leagueUpdate/:id", component : CountryupdateComponent},
  {path : "clubUpdate/:id", component: ClubupdateComponent},
  {path : "footballerUpdate/:id", component : FootballerupdateComponent},
  {path : "admin", component : AdminComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
