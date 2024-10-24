import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
 })
export class CustomDatePipe implements PipeTransform {

  transform(value: string, formatType?: any): string {
    console.log(value);
   const date:Date=new Date(value);

   const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if needed
   const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based) and pad
   const year = date.getFullYear(); // Get year      
   return  `${day}/${month}/${year}`
  }

}
