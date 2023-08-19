import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/Model/club';
import { ClubDetail } from 'src/app/Model/clubDetail';
import { CountryImage } from 'src/app/Model/countryImage';
import { LeagueDetail } from 'src/app/Model/leagueDetail';
import { ClubService } from 'src/app/Service/club.service';
import { CountryService } from 'src/app/Service/country.service';
import { LeagueService } from 'src/app/Service/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit{
  
  constructor(private activatedRoute : ActivatedRoute,
    private clubService : ClubService,
    private leagueService : LeagueService,
    private countryService : CountryService
    ){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.leagueId = params["ıd"];
      this.getClubsDetailByLeagueId()
      this.getLeagueDetailByLeagueId();
    })

  }

  clubs : ClubDetail[] = [];
  leagueId : number;
  leagueDetail : LeagueDetail;
  imageUrl = "https://localhost:44319/"
  countryImage : CountryImage;
  

  getClubsDetailByLeagueId(){
    this.clubService.getClubsDetailByLeagueId(this.leagueId).subscribe(response => {
      this.clubs = response.data;
    })
  }

  getLeagueDetailByLeagueId(){
    this.leagueService.getLeagueDetailByLeagueId(this.leagueId).subscribe(response => {
      this.leagueDetail = response.data;
      this.getImageByCountryId()
    })
  }

  getImageByCountryId(){
    this.countryService.getImageByCountryId(this.leagueDetail.countryId).subscribe(response => {
      this.countryImage= response.data;
    })
  }

  

}
