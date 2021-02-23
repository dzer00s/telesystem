export interface PostsState {
    posts: any[];
    loading: boolean;
    error: null | string;
}
export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    ADD_POST = 'ADD_POST'
}
interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: any[];
}
interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}
interface AddPost {
    type: PostsActionTypes.ADD_POST;
    payload?: any[];
    body: string;
    id: Number;
}
export type PostsAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction | AddPost