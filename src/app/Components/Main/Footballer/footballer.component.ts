import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubDetail } from 'src/app/Model/clubDetail';
import { Footballer } from 'src/app/Model/footballer';
import { FootballerDetail } from 'src/app/Model/footballerDetail';
import { TransferHistoryDetail } from 'src/app/Model/transferhistorydetail';
import { ClubService } from 'src/app/Service/club.service';
import { FootballerService } from 'src/app/Service/footballer.service';
import { TransferhistoryService } from 'src/app/Service/transferhistory.service';

@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.component.html',
  styleUrls: ['./footballer.component.css']
})
export class FootballerComponent implements OnInit{
  
  constructor(private activatedRoute : ActivatedRoute,
              private footballerService : FootballerService,
              private transferHistoryService : TransferhistoryService,
              private clubService : ClubService
              ){}


  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
        this.ıd = params["ıd"]
        this.getFootballerDetailByFootballerId();
        //this.getTransferHistoryByFootballerId();
      })
  }

  ıd : number;
  footballerDetail : FootballerDetail;
  clubDetail : ClubDetail;
  imageUrl = "https://localhost:44319/";
  noFootballerPhoto = "Images/783c32fcf6fd45bcb5bf8c25c4719636.jpg"
  saha = "Images/b45e40a275244e0fabba7775b19a0fe7.png"
  transferHistoryDetail : TransferHistoryDetail[] = []; 


  
  getFootballerDetailByFootballerId(){
    this.footballerService.getFootballerDetailByFootballerId(this.ıd).subscribe(response => {
      this.footballerDetail = response.data;
      console.log(response.data);
      
      this.getClubDetailByClubId();
    })
  }

  getClubDetailByClubId(){
    this.clubService.getClubDetailByClubId(this.footballerDetail.clubId).subscribe(response => {
      this.clubDetail = response.data;
    })
  }

  // getTransferHistoryByFootballerId(){
  //   this.transferHistoryService.getTransferHistoryDetailByFootballerId(this.ıd).subscribe(response => {
  //     this.transferHistoryDetail = response.data;
  //   })
  // }
  


}
