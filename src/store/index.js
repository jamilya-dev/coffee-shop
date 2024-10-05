import Vue from 'vue';
import Vuex from 'vuex';
import links from './links';
import bestsellers from './bestsellers';
import products from './products';
import goods from './goods';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    products,
    goods,
  },
});
export default store;
