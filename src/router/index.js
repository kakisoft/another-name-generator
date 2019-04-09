import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES
import AddonsPage from '../docs/categories/AddonsPage';
import whatsthis from '../docs/categories/whatsthis';

// FREE
import BlogComponentsPage from '../docs/BlogComponentsPage';
import HomePage from '../docs/HomePage';
import IframePage from '../docs/IframePage';
import VideoPage from '../docs/VideoPage';

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
      path: '/plugins',
      name: 'AddonsPage',
      component: AddonsPage
    },
    {
      path: '/whatsthis',
      name: 'whatsthis',
      component: whatsthis
    },

    // FREE
    {
      path: '/plugins/iframe',
      name: 'IframePage',
      component: IframePage
    }, {
      path: '/plugins/video',
      name: 'VideoPage',
      component: VideoPage
    }, {
      path: '/plugins/blog-components',
      name: 'BlogComponentsPage',
      component: BlogComponentsPage
    }

  ]
});
