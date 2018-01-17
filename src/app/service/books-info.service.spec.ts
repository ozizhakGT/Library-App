import { TestBed, inject } from '@angular/core/testing';

import { BooksInfoService } from './books-info.service';

describe('BooksInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksInfoService]
    });
  });

  it('should be created', inject([BooksInfoService], (service: BooksInfoService) => {
    expect(service).toBeTruthy();
  }));
});
