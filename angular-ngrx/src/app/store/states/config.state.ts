import { Config } from 'src/app/models/config';

// Interface with the config state structure
export interface ConfigState {
    config: Config;
}

// Initial config state that implements the recently created interface
export const initialConfigState: ConfigState = {
    config: null
};
