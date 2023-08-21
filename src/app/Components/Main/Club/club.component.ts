import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubDetail } from 'src/app/Model/clubDetail';
import { Footballer } from 'src/app/Model/footballer';
import { FootballerDetail } from 'src/app/Model/footballerDetail';
import { ClubService } from 'src/app/Service/club.service';
import { FootballerService } from 'src/app/Service/footballer.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute,
              private footballerService : FootballerService,
              private clubService : ClubService
              ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.clubId = params["ıd"]
      this.getFootballeryByClubId();
      this.getClubDetailByClubId();
    })
  }

  footballersDetail : FootballerDetail[] = [];
  clubDetail : ClubDetail;
  clubId : number = 0;
  imageUrl = "https://localhost:44319/";

  getFootballeryByClubId(){
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
