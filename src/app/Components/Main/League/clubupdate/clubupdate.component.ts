import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/Model/club';
import { ClubDetail } from 'src/app/Model/clubDetail';
import { ClubService } from 'src/app/Service/club.service';

@Component({
  selector: 'app-clubupdate',
  templateUrl: './clubupdate.component.html',
  styleUrls: ['./clubupdate.component.css']
})
export class ClubupdateComponent implements OnInit, OnChanges{
  
  constructor(private activatedRoute : ActivatedRoute, private formBuilder : FormBuilder, private clubService : ClubService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.leagueId = params["id"]
    })
    this.createClubUpdateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.clubId){
      console.log(this.clubId);
      this.getClubDetailByClubId();
    }
  }

  @Input() clubId : number;
  leagueId : number;
  clubUpdateForm : FormGroup;
  clubDetail : ClubDetail;
  
  getClubDetailByClubId(){
    this.clubService.getClubDetailByClubId(this.clubId).subscribe(response => {
      this.clubDetail = response.data;
      console.log(response.data);
      
      this.clubUpdateForm.setValue({
        clubName : response.data.clubName,
        squadSize : response.data.squadSize,
        averageAge : response.data.averageAge,
        nationalTeamPlayers : response.data.nationalTeamPlayers,
        foreigners : response.data.foreigners,
        stadiumName : response.data.stadiumName,
        stadiumCapacity : response.data.stadiumCapacity,
        currentTransferRecord : response.data.currentTransferRecord,
        clubMarketValue : response.data.clubMarketValue
      })
    })
  }

  createClubUpdateForm(){
    this.clubUpdateForm = this.formBuilder.group({
      clubName : ["", Validators.required],
      squadSize : ["", Validators.required],
      averageAge : ["", Validators.required],
      nationalTeamPlayers : ["", Validators.required],
      foreigners : ["", Validators.required],
      stadiumName :  ["", Validators.required],
      stadiumCapacity : ["", Validators.required],
      currentTransferRecord : ["", Validators.required],
      clubMarketValue : ["", Validators.required],
    });
  }

  clubUpdate(){
    let model = Object.assign({}, this.clubUpdateForm.value);
    let clubModel = <Club>{
      id : this.clubId,
      leagueId : this.clubDetail.leagueId,
      countryId : this.clubDetail.countryId,
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

    this.clubService.updateClub(clubModel).subscribe(response => {
      console.log("güncelleme oldu");  
      window.location.reload();
    })
  }

}
