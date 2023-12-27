import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NationalTeam } from 'src/app/Model/nationalTeam';
import { NationalTeamDetail } from 'src/app/Model/nationalTeamDetail';
import { NationalteamService } from 'src/app/Service/nationalteam.service';

@Component({
  selector: 'app-nationalteamupdate',
  templateUrl: './nationalteamupdate.component.html',
  styleUrls: ['./nationalteamupdate.component.css']
})
export class NationalteamupdateComponent implements OnInit, OnChanges{
  
  constructor(private formBuilder : FormBuilder, 
              private activatedRoute : ActivatedRoute, 
              private nationalTeamService : NationalteamService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.countryId = params["id"];
    })
    this.createNationalTeamUpdateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.nationalTeamId){
      console.log(this.nationalTeamId);
      
      this.getNationalTeamByNationalTeamId();
    }
  }

  @Input() nationalTeamId : number;
  countryId : number;
  nationalTeamUpdateForm : FormGroup;
  nationalTeamDetail : NationalTeamDetail;

  createNationalTeamUpdateForm(){
    this.nationalTeamUpdateForm = this.formBuilder.group({
      nationalTeamLevel : ["", Validators.required],
      nationalTeamName : ["", Validators.required],
      squadSize : ["", Validators.required],
      averageAge : ["", Validators.required],
      marketValue : ["", Validators.required]
    })
  }

  getNationalTeamByNationalTeamId(){
    this.nationalTeamService.getNationalTeamDetailByNationalTeamId(this.nationalTeamId).subscribe(response => {
      this.nationalTeamDetail = response.data;
      console.log(response.data);
      
      this.nationalTeamUpdateForm.setValue({
        nationalTeamLevel : response.data.nationalTeamLevel,
        nationalTeamName : response.data.nationalTeamName,
        squadSize : response.data.squadSize,
        averageAge : response.data.averageAge,
        marketValue : response.data.marketValue
      })
    })
  }
  
  nationalTeamUpdate(){
    let model = Object.assign({}, this.nationalTeamUpdateForm.value);

    let nationalTeamModel = <NationalTeam>{
      id : this.nationalTeamId,
      countryId : this.countryId,
      nationalTeamLevel : model.nationalTeamLevel,
      nationalTeamName : model.nationalTeamName,
      squadSize : model.squadSize, 
      averageAge : model.averageAge,  
      marketValue : model.marketValue 
    }
    
    this.nationalTeamService.updateNationalTeam(nationalTeamModel).subscribe(response => {
      console.log(response.message);
    })
  }
}
