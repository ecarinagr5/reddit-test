import { combineReducers } from 'redux';

import usersReducer, {NAME as userName} from "../features/users";

export default () =>
    combineReducers({
        [userName]: usersReducer
    })