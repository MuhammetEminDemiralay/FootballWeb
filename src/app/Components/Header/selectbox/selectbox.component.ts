import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/Model/club';
import { ClubDetail } from 'src/app/Model/clubDetail';
import { Country } from 'src/app/Model/country';
import { Footballer } from 'src/app/Model/footballer';
import { FootballerDetail } from 'src/app/Model/footballerDetail';
import { League } from 'src/app/Model/league';
import { LeagueDetail } from 'src/app/Model/leagueDetail';
import { ClubService } from 'src/app/Service/club.service';
import { CountryService } from 'src/app/Service/country.service';
import { FootballerService } from 'src/app/Service/footballer.service';
import { LeagueService } from 'src/app/Service/league.service';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.css']
})
export class SelectboxComponent implements OnInit{

  constructor(private countryService : CountryService,
              private leagueService : LeagueService,
              private clubService : ClubService,
              private footballerService : FootballerService,
              private router : Router 
              ){}

  ngOnInit(): void {
    this.getAllCountry();
  }

  countrys : Country[] = [];
  leagues : LeagueDetail[] = [];
  clubs : ClubDetail[] = [];
  footballers : FootballerDetail[] = [];
  footballer : FootballerDetail;
  countryId : number;
  leagueId : number;
  clubId : number;
  footballerId : number;

  getAllCountry(){
    this.countryService.getAll().subscribe(response => {
      this.countrys = response.data;  
    })
  }

  //



  getLeaguesDetailByCountryId(){
    this.leagueService.getLeaguesDetailByCountryId(this.countryId).subscribe(response => {
      this.leagues = response.data;
    })
  }  

  selectCountry(e : any){
    this.countryId = e.target.value;
    this.getLeaguesDetailByCountryId();
  }
 
  countryRoute(){
    this.router.navigate(["/country", this.countryId])
  }

  //

  getClubsDetailByLeagueId(){
    this.clubService.getClubsDetailByLeagueId(this.leagueId).subscribe(response => {
      this.clubs = response.data;
    })
  }

  selectLeague(e : any){
    this.leagueId = e.target.value;
    this.getClubsDetailByLeagueId();
  }

  leagueRoute(){
    this.router.navigate(["/league", this.leagueId])
  }

  //

  getFootballerByClubId(){
    this.footballerService.getFootballersDetailByClubId(this.clubId).subscribe(response => {
      this.footballers = response.data;      
    })
  }

  selectClub(e : any){
    this.clubId = e.target.value;
    this.getFootballerByClubId();
  }

  clubRoute(){
    this.router.navigate(["/club", this.clubId])
  }
  

  //


  selectFootbaler(e : any){
    this.footballerId = e.target.value;
  }

  footballerRoute(){
    this.router.navigate(["/footballer", this.footballerId])
  }

  //




}
