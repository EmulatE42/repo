import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zanrFilma'
})
export class ZanrFilmaPipe implements PipeTransform {

  transform(movies: any, term2: any): any {
    if (term2 === undefined) return movies

    return movies.filter(function(movie){

      return movie.zanr.toLowerCase().includes(term2.toLowerCase());

    })
  }

}
