import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { City } from 'src/app/Model/city';
import { ClubDetail } from 'src/app/Model/clubDetail';
import { Country } from 'src/app/Model/country';
import { Foot } from 'src/app/Model/foot';
import { LeagueDetail } from 'src/app/Model/leagueDetail';
import { Position } from 'src/app/Model/position';
import { CityService } from 'src/app/Service/city.service';
import { ClubService } from 'src/app/Service/club.service';
import { CountryService } from 'src/app/Service/country.service';
import { FootService } from 'src/app/Service/foot.service';
import { FootballerService } from 'src/app/Service/footballer.service';
import { LeagueService } from 'src/app/Service/league.service';
import { PositionService } from 'src/app/Service/position.service';

@Component({
  selector: 'app-footballeradd',
  templateUrl: './footballeradd.component.html',
  styleUrls: ['./footballeradd.component.css']
})
export class FootballeraddComponent implements OnInit{
  constructor(private formBuilder : FormBuilder,
              private countryService : CountryService,
              private leagueService : LeagueService,
              private clubService : ClubService,
              private positionService : PositionService,
              private cityService : CityService,
              private footService : FootService,
              private footballerService : FootballerService
              ){}

  @Input() leagueId : number;
  @Input() countryId : number;
  
  ngOnInit(): void {
    this.getAllCountry();
    this.createFootballerAddForm();
    this.getAllPosition();
    this.getAllFoot();
  }

  footballerAddForm : FormGroup;
  countrys : Country[] = [];
  leagues : LeagueDetail[] = [];
  clubs : ClubDetail[] = [];
  positions : Position[] = [];
  citys : City[] = [];
  foots : Foot[] = [];
  clubId : number;
  footballerCountryId : number;

  getAllCountry(){
    this.countryService.getAll().subscribe(response => {
      this.countrys = response.data;
    })
  }

  selectCountryId(event : any){
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

  createFootballerAddForm(){
    this.footballerAddForm = this.formBuilder.group({
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

  footballerAdd(){
    let model = Object.assign({}, this.footballerAddForm.value);
    this.footballerService.addFootballer(model).subscribe(response => {    
      window.location.reload(); 
    })
  }
}
