import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES
import AddonsPage from '../docs/categories/AddonsPage';

// FREE
import BlogComponentsPage from '../docs/BlogComponentsPage';
import BreadcrumbPage from '../docs/BreadcrumbPage';
import DataTablePage from '../docs/DataTablePage';
import DropdownPage from '../docs/DropdownPage';
import EdgeHeaderPage from '../docs/EdgeHeaderPage';
import FooterPage from '../docs/FooterPage';
import FormsPage from '../docs/FormsPage';
import GridPage from '../docs/GridPage';
import HamburgerMenuPage from '../docs/HamburgerMenuPage';
import HomePage from '../docs/HomePage';
import IframePage from '../docs/IframePage';
import InputsPage from '../docs/InputsPage';
import InputGroupPage from '../docs/InputGroupPage';
import JumbotronPage from '../docs/JumbotronPage';
import LiveDemoPage from '../docs/LiveDemoPage';
import ListGroupPage from '../docs/ListGroupPage';
import MediaPage from '../docs/MediaPage';
import ModalPage from '../docs/ModalPage';
import ModalEventsPage from '../docs/ModalEventsPage';
import ModalExamplesPage from '../docs/ModalExamplesPage';
import ModalFormsPage from '../docs/ModalFormsPage';
import ModalStylesPage from '../docs/ModalStylesPage';
import NavsPage from '../docs/NavsPage';
import NavbarPage from '../docs/NavbarPage';
import NavigationPage from '../docs/NavigationPage';
import PaginationPage from '../docs/PaginationPage';
import PanelPage from '../docs/PanelPage';
import ProgressBarsPage from '../docs/ProgressBarsPage';
import SearchPage from '../docs/SearchPage';
import SliderPage from '../docs/SliderPage';
import SpinnersPage from '../docs/SpinnersPage';
import TabsPage from '../docs/TabsPage';
import TablePage from '../docs/TablePage';
import TablePaginationPage from '../docs/TablePaginationPage';
import TableScrollPage from '../docs/TableScrollPage';
import TableSearchPage from '../docs/TableSearchPage';
import TableSortPage from '../docs/TableSortPage';
import ValidationPage from '../docs/ValidationPage';
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
      path: '/navigation/hamburger',
      name: 'HamburgerMenuPage',
      component: HamburgerMenuPage
    }, {
      path: '/css/table',
      name: 'TablePage',
      component: TablePage
    }, {
      path: '/tables/datatable',
      name: 'DataTablePage',
      component: DataTablePage
    }, {
      path: '/plugins/iframe',
      name: 'IframePage',
      component: IframePage
    }, {
      path: '/tables/table-pagination',
      name: 'TablePaginationPage',
      component: TablePaginationPage
    }, {
      path: '/tables/table-search',
      name: 'TableSearchPage',
      component: TableSearchPage
    }, {
      path: '/tables/table-sort',
      name: 'TableSortPage',
      component: TableSortPage
    }, {
      path: '/tables/table-scroll',
      name: 'TableScrollPage',
      component: TableScrollPage
    }, {
      path: '/components/dropdown',
      name: 'DropdownPage',
      component: DropdownPage
    }, {
      path: '/components/jumbotron',
      name: 'JumbotronPage',
      component: JumbotronPage
    }, {
      path: '/navigation/breadcrumb',
      name: 'BreadcrumbPage',
      component: BreadcrumbPage
    }, {
      path: '/forms/inputs',
      name: 'InputsPage',
      component: InputsPage
    }, {
      path: '/forms/group',
      name: 'InputGroupPage',
      component: InputGroupPage
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
      path: '/navigation/navbar',
      name: 'NavbarPage',
      component: NavbarPage
    }, {
      path: '/navigation/navs',
      name: 'NavsPage',
      component: NavsPage
    }, {
      path: '/navigation/navigation',
      name: 'NavigationPage',
      component: NavigationPage
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
      path: '/forms/validation',
      name: 'ValidationPage',
      component: ValidationPage
    }, {
      path: '/modals/modal',
      name: 'ModalPage',
      component: ModalPage
    }, {
      path: '/modals/events',
      name: 'ModalEventsPage',
      component: ModalEventsPage
    }, {
      path: '/modals/examples',
      name: 'ModalExamplesPage',
      component: ModalExamplesPage
    }, {
      path: '/modals/forms',
      name: 'ModalFormsPage',
      component: ModalFormsPage
    }, {
      path: '/modals/styles',
      name: 'ModalStylesPage',
      component: ModalStylesPage
    }, {
      path: '/components/slider',
      name: 'SliderPage',
      component: SliderPage
    }, {
      path: '/forms/forms',
      name: 'FormsPage',
      component: FormsPage
    }, {
      path: '/forms/search',
      name: 'SearchPage',
      component: SearchPage
    }, {
      path: '/navigation/footer',
      name: 'FooterPage',
      component: FooterPage
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
