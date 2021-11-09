import { takeLatest } from "redux-saga/effects";

import tryUsersList from './userlist';
import saveUser from './savelist';
import { actionTypes as userActions } from '../features/users';
import tryPostList  from './allpost';
import { actionTypes as postActions } from '../features/posts';
import trySaveComment   from './list';
import { actionTypes as commentActions } from '../features/comments';


export default function* rootSaga(){
    //Watcher
    yield takeLatest(userActions.LIST_TRY, tryUsersList);
    yield takeLatest(postActions.POST_TRY, tryPostList);
    yield takeLatest(commentActions.COMMENT_SAVE, trySaveComment);
    yield takeLatest(userActions.LIST_SAVE, saveUser);


}