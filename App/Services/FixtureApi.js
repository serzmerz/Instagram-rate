export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getListRate: () => {
    return {
      ok: true,
      data: require('../Fixtures/listRate.json')
    }
  },
  getListCategories: () => {
    return {
      ok: true,
      data: require('../Fixtures/listCategories.json')
    }
  },
  getUserProfile: () => {
    return {
      ok: true,
      data: require('../Fixtures/userProfile.json')
    }
  },
  getCountries: () => {
    return {
      ok: true,
      data: require('../Fixtures/listCountries.json')
    }
  }
}
