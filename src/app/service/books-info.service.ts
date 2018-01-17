import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BooksInfoService {
  private books = './../data/books-info.json';


  constructor(private http: Http) { }

  getBooks() {
   return this.http.get(this.books);
  }
}
