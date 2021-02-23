import axios from 'axios';
import { Dispatch } from 'react';
import { PostsAction, PostsActionTypes } from './../../types/posts';
 
export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
        } catch (e) { 
            dispatch({type: PostsActionTypes.FETCH_POSTS_ERROR, payload: 'Ошибка при загрузке'})
        }
    }
}
export const addPost = (field: any) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {body: field})
            dispatch({type: PostsActionTypes.ADD_POST, body: response.data.body, id: response.data.id})
        } catch (e) { 
            console.log(e)
        }
    }
}
