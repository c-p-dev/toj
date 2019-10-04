import { Component, OnInit } from '@angular/core';
import { AppState } from './store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetConfig } from './store/actions/config.actions';
import { selectConfig } from './store/selectors/config.selectors';
import { GetUser, GetUserSuccess } from './store/actions/user.actions';
import { selectUser } from './store/selectors/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-ngrx';
  config$ = this._store.pipe(select(selectConfig));
  user$ = this._store.pipe(select(selectUser));
  constructor(
    private _store: Store<AppState>
  ) {

  }

  ngOnInit(){
    this._store.dispatch(new GetConfig());
    this._store.dispatch(new GetUser());
  }

}
