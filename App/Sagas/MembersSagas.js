import { call, put } from 'redux-saga/effects'
import MembersActions from '../Redux/MembersRedux'

export function * getMembersSagas (api) {
  const response = yield call(api.getListRate)
  if (response.ok) {
    yield put(MembersActions.getMembersSuccess(response.data))
  } else {
    yield put(MembersActions.membersFailure())
  }
}
