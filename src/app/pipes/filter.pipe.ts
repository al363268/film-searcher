import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: Movie[], text: string): Movie[] {
    if (text.length === 0) { return movies; }

    text = text.toLocaleLowerCase();

    return movies.filter( movie => {
      return movie.title.toLocaleLowerCase().includes(text)
        || movie.original_title.toLocaleLowerCase().includes(text);
    });
  }

}
