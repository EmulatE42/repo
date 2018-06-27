import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nazivfilma'
})
export class NazivfilmaPipe implements PipeTransform {

  transform(movies: any, term: any): any {
    if (term === undefined) return movies

    return movies.filter(function(movie){

      return movie.naziv.toLowerCase().includes(term.toLowerCase());

    })
  }

}
