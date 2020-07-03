import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable, of } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  private readonly BASE_URL = 'http://localhost:4730';

  constructor(private readonly client: HttpClient) {}

  getBookByIsbn(isbn: string): Promise<Book> {
    const url = `${this.BASE_URL}/books/${isbn}`;
    return this.client.get<Book>(url).toPromise();
  }

  readBooks(): Observable<Book[]> {
    return this.client
      .get<Book[]>(`${this.BASE_URL}/books`)
      .pipe(tap((response) => console.log(response)));
  }
}
