import { Action } from '@ngrx/store';
import { Config } from 'src/app/models/config';

export enum ConfigActionsEnum {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfigAction implements Action {
    public readonly type = ConfigActionsEnum.GetConfig;
}

export class GetConfigSuccessAction implements Action {
    public readonly type = ConfigActionsEnum.GetConfigSuccess;
    constructor(public payload: Config) {}
}

export type ConfigActions = GetConfigAction | GetConfigSuccessAction;

