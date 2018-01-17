import { Component, Output, EventEmitter } from '@angular/core';
import { BooksInfoService } from '../../service/books-info.service';

@Component({
  selector: 'books-navbar',
  templateUrl: './books-navbar.component.html',
  styleUrls: ['./books-navbar.component.css']
})
export class BooksNavbarComponent {

  @Output() queryChanged: EventEmitter<any>;
  @Output() onAddBook: EventEmitter<any>;
  @Output() onSortSelect: EventEmitter<any>;

  queryString = null;

  constructor(private service: BooksInfoService) {
    this.queryChanged = new EventEmitter<any>();
    this.onAddBook = new EventEmitter<any>();
    this.onSortSelect = new EventEmitter<any>();
  }


  // Search Fn Output
  onChange() {
    this.queryChanged.emit(this.queryString);
  }

  // Add book button Fn Output
  open() {
    this.onAddBook.emit();
  }

  //  Sort book Fn Output
  onSort(argument) {
    this.onSortSelect.emit(argument);
  }


}
