import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCountriesRequest: null,
  getCountriesSuccess: ['data'],
  countriesFailure: null
})

export const CountriesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  data: [],
  error: null
})

/* ------------- Reducers ------------- */

export const getCountriesRequest = (state) =>
  state.merge({ fetching: true })

export const getCountriesSuccess = (state, { data }) =>
  state.merge({ fetching: false, data })

export const countriesFailure = state =>
  state.merge({ fetching: false, error: true, data: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_COUNTRIES_REQUEST]: getCountriesRequest,
  [Types.GET_COUNTRIES_SUCCESS]: getCountriesSuccess,
  [Types.GET_COUNTRIES_FAILURE]: countriesFailure
})
