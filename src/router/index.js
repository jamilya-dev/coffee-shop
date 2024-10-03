import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/HeroView.vue'),
  },
  {
    path: '/our-coffee',
    component: () => import('../views/OurCoffeeView.vue'),
  },
  {
    path: '/pleasure',
    component: () => import('../views/PleasureView.vue'),
  },
  {
    path: '/contacts',
    component: () => import('../views/ContactsView.vue'),
  },
  {
    path: '/thanks',
    component: () => import('../views/ThankYouView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
