import { initialConfigState, ConfigState } from '../state/config.state';
import { ConfigActions, EnumConfigActions } from '../actions/config.actions';



export const configReducers = (
    state = initialConfigState,
    action: ConfigActions
): ConfigState  => {
    switch(action.type) {
        case EnumConfigActions.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload
            }
        }

        default: 
            return state;
    }    
}