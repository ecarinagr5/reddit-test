import { call, put } from 'redux-saga/effects'

import { actionTypes as userActions } from '../../features/users'

export default function* tryUsersList() {
    try {
        //get API  
        const URL = 'https://jsonplaceholder.typicode.com/users'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])
        //if all Ok then dispatch action
        yield put({type: userActions.LIST_SUCCESS,data})
    } catch {
        yield put({ type: userActions.LIST_FAILED})

    }
}