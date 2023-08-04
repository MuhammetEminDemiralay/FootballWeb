import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/Model/country';
import { League } from 'src/app/Model/league';
import { NationalTeam } from 'src/app/Model/nationalTeam';
import { LeagueService } from 'src/app/Service/league.service';
import { NationalteamService } from 'src/app/Service/nationalteam.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute,
              private leagueService : LeagueService,
              private nationalTeamService: NationalteamService
              ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.countryId = params["ıd"];
      this.getLeaguesByCountryId();
      this.getNationalTeamsByCountryId();
    })
  }

  countryId : number;
  leagues : League[] = [];
  nationalTeams : NationalTeam[] = [];

  getLeaguesByCountryId(){
    this.leagueService.getLeaguesbyCountryId(this.countryId).subscribe(response => {
      this.leagues = response.data;     
    })
  }

  leagueLevel(leagueLevel : number){
    if(leagueLevel == 1){
      return "background-color :#000080;"
    }else if(leagueLevel == 2){
      return "background-color: #1E90FF"
    }else if(leagueLevel == 3){
      return "background-color: #00FFFF"
    }else if(leagueLevel == 4){
      return  "background-color: #87CEFA"
    }
    return "background-color: #B0E0E6"
  }


  getNationalTeamsByCountryId(){
    this.nationalTeamService.getNationalTeamByCountryId(this.countryId).subscribe(response => {
      this.nationalTeams = response.data;
    })
  }

  leagueDelete(league : League){
    this.leagueService.deleteLeague(league).subscribe(response => {
      console.log(response.message);
      window.location.reload();
    })
  }

  

  
}
