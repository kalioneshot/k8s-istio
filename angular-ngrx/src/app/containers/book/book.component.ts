import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { AppState } from '../../store/states/app.state';
import { bookSelector } from 'src/app/store/selectors/book.selector';
import { GetBookAction } from 'src/app/store/actions/book.action';

@Component({
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookContainerComponent implements OnInit {
  book$ = this.store.pipe(select(bookSelector));

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(new GetBookAction(this.route.snapshot.params.isbn));
  }
}
