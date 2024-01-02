import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageService } from 'src/app/Service/image.service';

@Component({
  selector: 'app-imagemanager',
  templateUrl: './imagemanager.component.html',
  styleUrls: ['./imagemanager.component.css']
})
export class ImagemanagerComponent implements OnInit, OnChanges{
  constructor(private imageService : ImageService){}

  ngOnInit(): void {
    this.formData = new FormData();  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.countryId){
      this.currentId = this.countryId;
      this.currentPathModel = "countryImagePath";
      this.currentIdModel = "countryId"
    }else if(this.leagueId){
      this.currentId = this.leagueId;      
      this.currentPathModel = "leagueImagePath";
      this.currentIdModel = "leagueId"
    }else if(this.clubId){
      this.currentId = this.clubId;
      this.currentPathModel = "clubImagePath";
      this.currentIdModel = "clubId"
    }
    
  }

  @Input() countryId : number;
  @Input() leagueId : number;
  @Input() clubId : number;

  currentId : number;    // leagueId or clubId
  currentPathModel : string;   // leagueImagePath or clubImagePath
  currentIdModel : string;     // leagueId name or clubId name
  formData : FormData; 
  files : File[] = [];
  file : File;


  inputChange(e : any){    
    this.files = e.target.files;
    this.file = e.target.files[0];
    for (let i = 0; i < this.files.length; i++) {
      this.formData.append('files', this.files[i]);
    }    
    this.formData.append(`${this.currentIdModel}`, `${this.currentId}`);
    this.formData.append(`${this.currentPathModel}`, `${this.files[0].name}`);
  }

  imageAddOrUpdate(){
    if(this.countryId){
      this.imageService.getImageByCountryId(this.currentId).subscribe(response => {
        if(response.data == null){          
          this.imageAdd()          
        }else{
          this.formData.delete("files");
          this.formData.append("file", this.file);
          this.formData.append("id", `${response.data.id}`)
          this.imageUpdate();
        }
      })
    }else if(this.leagueId){
      this.imageService.getImageByLeagueId(this.currentId).subscribe(response => {
        if(response.data == null){
          this.imageAdd();
        }else{
          this.formData.delete("files");
          this.formData.append("file", this.file);
          this.formData.append("id", `${response.data.id}`);
          this.imageUpdate();
        }
      })
    }else if(this.clubId){
      console.log(this.currentId);
      
      this.imageService.getImageByclubId(this.currentId).subscribe(response => {
        if(response.data == null){
          this.imageAdd();
        }else{
          this.formData.delete("files");
          this.formData.append("file", this.file);
          this.formData.append("id", `${response.data.id}`);
          this.imageUpdate();
        }
      })
    }

  }
  
  imageAdd(){
    if(this.countryId){
      this.imageService.countryImageAdd(this.formData).subscribe(response => {
      })
    }else if(this.leagueId){
      this.imageService.leagueImageAdd(this.formData).subscribe(response => {
      })
    }else if(this.clubId){
      this.imageService.clubImageAdd(this.formData).subscribe(response => {
      })
    }
    window.location.reload()
  }

  imageUpdate(){
    if(this.countryId){
      this.imageService.countryImageUpdate(this.formData).subscribe(response => {
      })
    }else if(this.leagueId){
      this.imageService.leagueImageUpdate(this.formData).subscribe(response => {
      })
    }else if(this.clubId){
      this.imageService.clubImageUpdate(this.formData).subscribe(response => {
      })
    }
    window.location.reload()
  }
  
  





}
