import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  isActive : boolean = true;
  getStyles(){
    return {
      'background-color' : this.isActive ? 'yellow' : 'blue',
      'font-size' : this.isActive ? '100px' : '50px' 
    }
  }

  aa : any = [1, 2, 3 ,4 , 5, 6]

}
