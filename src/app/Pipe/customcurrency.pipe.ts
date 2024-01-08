import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customcurrency'
})
export class CustomcurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value >= 1000000000){
      const formatValue = value / 1000000000;
      formatValue.toLocaleString(undefined, {})
      return formatValue.toLocaleString(undefined, {style : 'currency', currency : 'EUR'}) + "bn"
    }else if(value >= 1000000){
      const formatValue = value / 1000000;
      return formatValue.toLocaleString(undefined, {style : 'currency', currency : 'EUR'}) + "m"
    }else if(value >= 0){
      const formatValue = value / 1000;
      return formatValue.toLocaleString(undefined, {style : 'currency', currency : 'EUR', maximumSignificantDigits : 3}) + "k"
    }
    return value
  }

}
