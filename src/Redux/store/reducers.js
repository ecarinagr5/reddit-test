import { combineReducers } from 'redux';

import usersReducer, {NAME as userName} from "../features/users";
import postsReducer, {NAME as postName} from "../features/posts";

export default () =>
    combineReducers({
        [userName]: usersReducer,
        [postName]: postsReducer
    })