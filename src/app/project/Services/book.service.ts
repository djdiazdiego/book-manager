import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Book} from "../api/book";
import {Observable} from "rxjs";

@Injectable()
export class BookService {

  private url = "assets/books_source.json";

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }
}
