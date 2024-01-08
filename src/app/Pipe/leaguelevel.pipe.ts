import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leaguelevel'
})
export class LeaguelevelPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value == 1){
      return "First Tier"
    }else if(value == 2){
      return "Second Tier"
    }else if(value == 3){
      return "Third Tier"
    }else if(value == 4){
      return "Fourth Tier"
    }else if(value == 5){
      return "Fifth Tier"
    }else{
      return "Sixth Tier" 
    }
  }

}
