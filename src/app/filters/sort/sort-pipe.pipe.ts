import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortPipe'
})
export class SortPipe implements PipeTransform {

  transform(books: any, arg?: any): any {
   return books = _.sortBy(books, [function(book) { return book[arg]; }]);
  }
}
