import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballerDetail } from 'src/app/Model/footballerDetail';
import { NationalTeam } from 'src/app/Model/nationalTeam';
import { NationalTeamDetail } from 'src/app/Model/nationalTeamDetail';
import { FootballerService } from 'src/app/Service/footballer.service';
import { NationalteamService } from 'src/app/Service/nationalteam.service';

@Component({
  selector: 'app-nationalteam',
  templateUrl: './nationalteam.component.html',
  styleUrls: ['./nationalteam.component.css']
})
export class NationalteamComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private footballerService: FootballerService,
    private nationalTeamService: NationalteamService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.nationalTeamId = params["id"];
      this.getNationalTeamDetailByNationalTeamId();
    })
  }

  nationalTeamId: number;
  countryId: number;
  nationalTeamLevel: number;
  nationalTeamDetail: NationalTeamDetail;
  footballerDetails: FootballerDetail[] = []
  imageUrl = "https://localhost:44319/"
  noFootballerPhoto = "Images/783c32fcf6fd45bcb5bf8c25c4719636.jpg"


  getNationalTeamDetailByNationalTeamId() {
    this.nationalTeamService.getNationalTeamDetailByNationalTeamId(this.nationalTeamId).subscribe(response => {
      this.nationalTeamDetail = response.data;
      this.nationalTeamLevel = response.data.nationalTeamLevel;
      this.countryId = response.data.countryId;
      this.getFootballerDetailByNationalTeam();
      
    })
  }

  getFootballerDetailByNationalTeam() {
    this.footballerService.getFootballerDetailByNationalTeam(this.countryId, true, this.nationalTeamLevel).subscribe(response => {
      this.footballerDetails = response.data;
      console.log(response.data);
    })
  }

  playerActiveAndPassive(footballerDetail: FootballerDetail) {
    footballerDetail.nationalTeamPlayerActive = false;
    this.footballerService.updateFootballer(footballerDetail).subscribe(response => {
      window.location.reload();
    })
  }

  playerChangeLeagueLevel() {

  }

}
