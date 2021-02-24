import { AlbumsAction, AlbumsActionTypes, AlbumsState } from "../../types/albums"

const initialState: AlbumsState = {
    albums: [],
    loading: false,
    error: null,
}

export const albumsReducer = (state = initialState, action: AlbumsAction): AlbumsState => {
    switch (action.type) {
        case AlbumsActionTypes.FETCH_ALBUMS:
            return {loading: true, error: null, albums: []}
        case AlbumsActionTypes.FETCH_ALBUMS_SUCCESS:
            return {loading: false, error: null, albums: action.payload}
        case AlbumsActionTypes.FETCH_ALBUMS_ERROR:
            return {loading: false, error: action.payload, albums: []}
        default:
            return state
    }
    
}