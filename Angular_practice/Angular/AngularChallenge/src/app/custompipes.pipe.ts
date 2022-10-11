import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipes'
})
export class CustompipesPipe implements PipeTransform {

  transform(value:any,searchterm:any ):any{
    if(value.length===0){
      return value
    }
  
    return value.filter(function(search:any)
    {
      return search.name.toLowerCase().indexOf(searchterm.toLowerCase())>-1
    });
    //console.log(value);
  }

}
