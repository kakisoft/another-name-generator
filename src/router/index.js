import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES
import whatsthis from '../docs/categories/whatsthis';

// FREE
import HomePage from '../docs/HomePage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

    // CATEGORIES
    {
      path: '/whatsthis',
      name: 'whatsthis',
      component: whatsthis
    },

    // FREE
    
  ]
});
