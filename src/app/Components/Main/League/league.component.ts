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
export class LeagueComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private clubService: ClubService,
    private leagueService: LeagueService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.leagueId = params["id"];
      this.getClubsDetailByLeagueId()
      this.getLeagueDetailByLeagueId();
    })
  }

  clubDetails: ClubDetail[] = [];
  clubId: number;
  leagueId: number;
  countryId: number;
  leagueDetail: LeagueDetail;
  imageUrl = "https://localhost:44319/"
  noLeaguePhoto = "Images/noImage.jpg"
  leagueTotalValue : number = 0;
  leagueForeigners : number = 0;
  averageAge : number = 0;


  getClubsDetailByLeagueId() {
    this.clubService.getClubsDetailByLeagueId(this.leagueId).subscribe(response => {
      this.clubDetails = response.data;
      response.data.forEach(club => this.leagueTotalValue += club.clubMarketValue);
    })
  }

  getLeagueDetailByLeagueId() {
    this.leagueService.getLeagueDetailByLeagueId(this.leagueId).subscribe(response => {
      this.leagueDetail = response.data;
      this.countryId = response.data.countryId;
      this.leagueForeigners = (response.data.foreigners / response.data.players)
      response.data.age.forEach(a => this.averageAge += a);
      
      
      
      if(true){
        console.log(this.leagueDetail);  
      }
      
    })
  }
  deleteClub(clubDetail: Club) {
    if (window.confirm("Are you sure you want to delete")) {
      this.clubService.deleteClub(clubDetail).subscribe(response => {
        window.location.reload();
      })
    }
  }

  getClubId(clubId: number) {
    this.clubId = clubId
  }





}
