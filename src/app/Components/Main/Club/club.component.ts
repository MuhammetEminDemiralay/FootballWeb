import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Footballer } from 'src/app/Model/footballer';
import { FootballerService } from 'src/app/Service/footballer.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute,
              private footballerService : FootballerService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.clubId = params["ıd"]
      this.getFootballeryByClubId();
    })
  }

  footballers : Footballer[] = [];
  clubId : number = 0;

  getFootballeryByClubId(){
    this.footballerService.getFootballersByClubId(this.clubId).subscribe(response => {
      this.footballers = response.data;
    })
  }

}
