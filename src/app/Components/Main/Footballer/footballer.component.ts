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
  
  constructor(private activatedRoute : ActivatedRoute, private footballerService : FootballerService){}
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
        this.ıd = params["ıd"]
        this.getFootballer();
      })
  }

  ıd : number;
  footballer : Footballer;

  getFootballer(){
    this.footballerService.getFootballer(this.ıd).subscribe(response => {
      this.footballer = response.data;
    })
  }


}
