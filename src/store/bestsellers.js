const bestsellers = {
  state: {
    bestsellers: [],
  },
  mutations: {
    setBestsellersData(state, data) {
      state.bestsellers = data;
    },
  },
  actions: {
    setBestsellersData({ commit }, data) {
      commit('setBestsellersData', data);
    },
  },
  getters: {
    getBest(state) {
      return state.bestsellers;
    },
  },
};
export default bestsellers;
