import { Component, OnInit } from '@angular/core';

import { Book } from '../model/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'lise-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private readonly bookData: BookDataService) {}

  ngOnInit(): void {
    this.books = this.bookData.readBooks();
  }
}
