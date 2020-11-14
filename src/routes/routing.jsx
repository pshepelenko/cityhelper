import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
import Task1 from '../views/ui-components/task1.jsx';
import Task2 from '../views/ui-components/task2.jsx';
import Task3 from '../views/ui-components/task3.jsx';
import Report from '../views/ui-components/report.jsx';
import Settings from '../views/ui-components/settings.jsx';


var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Задания', 
    icon: 'ti-loop', 
    component: Starter 
  },
   {
    path: '/alert',
    name: 'Отчеты',
    icon: 'mdi mdi-comment-processing-outline',
    component: Alerts
  },
  {
    path: '/ui-components/settings',
    name: 'Настройки',
    icon: 'mdi mdi-image-filter-vintage',
    component: Settings
  },
  {
    path: '/task1',
    component: Task1
  },
  {
    path: '/task2',
    component: Task2
  },
  {
    path: '/report',
    component: Report
  },
  {
    path: '/task3',
    component: Task3
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
