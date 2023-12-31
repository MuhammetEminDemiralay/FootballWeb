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
import { CountryComponent } from './Components/Main/Country/country.component';
import { CountryaddComponent } from './Components/Main/Country/LeagueAdd/leagueadd.component';
import { CountryupdateComponent } from './Components/Main/Country/LeagueUpdate/leagueupdate.component';
import { LeagueComponent } from './Components/Main/League/league.component';
import { ClubComponent } from './Components/Main/Club/club.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/Main/Home/home.component';
import { NationalteamComponent } from './Components/Main/NationalTeam/nationalteam.component';
import { AdminComponent } from './Components/Header/admin/admin/admin.component';
import { NationalteamupdateComponent } from './Components/Main/Country/NationalTeamUpdate/nationalteamupdate.component';
import { NationalteamaddComponent } from './Components/Main/Country/NationalTeamAdd/nationalteamadd.component';
import { ClubaddComponent } from './Components/Main/League/clubadd/clubadd.component';
import { ClubupdateComponent } from './Components/Main/League/clubupdate/clubupdate.component';
import { FootballerupdateComponent } from './Components/Main/Club/FootballerUpdate/footballerupdate.component';
import { FootballeraddComponent } from './Components/Main/Club/FootballerAdd/footballeradd.component';
import { FootballerComponent } from './Components/Main/Footballer/footballer.component';
import { NationalteamplayeraddComponent } from './Components/Main/NationalTeam/nationalteamplayeradd/nationalteamplayeradd.component';
import { NationalteamplayerupdateComponent } from './Components/Main/NationalTeam/nationalteamplayerupdate/nationalteamplayerupdate.component';
import { ImagemanagerComponent } from './Components/Main/İmageManager/imagemanagaer/imagemanager.component';



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
    ClubComponent,
    ClubaddComponent,
    ClubupdateComponent,
    FooterComponent,
    HomeComponent,
    NationalteamComponent,
    AdminComponent,
    NationalteamupdateComponent,
    NationalteamaddComponent,
    NationalteamplayeraddComponent,
    NationalteamplayerupdateComponent,
    ImagemanagerComponent
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
