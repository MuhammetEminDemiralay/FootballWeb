import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderboxComponent } from './Components/Header/headerbox/headerbox.component';
import { NaviComponent } from './Components/Header/navi/navi.component';
import { SelectboxComponent } from './Components/Header/selectbox/selectbox.component';
import { FootballeraddComponent } from './Components/Main/Footballer/FootballerAdd/footballeradd.component';
import { FootballerupdateComponent } from './Components/Main/Footballer/FootballerUpdate/footballerupdate.component';
import { CountryComponent } from './Components/Main/Country/country.component';
import { CountryaddComponent } from './Components/Main/Country/LeagueAdd/countryadd.component';
import { CountryupdateComponent } from './Components/Main/Country/LeagueUpdate/countryupdate.component';
import { LeagueComponent } from './Components/Main/League/league.component';
import { LeagueaddComponent } from './Components/Main/League/LeagueAdd/leagueadd.component';
import { LeagueupdateComponent } from './Components/Main/League/LeagueUpdate/leagueupdate.component';
import { ClubComponent } from './Components/Main/Club/club.component';
import { ClubaddComponent } from './Components/Main/Club/ClubAdd/clubadd.component';
import { ClubupdateComponent } from './Components/Main/Club/ClubUpdate/clubupdate.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/Main/home/home.component';
import { NationalteamComponent } from './Components/Main/nationalteam/nationalteam.component';
import { AdminComponent } from './Components/Header/admin/admin/admin.component';
import { NationalteamupdateComponent } from './Components/Main/Country/NationalTeamUpdate/nationalteamupdate.component';
import { NationalteamaddComponent } from './Components/Main/Country/NationalTeamAdd/nationalteamadd.component';
import { FootballerComponent } from './Components/Main/Footballer/footballer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderboxComponent,
    NaviComponent,
    SelectboxComponent,
    FootballerComponent,
    FootballeraddComponent,
    FootballerupdateComponent,
    CountryComponent,
    CountryaddComponent,
    CountryupdateComponent,
    LeagueComponent,
    LeagueaddComponent,
    LeagueupdateComponent,
    ClubComponent,
    ClubaddComponent,
    ClubupdateComponent,
    FooterComponent,
    HomeComponent,
    NationalteamComponent,
    AdminComponent,
    NationalteamupdateComponent,
    NationalteamaddComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
