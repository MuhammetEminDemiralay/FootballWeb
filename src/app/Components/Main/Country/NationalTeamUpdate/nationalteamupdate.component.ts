import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NationalTeam } from 'src/app/Model/nationalTeam';
import { NationalteamService } from 'src/app/Service/nationalteam.service';

@Component({
  selector: 'app-nationalteamupdate',
  templateUrl: './nationalteamupdate.component.html',
  styleUrls: ['./nationalteamupdate.component.css']
})
export class NationalteamupdateComponent implements OnInit{
  
  constructor(private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute, private nationalTeamService : NationalteamService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.countryId = params["ıd"];
    })
    this.createNationalTeamUpdateForm();
  }

  @Input() nationalTeamId : number;
  countryId : number;
  nationalTeamUpdateForm : FormGroup;

  createNationalTeamUpdateForm(){
    this.nationalTeamUpdateForm = this.formBuilder.group({
      nationalTeamLevel : ["", Validators.required],
      nationalTeamName : ["", Validators.required],
      nationalTeamPicture : ["", Validators.required],
      squadSize : ["", Validators.required],
      averageAge : ["", Validators.required],
      marketValue : ["", Validators.required]
    })
  }

  nationalTeamUpdate(){
    let model = Object.assign({}, this.nationalTeamUpdateForm.value);
    let nationalTeamModel = <NationalTeam>{
      id : this.nationalTeamId,
      countryId : this.countryId,
      nationalTeamLevel : model.nationalTeamLevel,
      nationalTeamName : model.nationalTeamName,
      nationalTeamPicture : model.nationalTeamPicture, 
      squadSize : model.squadSize, 
      averageAge : model.averageAge,  
      marketValue : model.marketValue 
    }
    
    this.nationalTeamService.updateNationalTeam(nationalTeamModel).subscribe(response => {
      console.log(response.message);
      
    })

  }

}
