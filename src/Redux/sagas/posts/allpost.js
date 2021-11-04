import { call, put } from 'redux-saga/effects'

import { actionTypes as postActions } from '../../features/posts'

export default function* tryPostList() {
    try {
        //get API  
        const URL = 'https://jsonplaceholder.typicode.com/posts'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])
        //if all Ok then dispatch action
        yield put({type: postActions.POST_SUCCESS,data})
    } catch {
        yield put({ type: postActions.POST_FAILED})

    }
}