import { Component } from '@angular/core';
import { BooksInfoService } from './service/books-info.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormsModule } from '@angular/forms';

import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { EditBookFormComponent } from './components/edit-book-form/edit-book-form.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { BooksNavbarComponent } from './components/books-navbar/books-navbar.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: BooksInfoService, private modalService: NgbModal) { }

  books: any[];
  queryString: string = null;
  sortBy = 'Title';
  onDelete: Boolean;

  ngOnInit() {
    this.getBooks();
  }

  ///////////////// External Functions /////////////////

  // Books list service
  getBooks() {
    this.service.getBooks().subscribe(respose => {
      this.books = respose.json();
    });
  }

  // Real-Time Search Fn
  onQueryChange(value: any) {
    this.queryString = value;
  }

  // Sorting Fn
  onSortSelect(value: any) {
    this.sortBy = value;
  }

  // Add book Fn
  onAddBook(event) {
    const popupRef = this.modalService.open(AddBookFormComponent);
    popupRef.componentInstance.booksRef = this.books;
    popupRef.result.then(
      result => {
        if (result) {
          if (!result.Image || !this.isUrlImage(result.Image)) {
            result.Image = 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png';
          }
          result.Title = result.Title.replace(/\W/g, ' ');
          this.books.push(result);
          this.refreshBookList();
        }
      },
      reason => {
        if (reason) {
          console.log(reason);
        }
      });
  }

  // Edit book Fn
  onEditBook(event) {
    const popupRef = this.modalService.open(EditBookFormComponent);
    const bookCopy = Object.assign({}, event);
    popupRef.componentInstance.book = bookCopy;

    popupRef.result.then(
      result => {
        let bookIndex = this.getBookIndex(result.Id);  // -1, 0-10

        if (bookIndex !== -1) {
          if (!result.Image || !this.isUrlImage(result.Image)) {
            result.Image = 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png';
          }
          this.books[bookIndex] = result;
          result.Title = result.Title.replace(/\W/g, ' ');
          this.refreshBookList();
        }
      }, reason => {
        if (reason) {
          console.log(reason);
        }
      });
  }

  // Delete book Fn
  OnDeleteBook(bookId: any) {
    const popupRef = this.modalService.open(DeleteBookComponent);
    popupRef.result.then(
      result => {
      let bookIndex = this.getBookIndex(bookId);

      if (!_.isEqual(bookIndex, -1)) {
        this.books.splice(bookIndex, 1);
      }
      this.refreshBookList();
    }, reason => {
      if (reason) {
        console.log(reason);
      }
    });
  }

  ///////////////// Internal Functions /////////////////

  // For updating Child component with changes (used for ngFor update while filtering)
  refreshBookList() {
    this.books = this.books.concat([]);
  }

  isUrlImage(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  // Get the book index Fn(use more that once)
  getBookIndex(bookId) {
    return _.findIndex(this.books, function(book) {
      return book.Id === bookId;
    });
  }
}
