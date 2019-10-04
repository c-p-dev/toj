import { Action } from '@ngrx/store';
import { Config } from 'src/app/models/config.interface';



export enum EnumConfigActions {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Conifg Success'
}

export class GetConfig implements Action {
    public readonly type = EnumConfigActions.GetConfig
}

export class GetConfigSuccess implements Action {
    public readonly type = EnumConfigActions.GetConfigSuccess;
    constructor(public payload: Config) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;