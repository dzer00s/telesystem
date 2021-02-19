interface UsersState {
    users: any[];
    loading: boolean;
    error: null | string;
}
enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}
interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
    
}