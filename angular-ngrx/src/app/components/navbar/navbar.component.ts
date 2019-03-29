import { Component, OnInit } from '@angular/core';
import { ConfigSelector } from 'src/app/store/selectors/config.selector';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  config$ = this.store.pipe(select(ConfigSelector));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  }

}
