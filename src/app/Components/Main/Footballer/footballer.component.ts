import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Footballer } from 'src/app/Model/footballer';
import { FootballerService } from 'src/app/Service/footballer.service';

@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.component.html',
  styleUrls: ['./footballer.component.css']
})
export class FootballerComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute,
              private footballerService : FootballerService){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.footballerId = params["ıd"];
      this.getFootballerByFootballersId();
    })
  }

  footballerId : number;
  footballer : Footballer;
  message : string;


  getFootballerByFootballersId(){
    this.footballerService.getFootballer(this.footballerId).subscribe(response => {
      this.footballer = response.data;
      this.message = response.message;
      console.log(this.footballer);
      console.log(response.message);
      
            
    })
  }



}
