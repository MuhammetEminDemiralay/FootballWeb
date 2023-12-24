import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/Model/country';
import { League } from 'src/app/Model/league';
import { LeagueDetail } from 'src/app/Model/leagueDetail';
import { NationalTeam } from 'src/app/Model/nationalTeam';
import { NationalTeamDetail } from 'src/app/Model/nationalTeamDetail';
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
              private nationalTeamService: NationalteamService,
              private router : Router
              ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.countryId = params["ıd"];
      this.getLeaguesByCountryId();
      this.getNationalTeamsByCountryId();
    })
  }

  countryId : number;
  leagueId : number;
  leagueDetails : LeagueDetail[] = [];
  imageUrl = "https://localhost:44319/"
  noFootballerPhoto = "Images/783c32fcf6fd45bcb5bf8c25c4719636.jpg"
  nationalTeams : NationalTeamDetail[] = [];
  nationalTeamId : number;
  

  getLeaguesByCountryId(){
    this.leagueService.getLeaguesDetailByCountryId(this.countryId).subscribe(response => {
      this.leagueDetails = response.data;  
    })
  }


  getNationalTeamsByCountryId(){
    this.nationalTeamService.getNationalTeamDetailByCountryId(this.countryId).subscribe(response => {
      this.nationalTeams = response.data;
    })
  }

  leagueDelete(league : League){
    if(window.confirm("Silmek istediğine emin misin?")){
      this.leagueService.deleteLeague(league).subscribe(response => {
        window.location.reload();
      })
    }
  }

  getLeagueId(leagueId : number){
    this.leagueId = leagueId   
    console.log(leagueId);
     
  }
  
  getNationalTeam(nationalTeamId){
    this.nationalTeamId = nationalTeamId;  
  }

  removeNationalTeam(nationalTeam : NationalTeamDetail){
     this.nationalTeamService.deleteNationalTeam(nationalTeam).subscribe(response => {
      window.location.reload();
     })
   }


  
 
  
}
