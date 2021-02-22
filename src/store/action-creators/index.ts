import * as UsersActionCreators from './users'
import * as PostsActionCreators from './posts'

export default {
    ...UsersActionCreators,
    ...PostsActionCreators
}