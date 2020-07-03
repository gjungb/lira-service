import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';

import { Book } from '../model/book';
import { BookDataService } from '../shared/book-data.service';

import { tap, map, takeUntil } from 'rxjs/operators';
import { timer, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'lise-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];

  books$: Observable<Book[]>;

  end = 7;

  // private sub: Subscription;

  private destroy$ = new EventEmitter<void>();

  constructor(private readonly bookData: BookDataService) {}

  ngOnInit(): void {
    const ticker$ = timer(2000, 3000);

    ticker$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (value) => console.log(value),
    });

    this.books$ = this.bookData.readBooks().pipe(
      map((value) => value.slice(0, 2)),
      tap((value) => console.log(value))
    );
  }

  ngOnDestroy(): void {
    // this.sub?.unsubscribe();
    this.destroy$.emit();
  }

  private initList(): void {}
}
