import { takeEvery } from "redux-saga/effects";

import tryUsersList from './users/list';
import saveUser from './login/savelist';
import { actionTypes as userActions } from '../features/users';
import tryPostList  from './posts/allpost';
import { actionTypes as postActions } from '../features/posts';
import trySaveComment   from './comments/listcomment';
import { actionTypes as commentActions } from '../features/comments';


export default function* rootSaga(){
    //Watcher
    yield takeEvery(userActions.LIST_TRY, tryUsersList);
    yield takeEvery(postActions.POST_TRY, tryPostList);
    yield takeEvery(commentActions.COMMENT_SAVE, trySaveComment);
    yield takeEvery(userActions.LIST_SAVE, saveUser);


}