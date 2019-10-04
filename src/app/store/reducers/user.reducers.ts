import { initialUserState, UserState } from '../state/user.state';
import { EnumUserActions } from '../actions/user.actions';
import { UserActions } from '../actions/user.actions';


export const userReducers = (
    state = initialUserState,
    action: UserActions
): UserState => {
    switch(action.type) {
        case EnumUserActions.GetUserSuccess : {
            return {
                ...state,
                user: action.payload
            }
        }
        break;
        case EnumUserActions.AddUser : {
            return {
                ...state,
                user: action.payload
            }
        }
        break;
        default: 
            return state;
    }
}