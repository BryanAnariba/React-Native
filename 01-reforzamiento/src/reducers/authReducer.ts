import { IAuthState } from '../interfaces/IAuthState';
import { AuthActionType } from '../types/Auth.Type';

export const authReducer = (state: IAuthState, action: AuthActionType): IAuthState => {
    switch (action.type) {
        case '@logout':
            return {
                ...state,
                validing: false,
                token: null
            };
        case '@login':
            return {
                ...state,
                validing: false,
                token: "abc123",
                username: action.payload.username,
                name: action.payload.name
            }
        default:
            return state;
    }
}