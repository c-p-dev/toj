import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Config } from 'src/app/models/config.interface';
import { GetConfig, EnumConfigActions, GetConfigSuccess } from '../actions/config.actions';
import { switchMap, switchMapTo } from 'rxjs/operators';
import { ConfigService } from 'src/app/service/config.service';
import { of } from 'rxjs';


@Injectable()
export class ConfigEffects {
    
    constructor(
        private _configService: ConfigService,
        private _actions$: Actions
    ){
        
    }
    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EnumConfigActions.GetConfig),
        switchMap(()=> this._configService.getConfig()),
        switchMap((config: Config)=> {
            return of(new GetConfigSuccess(config))
        })    
    )
}