import { User } from 'src/app/models/user.interface';


export interface UserState {
    user: User;
    loggedIn: boolean;
}

export const initialUserState : UserState = {
    user: {
        id: 0,
        username:null,
        password: null,
    },
    loggedIn: false
    
}