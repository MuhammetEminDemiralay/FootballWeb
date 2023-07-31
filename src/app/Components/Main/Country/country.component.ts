import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/Model/country';
import { League } from 'src/app/Model/league';
import { LeagueService } from 'src/app/Service/league.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute,
              private leagueService : LeagueService
              ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.countryId = params["ıd"];
      this.getLeaguesByCountryId();
    })
  }

  countryId : number;
  leagues : League[] = [];

  getLeaguesByCountryId(){
    this.leagueService.getLeaguesbyCountryId(this.countryId).subscribe(response => {
      this.leagues = response.data.filter(p => p.countryId == this.countryId);
    })
  }

  
}
