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
    if(this.leagueId){
      this.currentId = this.leagueId;      
      this.currentPathModel = "leagueImagePath";
      this.currentIdModel = "leagueId"
      this.getImageByImageId()
    }else if(this.clubId){
      this.currentId = this.clubId;
      this.currentPathModel = "clubImagePath";
      this.currentIdModel = "clubId"
      this.getImageByImageId()
    }
    
  }

  @Input() leagueId : number;
  @Input() clubId : number;

  currentId : number;
  currentPathModel : string;
  currentIdModel : string;
  formData : FormData; 
  files : File[] = [];
  currentImage : any;

  inputChange(e : any){
    this.files = e.target.files;
    for (let i = 0; i < this.files.length; i++) {
      this.formData.append('files', this.files[i]);
    }    
    this.formData.append(`${this.currentIdModel}`, `${this.currentId}`);
    this.formData.append(`${this.currentPathModel}`, `${this.files}`);
  }

  getImageByImageId(){
    this.imageService.getImageByImageId(this.currentId).subscribe(response => {
      this.currentImage = response.data;
    })
  }

  // addImage(){
  //   if(window.confirm("Are you sure you want to delete the existing image?")){
  //     this.imageService.deleteLeagueImage(this.currentImage).subscribe(response => {
  //       if(response.success){
  //         this.imageService.leagueImageAdd(this.formData).subscribe(() => {
  //           window.location.reload();
  //         })
  //       }
  //     })
  //   }

  // }

}
