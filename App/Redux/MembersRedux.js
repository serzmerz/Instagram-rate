import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getMembersRequest: null,
  getMembersSuccess: ['data'],
  membersFailure: null
})

export const MembersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  items: []
})

/* ------------- Reducers ------------- */

export const getMembersRequest = (state) =>
  state.merge({ fetching: true })

export const getMembersSuccess = (state, { data }) =>
  state.merge({ fetching: false, items: data })

export const membersFailure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MEMBERS_REQUEST]: getMembersRequest,
  [Types.GET_MEMBERS_SUCCESS]: getMembersSuccess,
  [Types.GET_MEMBERS_FAILURE]: membersFailure
})
