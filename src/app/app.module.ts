import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

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
import { FooterComponent } from './Components/Footer/footer.component';
import { HomeComponent } from './Components/Main/Home/home.component';
import { NationalteamComponent } from './Components/Main/NationalTeam/nationalteam.component';

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
import { CustomcurrencyPipe } from './Pipe/customcurrency.pipe';
import { LeaguelevelPipe } from './Pipe/leaguelevel.pipe';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ProfileComponent } from './Components/Auth/profile/profile.component';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

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
    NationalteamupdateComponent,
    NationalteamaddComponent,
    NationalteamplayeraddComponent,
    NationalteamplayerupdateComponent,
    ImagemanagerComponent,
    CustomcurrencyPipe,
    LeaguelevelPipe,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
