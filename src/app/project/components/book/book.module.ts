import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {TableModule} from "primeng/table";
import {ButtonModule, ButtonDirective} from "primeng/button";
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {RippleModule} from "primeng/ripple";
import {TooltipModule} from 'primeng/tooltip';

import {JoinListPipe} from "@project/pipes/join-list.pipe";

import {BookComponent} from "./book.component";
import {BookDetailsComponent} from "./book-details.component";
import {BookService} from "@project/Services/book.service";
import {books} from "@project/api/book";


const routes = [
  {
    path: "", component: BookComponent, data: {title: "Books"}
  },
  {
    path: ":id", component: BookDetailsComponent, data: {title: "Book Details"}
  }
];

@NgModule({
  declarations: [BookComponent, BookDetailsComponent, JoinListPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    ButtonModule,
    PanelModule,
    CardModule,
    RippleModule,
    TooltipModule
  ],
  providers: [BookService, {provide: "BOOKS", useValue: books}]
})
export class BookModule {
}
