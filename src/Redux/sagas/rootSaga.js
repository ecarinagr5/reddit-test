import { takeLatest } from "redux-saga/effects";

import tryUsersList from './users/list';
import { actionTypes as userActions } from '../features/users';
import tryPostList  from './posts/allpost';
import { actionTypes as postActions } from '../features/posts';


export default function* rootSaga(){
    //Watcher
    yield takeLatest(userActions.LIST_TRY, tryUsersList);
    yield takeLatest(postActions.POST_TRY, tryPostList);
}