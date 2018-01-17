import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(books: any, queryString: string) {
   if (queryString) {
    queryString = queryString.toLowerCase();
    return books.filter(function (el: any) {
     return el.Autuor.toLowerCase().indexOf(queryString) > -1 || el.Title.toLowerCase().indexOf(queryString) > -1;
    });
   }
   return books;
  }
 }
