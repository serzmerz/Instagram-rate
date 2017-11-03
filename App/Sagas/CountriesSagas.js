import { call, put } from 'redux-saga/effects'
import CountriesActions from '../Redux/CountriesRedux'

export function * getCountriesSagas (api) {
  const response = yield call(api.getCountries)

  if (response.ok) {
    yield put(CountriesActions.getCountriesSuccess(response.data))
  } else {
    yield put(CountriesActions.countriesFailure())
  }
}
