import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { League } from 'src/app/Model/league';
import { LeagueService } from 'src/app/Service/league.service';

@Component({
  selector: 'app-countryupdate',
  templateUrl: './countryupdate.component.html',
  styleUrls: ['./countryupdate.component.css']
})
export class CountryupdateComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute ,private leagueService : LeagueService, private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.countryId = params["ıd"]
    })
    this.createLeagueUpdate();
  }


  @Input() leagueId : number;
  leagueUpdateForm : FormGroup;
  countryId : number;

  createLeagueUpdate(){
    this.leagueUpdateForm = this.formBuilder.group({
      leagueName : ["", Validators.required],
      numberOfTeams : ["", Validators.required],
      totalMarketValue  : ["", Validators.required],
      players : ["", Validators.required],
      leagueLevel : ["", Validators.required],
      reigningChampion : ["", Validators.required]
    })

    // this.leagueUpdateForm.setValue({
    //   leagueName : 
    // })
  }


  leagueUpdate(){
    let model = Object.assign({}, this.leagueUpdateForm.value);
    let leagueModel = <League>{
      id : this.leagueId,
      countryId : this.countryId,
      leagueName : model.leagueName,
      leagueLevel : model.leagueLevel,
      numberOfTeams : model.numberOfTeams,
      players : model.players,
      reigningChampion : model.reigningChampion,
      totalMarketValue : model.totalMarketValue
    }

    this.leagueService.leagueUpdate(leagueModel).subscribe(response => {
      console.log(response.message);
    })
  }


}
