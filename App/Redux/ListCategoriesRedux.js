import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  listCategoriesRequest: null,
  listCategoriesSuccess: ['payload'],
  listCategoriesFailure: null
})

export const ListCategoriesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  fetching: null,
  data: [],
  error: null
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => {
  return { ...state.listCategories, fetching: true }
}
// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return { ...state.listCategories, fetching: false, error: null, data: payload }
}

// Something went wrong somewhere.
export const failure = state => {
  return { ...state.listCategories, fetching: false, error: true, data: [] }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_CATEGORIES_REQUEST]: request,
  [Types.LIST_CATEGORIES_SUCCESS]: success,
  [Types.LIST_CATEGORIES_FAILURE]: failure
})
