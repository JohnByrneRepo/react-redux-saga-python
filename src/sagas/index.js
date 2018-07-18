import { all, fork } from 'redux-saga/effects'

import mockDataSaga from './mockDataSaga/saga'

export default function* root() {
  yield all([fork(mockDataSaga)])
}
