import { call, put } from 'redux-saga/effects'
import UserProfileActions from '../Redux/UserProfileRedux'

export function * getUserProfileSagas (api) {
  const response = yield call(api.getUserProfile)

  if (response.ok) {
    yield put(UserProfileActions.getUserProfileSuccess(response.data))
  } else {
    yield put(UserProfileActions.userProfileFailure())
  }
}
