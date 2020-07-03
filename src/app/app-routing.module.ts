import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
