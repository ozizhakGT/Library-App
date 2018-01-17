import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';


@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent {

  constructor(public activeModal: NgbActiveModal) {}

  titleExist = false; // flag

  @Input() booksRef;

  // Compore the same Title Fn
  checkBookTitle(title) {
    const indexOfTitle = _.findIndex(this.booksRef, function(bookRef) {
      return _.isEqual(bookRef.Title.toUpperCase(), title.toUpperCase());
    });
    this.titleExist = indexOfTitle !== -1;
  }
}


