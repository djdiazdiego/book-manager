import {Component, OnInit} from "@angular/core";

import {MenuItem} from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls:["app.component.scss"]
})
export class AppComponent implements OnInit {
  title = 'book-manager';

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: "Books",
        url: "/book"
      }
    ];
  }
}
