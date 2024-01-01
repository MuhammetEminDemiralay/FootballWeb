import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { League } from 'src/app/Model/league';
import { LeagueService } from 'src/app/Service/league.service';

@Component({
  selector: 'app-leagueadd',
  templateUrl: './leagueadd.component.html',
  styleUrls: ['./leagueadd.component.css']
})
export class CountryaddComponent implements OnInit{
  
  constructor(private formBuilder : FormBuilder,
              private leagueService : LeagueService  
              ){}

  ngOnInit(): void {
    this.createLeagueAddForm()
  }
  
  @Input() countryId : number;
  leagueAddForm : FormGroup;
  
  createLeagueAddForm(){
    this.leagueAddForm = this.formBuilder.group({
      leagueName : ["", Validators.required],
      numberOfTeams : ["", Validators.required],
      totalMarketValue  : ["", Validators.required],
      players : ["", Validators.required],
      leagueLevel : ["", Validators.required],
      reigningChampion : ["", Validators.required]
    })
  }

  leagueAdd(){
    let model = Object.assign({}, this.leagueAddForm.value);
    let leagueModel = <League>{
      leagueName : model.leagueName,
      numberOfTeams : model.numberOfTeams,
      totalMarketValue : model.totalMarketValue,
      players : model.players,
      leagueLevel : model.leagueLevel,
      reigningChampion : model.reigningChampion,
      countryId : this.countryId
    }

    this.leagueService.addLeague(leagueModel).subscribe(response => {
      window.location.reload();
    })
  }


}
