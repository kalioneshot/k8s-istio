import { initialConfigState, ConfigState } from '../states/config.state';
import {ConfigActions, ConfigActionsEnum} from '../actions/config.action';

export const configReducer = (state = initialConfigState, action: ConfigActions): ConfigState => {
    switch (action.type) {
      case ConfigActionsEnum.GetConfigSuccess: {
        return {
          ...state,
          config: action.payload
        };
      }
      default:
        return state;
    }
  };
