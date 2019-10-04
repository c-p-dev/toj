import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.interface';


export enum EnumUserActions {
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    AddUser = '[User] Add User',
    GetUserFailed = '[User] Get User Failed'

}

export class GetUser implements Action {
    public readonly type = EnumUserActions.GetUser;
    
}

export class GetUserSuccess implements Action {
    public readonly type = EnumUserActions.GetUserSuccess
    constructor(public payload: User) {}
}

export class AddUser implements Action {
    public readonly type = EnumUserActions.AddUser
    constructor(public payload: User) {}
}
export class GetUserFailed implements Action {
    public readonly type = EnumUserActions.GetUserFailed
    constructor(public payload: User, public error: any){}
}
export type UserActions = GetUser | GetUserSuccess | AddUser |GetUserFailed ;
