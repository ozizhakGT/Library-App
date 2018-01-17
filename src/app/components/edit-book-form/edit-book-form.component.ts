import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.css']
})
export class EditBookFormComponent {

  @Input() book;
  constructor(public activeModal: NgbActiveModal) {}


}
