import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor() { }

  readBooks(): Book[] {
    return [
      {
        title: 'Design Patterns',
        subtitle: 'Elements of Reusable Object-Oriented Software',
      },
      {
        title: 'REST und HTTP',
        subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
      },
      {
        title: 'Eloquent JavaScript',
        subtitle: 'A Modern Introduction to Programming',
      },
    ];
  }
}
