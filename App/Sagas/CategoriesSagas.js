import { call, put } from 'redux-saga/effects'
import CategoriesActions from '../Redux/CategoriesRedux'

export function * getCategoriesSagas (api) {
  const response = yield call(api.getListCategories)

  if (response.ok) {
    yield put(CategoriesActions.getCategoriesSuccess(response.data))
  } else {
    yield put(CategoriesActions.categoriesFailure())
  }
}
