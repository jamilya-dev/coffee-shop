import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '../views/HeroView.vue';
import OurCoffeeView from '../views/OurCoffeeView.vue';
import PleasureView from '../views/PleasureView.vue';
import ContactsView from '../views/ContactsView.vue';
import ThankYouView from '../views/ThankYouView.vue';
import ItemPageView from '../views/ItemPageView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/pleasure', component: PleasureView },
  { path: '/contacts', component: ContactsView },
  { path: '/thanks', component: ThankYouView },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
