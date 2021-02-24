import * as UsersActionCreators from './users'
import * as PostsActionCreators from './posts'
import * as AlbumsActionCreators from './albums'

export default {
    ...UsersActionCreators,
    ...PostsActionCreators,
    ...AlbumsActionCreators
}