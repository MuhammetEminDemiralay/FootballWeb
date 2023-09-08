import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/Model/city';
import { Club } from 'src/app/Model/club';
import { ClubDetail } from 'src/app/Model/clubDetail';
import { Country } from 'src/app/Model/country';
import { Foot } from 'src/app/Model/foot';
import { Footballer } from 'src/app/Model/footballer';
import { FootballerDetail } from 'src/app/Model/footballerDetail';
import { League } from 'src/app/Model/league';
import { LeagueDetail } from 'src/app/Model/leagueDetail';
import { NationalTeamDetail } from 'src/app/Model/nationalTeamDetail';
import { Position } from 'src/app/Model/position';
import { TransferHistory } from 'src/app/Model/transferHistory';
import { CityService } from 'src/app/Service/city.service';
import { ClubService } from 'src/app/Service/club.service';
import { CountryService } from 'src/app/Service/country.service';
import { FootService } from 'src/app/Service/foot.service';
import { FootballerService } from 'src/app/Service/footballer.service';
import { LeagueService } from 'src/app/Service/league.service';
import { NationalteamService } from 'src/app/Service/nationalteam.service';
import { PositionService } from 'src/app/Service/position.service';
import { TransferhistoryService } from 'src/app/Service/transferhistory.service';

@Component({
  selector: 'app-footballerupdate',
  templateUrl: './footballerupdate.component.html',
  styleUrls: ['./footballerupdate.component.css']
})
export class FootballerupdateComponent implements OnInit{
  
  constructor(private countryService : CountryService,
              private leagueService : LeagueService,
              private clubService : ClubService,
              private footballerService : FootballerService,
              private positionService : PositionService,
              private cityService : CityService,
              private footService : FootService,
              private formBuilder : FormBuilder,
              private nationalTeamService : NationalteamService,
              private activatedRoute : ActivatedRoute,
              private transferHistoryService : TransferhistoryService
              ){}

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
    this.footballerId = params["id"];
    this.getFootballerByFootballerId();

   })
   this.getAllCountry(); 
   this.getAllPosition();
   this.getAllFoot();
   this.createFootballerForm();
   this.createTransferHistory();
  }

  footballerId : number;
  countrys : Country[] = [];
  countryId : number;
  leagues : LeagueDetail[] = []
  leagueId : number;
  clubs : ClubDetail[] = [];
  clubId : number;
  positions : Position[] = [];
  footballerUpdateForm : FormGroup;
  footballerDetail : FootballerDetail;
  footballerCountryId : number;
  nationalTeamDetail : NationalTeamDetail[] = [];
  citys : City[] = [];
  foots : Foot[] = [];
  nationalTeamLevel : number = null;
  nationalTeamSelected : boolean = false;

  transferHistoryForm : FormGroup;


  getAllCountry(){
    this.countryService.getAll().subscribe(response => {
      this.countrys = response.data;
    })
  }

  selectCountryId(event : any){
    if(this.countryId){
      window.location.reload()
    }
    this.countryId = event.target.value;
    this.getleagueByCountryId();
  }

  getleagueByCountryId(){
    this.leagueService.getLeaguesDetailByCountryId(this.countryId).subscribe(response => {
      this.leagues = response.data;
    })
  }

  selectLeagueId(event : any){
    if(this.leagueId){
      this.leagueId = null;
    }
    this.leagueId = event.target.value;
    this.getClubsByLeagueId();
  }

  getClubsByLeagueId(){
    this.clubService.getClubsDetailByLeagueId(this.leagueId).subscribe(response => {
      this.clubs = response.data;
    })
  }

  selectClubId(event : any){
    this.clubId = event.target.value;
  }

  getAllPosition(){
    this.positionService.getAllPosition().subscribe(response => {
      this.positions = response.data;
    })
  }

  selectNationaltyId(event : any){
    this.footballerCountryId = event.target.value;
    this.getNationalTeamByCountryId();
    this.getCityByCountryId();
  }

  getCityByCountryId(){
    this.cityService.getCityByCountryId(this.footballerCountryId).subscribe(response => {
      this.citys = response.data
    })
  }

  getAllFoot(){
    this.footService.getAllFoot().subscribe(response => {
      this.foots = response.data;
    })
  }

  selectedNationalTeam(e : any){
    if(e.target.checked){
      this.nationalTeamSelected = true;
    }else{
      this.nationalTeamSelected = false;
    }      
  }

  nationalTeamLevelSelected(e : any){
    this.nationalTeamLevel = e.target.value;     
  }

  getNationalTeamByCountryId(){
    this.nationalTeamService.getNationalTeamDetailByCountryId(this.footballerCountryId).subscribe(response => {
      this.nationalTeamDetail = response.data;
    })
  }



  createFootballerForm(){
    this.footballerUpdateForm = this.formBuilder.group({
      clubId : ["", Validators.required],
      leagueId : ["", Validators.required],
      countryId : ["", Validators.required],
      cityId : ["", Validators.required],
      positionId : ["", Validators.required],
      footId : ["", Validators.required],
      name : ["", Validators.required],
      dateOfBirth : ["", Validators.required],
      age : ["", Validators.required],
      height : ["", Validators.required],
      footballerValue : ["", Validators.required],
      playerNumber : ["", Validators.required]
    })
  }

  getFootballerByFootballerId(){
    this.footballerService.getFootballerDetailByFootballerId(this.footballerId).subscribe(response => {
      console.log(response.data);
      this.footballerDetail = response.data;
       this.footballerUpdateForm.patchValue({
        name : response.data.name,
        dateOfBirth : response.data.dateOfBirth,
        age : response.data.age,
        height : response.data.height,
        footballerValue : response.data.footballerValue,
        playerNumber : response.data.playerNumber,
        cityId : response.data.cityId,
        footId : response.data.footId,
        positionId : response.data.positionId,
       })
    })
  }

  footballerUpdate(){
    let model = Object.assign({}, this.footballerUpdateForm.value);
    let footballerModel = <Footballer>{
      id : this.footballerId,
      clubId : model.clubId,
      leagueId : model.leagueId,
      countryId : model.countryId,
      positionId : model.positionId,
      footId : model.footId,
      name : model.name,
      age : model.age,
      height : model.height,
      cityId : model.cityId,
      dateOfBirth : model.dateOfBirth,
      footballerValue : model.footballerValue,
      playerNumber : model.playerNumber,
      nationalTeamPlayerActive : this.nationalTeamSelected,
      nationalTeamLevel : this.nationalTeamLevel != null ? this.nationalTeamLevel : this.footballerDetail.nationalTeamLevel 
    }

    this.footballerService.updateFootballer(footballerModel).subscribe(response => {
    })
  }


  createTransferHistory(){
    this.transferHistoryForm = this.formBuilder.group({
       season : ["", Validators.required],
       joined : ["", Validators.required],
       contractExpires : ["", Validators.required],
       fee : ["", Validators.required]
    })
  }


  transferHistoryaAdded(){
    let model = Object.assign({}, this.transferHistoryForm.value);
    let transferHistoryModel =  <TransferHistory>{
      footballerId : this.footballerDetail.id,
      currentClubId : this.footballerDetail.clubId,
      lastClubId : this.clubId,
      season : model.season,
      joined : model.joined,
      contractExpires : model.contractExpires,
      fee : model.fee
    }
    if(this.footballerDetail.clubId == this.clubId){
      console.log("Faklı bir klüp seçiniz");
    }else{
      this.transferHistoryService.addTransferHistory(transferHistoryModel).subscribe(response => {
        console.log("Transfer geçmişine eklendi");
      })
    }

  }

  transferNewClub(){
    if(this.footballerDetail.clubId == this.clubId){
    }
  }


}
