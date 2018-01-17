import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent {
    @Input() books;
    @Input() queryString;
    @Input() sortBy;
    @Output() deleteBook: EventEmitter<any>;
    @Output() editBook: EventEmitter<any>;

    editRowIndex = null;

    constructor() {
      this.deleteBook = new EventEmitter<any>();
      this.editBook = new EventEmitter<any>();
     }

    //  Delete book Output
    onDeleteBook(book) {
      this.deleteBook.emit(book.Id);
    }
    // Help the For loop functioning
    trackByFn(index, book) {
      return book.Id;
    }
    // Edit book Output
    onEdit(book) {
      this.editBook.emit(book);
    }
}
