import { Injectable } from '@angular/core';
import { Effect, ofType, Actions, ɵngrx_modules_effects_effects_c} from '@ngrx/effects';
import {Store, select} from '@ngrx/store';
import {of, Observable} from 'rxjs';
import { GetUser, EnumUserActions, GetUserSuccess, AddUser, GetUserFailed } from '../actions/user.actions';
import {switchMap, map, withLatestFrom, switchMapTo, mergeMap, catchError } from 'rxjs/operators';

import {AppState} from '../state/app.state';
import { UserService } from 'src/app/service/user.service';
import { EnumConfigActions } from '../actions/config.actions';
import { User } from 'src/app/models/user.interface';
import { selectUser } from '../selectors/user.selectors';



@Injectable()
export class UserEffects {
    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<AppState>
    ){

    } 

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EnumUserActions.GetUser),
        switchMap(() => this._userService.getUser()),
        switchMap((user: User  ) => {
            return of( new GetUserSuccess(user))
        })
    )

    @Effect()
    addUser$: Observable<any> = this._actions$.pipe(
        ofType<AddUser>(EnumUserActions.AddUser),
        mergeMap((payload) => {
            let addedUser: User = null;

            return this._userService.registerUser(payload.payload);
            //  return addedUser;
        })

    )
}