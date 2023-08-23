import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubDetail } from 'src/app/Model/clubDetail';
import { Footballer } from 'src/app/Model/footballer';
import { FootballerDetail } from 'src/app/Model/footballerDetail';
import { LeagueDetail } from 'src/app/Model/leagueDetail';
import { ClubService } from 'src/app/Service/club.service';
import { FootballerService } from 'src/app/Service/footballer.service';
import { LeagueService } from 'src/app/Service/league.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute,
              private footballerService : FootballerService,
              private clubService : ClubService,
              private leagueService : LeagueService
              ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.clubId = params["ıd"]
      this.getFootballersDetailByClubId();
      this.getClubDetailByClubId();
    })
  }

  footballersDetail : FootballerDetail[] = [];
  clubDetail : ClubDetail;
  leagueDetail : LeagueDetail;
  clubId : number = 0;
  imageUrl = "https://localhost:44319/";

  getFootballersDetailByClubId(){
    this.footballerService.getFootballersDetailByClubId(this.clubId).subscribe(response => {
      this.footballersDetail = response.data;
      
    })
  } 

  getClubDetailByClubId(){
    this.clubService.getClubDetailByClubId(this.clubId).subscribe(response => {
      this.clubDetail = response.data;    
    })
  }

  
}
