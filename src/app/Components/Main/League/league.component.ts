import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/Model/club';
import { ClubService } from 'src/app/Service/club.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit{
  
  constructor(private activatedRoute : ActivatedRoute,
    private clubService : ClubService){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.leagueId = params["ıd"];
      this.getClubsByLeagueId()
    })
  }

  clubs : Club[] = [];
  leagueId : number;

  getClubsByLeagueId(){
    this.clubService.getClubsByLeagueId(this.leagueId).subscribe(response => {
      this.clubs = response.data;
    })
  }

  filechange(event : any){
    let file = event.target.value;
    console.log(event);
    
  }

}
