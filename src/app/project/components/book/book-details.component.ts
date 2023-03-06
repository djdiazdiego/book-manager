import {Component, Inject, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

import {Book} from '../../api/book';
import {BookService} from "../../Services/book.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService, private location: Location,
              private router: Router, @Inject("BOOKS") public books: Book[]) {
  }

  ngOnInit(): void {

    if (this.books.length == 0) {
      this.bookService.getBooks().subscribe({
        next: response => {
          this.books.push(...response);
          this.getBookFromRoute(this.books);
        },
        error: e => {
          console.log(e);
        }
      });
    } else {
      this.getBookFromRoute(this.books);
    }
  }

  getBookFromRoute(books: Book[]) {
    const routeParams = this.route.snapshot.paramMap;
    const bookId = Number(routeParams.get("id"));

    const book = books.find(p => p.bookId == bookId);

    if (book != undefined) {
      this.book = book;
    } else {
      console.log("book not found");
    }
  }

  backToBooks() {
    // this.location.back();
    this.router.navigate(["/book"]);
  }
}
