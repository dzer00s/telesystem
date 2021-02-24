export interface AlbumsState {
    albums: any[];
    loading: boolean;
    error: null | string;
}
export enum AlbumsActionTypes {
    FETCH_ALBUMS = 'FETCH_ALBUMS',
    FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS',
    FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR',
}
interface FetchAlbumsAction {
    type: AlbumsActionTypes.FETCH_ALBUMS;
}
interface FetchAlbumsSuccessAction {
    type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS;
    payload: any[];
}
interface FetchAlbumsErrorAction {
    type: AlbumsActionTypes.FETCH_ALBUMS_ERROR;
    payload: string;
}
export type AlbumsAction = FetchAlbumsAction | FetchAlbumsSuccessAction | FetchAlbumsErrorAction