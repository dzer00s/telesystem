import axios from 'axios';
import { Dispatch } from 'react';
import { AlbumsAction, AlbumsActionTypes } from './../../types/albums';
 
export const fetchAlbums = () => {
    return async (dispatch: Dispatch<AlbumsAction>) => {
        const getUsername = async (userId: any) => {
            const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            return user.data.username;
          };
        try {
            dispatch({type: AlbumsActionTypes.FETCH_ALBUMS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
            for (let album of response.data) {
                const username = await getUsername(album.userId);
                album.username = username;
              }
            dispatch({type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS, payload: response.data})
        } catch (e) { 
            dispatch({type: AlbumsActionTypes.FETCH_ALBUMS_ERROR, payload: 'Ошибка при загрузке'})
        }
    }
}