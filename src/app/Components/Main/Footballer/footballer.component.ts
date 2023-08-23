import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Footballer } from 'src/app/Model/footballer';
import { FootballerDetail } from 'src/app/Model/footballerDetail';
import { FootballerService } from 'src/app/Service/footballer.service';

@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.component.html',
  styleUrls: ['./footballer.component.css']
})
export class FootballerComponent implements OnInit{
  
  constructor(private activatedRoute : ActivatedRoute, private footballerService : FootballerService){}
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
        this.ıd = params["ıd"]
        this.getFootballerDetailByFootballerId();
      })
  }

  ıd : number;
  footballerDetail : FootballerDetail;
  imageUrl = "https://localhost:44319/";

  
  getFootballerDetailByFootballerId(){
    this.footballerService.getFootballerDetailByFootballerId(this.ıd).subscribe(response => {
      this.footballerDetail = response.data;
    })
  }


}
