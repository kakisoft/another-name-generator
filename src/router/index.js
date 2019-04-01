import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES
import AddonsPage from '../docs/categories/AddonsPage';

// FREE
import BlogComponentsPage from '../docs/BlogComponentsPage';
import DropdownPage from '../docs/DropdownPage';
import EdgeHeaderPage from '../docs/EdgeHeaderPage';
import GridPage from '../docs/GridPage';
import HomePage from '../docs/HomePage';
import IframePage from '../docs/IframePage';
import JumbotronPage from '../docs/JumbotronPage';
import LiveDemoPage from '../docs/LiveDemoPage';
import ListGroupPage from '../docs/ListGroupPage';
import MediaPage from '../docs/MediaPage';
import PaginationPage from '../docs/PaginationPage';
import PanelPage from '../docs/PanelPage';
import ProgressBarsPage from '../docs/ProgressBarsPage';
import SliderPage from '../docs/SliderPage';
import SpinnersPage from '../docs/SpinnersPage';
import TabsPage from '../docs/TabsPage';
import TablePage from '../docs/TablePage';
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
      path: '/css/table',
      name: 'TablePage',
      component: TablePage
    }, {
      path: '/plugins/iframe',
      name: 'IframePage',
      component: IframePage
    }, {
      path: '/components/dropdown',
      name: 'DropdownPage',
      component: DropdownPage
    }, {
      path: '/components/jumbotron',
      name: 'JumbotronPage',
      component: JumbotronPage
    }, {
      path: '/components/liveDemo',
      name: 'LiveDemoPage',
      component: LiveDemoPage
    }, {
      path: '/components/media',
      name: 'MediaPage',
      component: MediaPage
    }, {
      path: '/components/listgroup',
      name: 'ListGroupPage',
      component: ListGroupPage
    }, {
      path: '/components/pagination',
      name: 'PaginationPage',
      component: PaginationPage
    }, {
      path: '/components/panel',
      name: 'PanelPage',
      component: PanelPage
    }, {
      path: '/components/progress-bars',
      name: 'ProgressBarsPage',
      component: ProgressBarsPage
    }, {
      path: '/components/edge-header',
      name: 'EdgeHeaderPage',
      component: EdgeHeaderPage
    }, {
      path: '/components/slider',
      name: 'SliderPage',
      component: SliderPage
    }, {
      path: '/components/tabs',
      name: 'TabsPage',
      component: TabsPage
    }, {
      path: '/plugins/video',
      name: 'VideoPage',
      component: VideoPage
    }, {
      path: '/components/spinners',
      name: 'SpinnersPage',
      component: SpinnersPage
    }, {
      path: '/plugins/blog-components',
      name: 'BlogComponentsPage',
      component: BlogComponentsPage
    }

  ]
});
