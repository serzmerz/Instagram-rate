import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { MembersTypes } from '../Redux/MembersRedux'
import { CategoriesTypes } from '../Redux/CategoriesRedux'
import { UserProfileTypes } from '../Redux/UserProfileRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getMembersSagas } from './MembersSagas'
import { getCategoriesSagas } from './CategoriesSagas'
import { getUserProfileSagas } from './UserProfileSagas'
import { CountriesTypes } from '../Redux/CountriesRedux'
import { getCountriesSagas } from './CountriesSagas'

/* ------------- API ------------- */

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(MembersTypes.GET_MEMBERS_REQUEST, getMembersSagas, api),
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategoriesSagas, api),
    takeLatest(UserProfileTypes.GET_USER_PROFILE_REQUEST, getUserProfileSagas, api),
    takeLatest(CountriesTypes.GET_COUNTRIES_REQUEST, getCountriesSagas, api)
  ])
}
