import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { League } from 'src/app/Model/league';
import { LeagueDetail } from 'src/app/Model/leagueDetail';
import { CountryService } from 'src/app/Service/country.service';
import { LeagueService } from 'src/app/Service/league.service';

@Component({
  selector: 'app-leagueupdate',
  templateUrl: './leagueupdate.component.html',
  styleUrls: ['./leagueupdate.component.css']
})
export class CountryupdateComponent implements OnInit, OnChanges{

  constructor(private countryService : CountryService, private activatedRoute : ActivatedRoute ,private leagueService : LeagueService, private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.countryId = params["id"];
    })
    this.createLeagueUpdate();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.leagueId){
      this.getLeagueDetailByLeagueId();
    }
  }
  
  @Input() leagueId : number;
  leagueUpdateForm : FormGroup;
  countryId : number;
  leagueDetail : LeagueDetail;

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
      window.location.reload();
    })
  }

}
