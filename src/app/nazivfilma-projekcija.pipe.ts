import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nazivfilmaProjekcija'
})
export class NazivfilmaProjekcijaPipe implements PipeTransform {

  transform(pro: any, term4: any): any {
    if (term4 === undefined) return pro

    return pro.filter(function(p){

      return p.nazivFilma.toLowerCase().includes(term4.toLowerCase());

    })
  }

}
