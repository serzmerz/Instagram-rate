import { call, put } from 'redux-saga/effects'
import ListActions from '../Redux/ListItemsRedux'

export function * fetchList (api) {
  const response = yield call(api.getListRate)
  if (response.ok) {
    yield put(ListActions.listSuccess(response.data))
  } else {
    yield put(ListActions.listFailure())
  }
}
