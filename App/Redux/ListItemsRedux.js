import { createReducer, createActions } from 'reduxsauce'
import { fetchList } from '../Sagas/ListItemsSagas'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  listRequest: null,
  listSuccess: ['payload'],
  listFailure: null
})

export const ListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  isLoading: false,
  items: []
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state) => {
  console.tron.log(state)
  return { ...state.listItems, isLoading: true }
}

// successful avatar lookup
export const success = (state, action) => {
  const { payload } = action
  return { ...state.listItems, isLoading: false, items: payload }
}

// failed to get the avatar
export const failure = (state) => {
  return { ...state.listItems, isLoading: false, error: true }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_REQUEST]: request,
  [Types.LIST_SUCCESS]: success,
  [Types.LIST_FAILURE]: failure
})
