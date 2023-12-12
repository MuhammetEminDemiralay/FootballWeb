import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { League } from 'src/app/Model/league';
import { LeagueDetail } from 'src/app/Model/leagueDetail';
import { CountryService } from 'src/app/Service/country.service';
import { LeagueService } from 'src/app/Service/league.service';

@Component({
  selector: 'app-countryupdate',
  templateUrl: './countryupdate.component.html',
  styleUrls: ['./countryupdate.component.css']
})
export class CountryupdateComponent implements OnInit{

  constructor(private countryService : CountryService, private activatedRoute : ActivatedRoute ,private leagueService : LeagueService, private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.leagueId = params["id"];
    })
    this.createLeagueUpdate();
    this.getLeagueDetailByLeagueId();
  }
  
  leagueUpdateForm : FormGroup;
  countryId : number;
  leagueDetail : LeagueDetail;
  leagueId : number;

  getLeagueDetailByLeagueId(){
    this.leagueService.getLeagueDetailByLeagueId(this.leagueId).subscribe(response => {
      this.leagueDetail = response.data;

      this.leagueUpdateForm.setValue({
        leagueName : response.data.leagueName,
        leagueLevel : response.data.leagueLevel,
        numberOfTeams : response.data.numberOfTeams,
        players : response.data.players,
        reigningChampion : response.data.reigningChampion,
        totalMarketValue : response.data.totalMarketValue,
      })   
    })

  }

  createLeagueUpdate(){
    this.leagueUpdateForm = this.formBuilder.group({
      leagueName : ["", Validators.required],
      numberOfTeams : ["", Validators.required],
      totalMarketValue  : ["", Validators.required],
      players : ["", Validators.required],
      leagueLevel : ["", Validators.required],
      reigningChampion : ["", Validators.required]
    })
  }


  leagueUpdate(){
    let model = Object.assign({}, this.leagueUpdateForm.value);
    let leagueModel = <League>{
      id : this.leagueId,
      countryId : this.leagueDetail.countryId,
      leagueName : model.leagueName,
      leagueLevel : model.leagueLevel,
      numberOfTeams : model.numberOfTeams,
      players : model.players,
      reigningChampion : model.reigningChampion,
      totalMarketValue : model.totalMarketValue
    }

    this.leagueService.leagueUpdate(leagueModel).subscribe(response => {
    })
  }


}
