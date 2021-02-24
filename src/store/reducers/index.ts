import { albumsReducer } from './albumsReducer';
import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    albums: albumsReducer
})

export type RootState = ReturnType<typeof rootReducer>