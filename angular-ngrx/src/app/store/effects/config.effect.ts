import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GetConfigAction, ConfigActionsEnum, GetConfigSuccessAction } from '../actions/config.action';
import { switchMap } from 'rxjs/operators';
import { Config } from 'src/app/models/config';
import {of} from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Injectable()
export class ConfigEffect {

    @Effect()
    getConfig$ = this.action$.pipe(
        ofType<GetConfigAction>(ConfigActionsEnum.GetConfig),
        switchMap(() => this.configService.getConfig()),
        switchMap((config: Config) => {
            return of(new GetConfigSuccessAction(config));
        })
    );

    constructor(
        private configService: ConfigService,
        private action$: Actions) {}
}
