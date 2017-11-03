import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getUserProfileRequest: null,
  getUserProfileSuccess: ['data'],
  userProfileFailure: null
})

export const UserProfileTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  data: {},
  error: null
})

/* ------------- Reducers ------------- */

export const getUserProfileRequest = (state) =>
  state.merge({ fetching: true })

export const getUserProfileSuccess = (state, { data }) =>
  state.merge({ fetching: false, data })

export const userProfileFailure = state =>
  state.merge({ fetching: false, error: true, data: {} })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USER_PROFILE_REQUEST]: getUserProfileRequest,
  [Types.GET_USER_PROFILE_SUCCESS]: getUserProfileSuccess,
  [Types.GET_USER_PROFILE_FAILURE]: userProfileFailure
})
