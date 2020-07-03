import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'lise-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: Promise<Book>;

  title = 'A funky book';

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: BookDataService
  ) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');

    this.book = this.service.getBookByIsbn(isbn);

    this.form = new FormGroup({
      control: new FormControl(this.title, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    this.form
      .get('control')
      .statusChanges.pipe(debounceTime(300))
      .subscribe({
        next: (status) => console.log(status),
      });
  }

  updateValues(data: Omit<Book, 'isbn'>): void {
    console.log(data.title);
  }
}
