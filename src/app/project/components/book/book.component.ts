import {Component, OnInit, Inject} from '@angular/core';
import {Table} from 'primeng/table';

import {Book} from '../../api/book';
import {BookService} from "../../Services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

  loading = false;

  constructor(private bookService: BookService, private router: Router, @Inject("BOOKS") public books: Book[]) {
  }

  ngOnInit(): void {

    this.loading = true;

    if (this.books.length == 0) {
      this.bookService.getBooks().subscribe({
        next: response => {
          this.books.push(...response);
        },
        error: e => {
          console.log(e);
        },
        complete: () => {
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
  }

  clear(table: Table) {
    table.clear();
  }

  details(id: number) {
    this.router.navigate(["/book", id]);
  }
}
