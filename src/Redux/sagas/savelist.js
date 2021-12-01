
import { put, call } from 'redux-saga/effects'

import { actionTypes as userActions } from '../features/users'

export default function* saveUser({ currentUser}) {
   /* const user = 7
    yield put({type: userActions.LIST_SAVE})*/

    console.log('saveUser',currentUser)

}