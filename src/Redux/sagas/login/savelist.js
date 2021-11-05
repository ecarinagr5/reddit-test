
import { put } from 'redux-saga/effects'

import { actionTypes as userActions } from '../../features/users'

export default function* saveUser() {
    const user = 23
    yield put({type: userActions.LIST_SAVE,user})

}