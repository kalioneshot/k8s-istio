import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { ActionEventEmitter, TypeAction } from 'src/app/models/event/actionEventEmitter';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Input() books: Observable<Book[]>;

  @Output() bookSelected: EventEmitter<ActionEventEmitter> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onSelectBook(isbn: string) {
    const actionEvent = new ActionEventEmitter(TypeAction.DETAIL, isbn);
    this.bookSelected.emit(actionEvent);
  }

}
