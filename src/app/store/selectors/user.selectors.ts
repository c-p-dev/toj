
import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { UserState } from '../state/user.state';


const selectCurrentUser = (state : AppState) => state.user;

export const selectUser = createSelector(
    selectCurrentUser,
    (state: UserState ) => state.user
)


