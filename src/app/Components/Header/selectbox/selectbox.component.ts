import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/Model/club';
import { Country } from 'src/app/Model/country';
import { Footballer } from 'src/app/Model/footballer';
import { League } from 'src/app/Model/league';
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
              private footballerService : FootballerService
              ){}

  ngOnInit(): void {
    this.getAllCountry();
    this.getAllLeague();
    this.getAllClub();
    this.getAllFootballer();
  }

  countrys : Country[] = [];
  leagues : League[] = [];
  clubs : Club[] = [];
  footballers : Footballer[] = [];

  getAllCountry(){
    this.countryService.getAll().subscribe(response => {
      this.countrys = response.data;      
    })
  }

  getAllLeague(){
    this.leagueService.getAll().subscribe(response => {
      this.leagues = response.data;
    })
  }

  getAllClub(){
    this.clubService.getAll().subscribe(response => {
      this.clubs = response.data;
      console.log(response.data);
      
    })
  }

  getAllFootballer(){
    this.footballerService.getAll().subscribe(response => {
      this.footballers = response.data;
    })
  }




}
