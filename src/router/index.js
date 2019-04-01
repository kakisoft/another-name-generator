import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES
import AddonsPage from '../docs/categories/AddonsPage';

// FREE
import BlogComponentsPage from '../docs/BlogComponentsPage';
import EdgeHeaderPage from '../docs/EdgeHeaderPage';
import GridPage from '../docs/GridPage';
import HomePage from '../docs/HomePage';
import IframePage from '../docs/IframePage';
import LiveDemoPage from '../docs/LiveDemoPage';
import MediaPage from '../docs/MediaPage';
import PaginationPage from '../docs/PaginationPage';
import PanelPage from '../docs/PanelPage';
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

    // FREE
    {
      path: '/components/grid',
      name: 'GridPage',
      component: GridPage
    }, {
      path: '/plugins/iframe',
      name: 'IframePage',
      component: IframePage
    }, {
      path: '/components/liveDemo',
      name: 'LiveDemoPage',
      component: LiveDemoPage
    }, {
      path: '/components/media',
      name: 'MediaPage',
      component: MediaPage
    }, {
      path: '/components/pagination',
      name: 'PaginationPage',
      component: PaginationPage
    }, {
      path: '/components/panel',
      name: 'PanelPage',
      component: PanelPage
    }, {
      path: '/components/edge-header',
      name: 'EdgeHeaderPage',
      component: EdgeHeaderPage
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
