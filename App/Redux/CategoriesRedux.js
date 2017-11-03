import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCategoriesRequest: null,
  getCategoriesSuccess: ['data'],
  categoriesFailure: null
})

export const CategoriesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  data: [],
  error: null
})

/* ------------- Reducers ------------- */

export const getCategoriesRequest = (state) =>
  state.merge({ fetching: true })

export const getCategoriesSuccess = (state, { data }) =>
  state.merge({ fetching: false, data })

export const categoriesFailure = state =>
  state.merge({ fetching: false, error: true, data: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORIES_REQUEST]: getCategoriesRequest,
  [Types.GET_CATEGORIES_SUCCESS]: getCategoriesSuccess,
  [Types.GET_CATEGORIES_FAILURE]: categoriesFailure
})
