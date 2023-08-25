import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Club } from 'src/app/Model/club';
import { ClubService } from 'src/app/Service/club.service';

@Component({
  selector: 'app-clubadd',
  templateUrl: './clubadd.component.html',
  styleUrls: ['./clubadd.component.css']
})
export class ClubaddComponent implements OnInit{
  
  constructor(private formBuilder : FormBuilder,
              private clubService : ClubService
              ){}

  ngOnInit(): void {
    this.createClubAddForm()
  }

  clubAddForm : FormGroup;
  @Input() leagueId : number;
  @Input() countryId : number;

  createClubAddForm(){
    this.clubAddForm = this.formBuilder.group({
      clubName : ["", Validators.required],
      squadSize : ["", Validators.required],
      averageAge : ["", Validators.required],
      nationalTeamPlayers : ["", Validators.required],
      foreigners : ["", Validators.required],
      stadiumName :  ["", Validators.required],
      stadiumCapacity : ["", Validators.required],
      currentTransferRecord : ["", Validators.required],
      clubMarketValue : ["", Validators.required]
    })
  }

  clubAdd(){
    let model = Object.assign({}, this.clubAddForm.value);
    let clubModel = <Club>{
      leagueId : this.leagueId,
      countryId : this.countryId,
      clubName : model.clubName,
      squadSize : model.squadSize,
      averageAge : model.averageAge,
      nationalTeamPlayers : model.nationalTeamPlayers,
      foreigners : model.foreigners,
      stadiumName : model.stadiumName,
      stadiumCapacity : model.stadiumCapacity,
      currentTransferRecord : model.currentTransferRecord,
      clubMarketValue : model.clubMarketValue
    }

    this.clubService.addClub(clubModel).subscribe(response => {
      console.log("eklendi");
    })
  }



}
