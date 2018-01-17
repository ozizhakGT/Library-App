import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import * as _ from 'lodash';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { BooksInfoService } from './service/books-info.service';

import { AppComponent } from './app.component';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { BooksNavbarComponent } from './components/books-navbar/books-navbar.component';
import { EditBookFormComponent } from './components/edit-book-form/edit-book-form.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';

import { FilterPipe } from './filters/query/filter-pipe.pipe';
import { SortPipe } from './filters/sort/sort-pipe.pipe';
import { CamelCasePipe } from './filters/camelcase/camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BooksTableComponent,
    BooksNavbarComponent,
    FilterPipe,
    SortPipe,
    CamelCasePipe,
    EditBookFormComponent,
    AddBookFormComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),

  ],
  providers: [BooksInfoService],
  bootstrap: [AppComponent],

  entryComponents: [
    EditBookFormComponent,
    AddBookFormComponent,
    DeleteBookComponent
  ]
})
export class AppModule { }
