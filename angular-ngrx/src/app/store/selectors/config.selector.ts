import { createSelector } from '@ngrx/store';
import { ConfigState } from '../states/config.state';
import { AppState } from '../states/app.state';

const configState = (state: AppState) => state.config;

export const ConfigSelector = createSelector(
    configState,
    (state: ConfigState) => state.config
);
