import { CodeRouter } from '../Code.js/CodeRouter';
import Homepage from './components/Homepage';
import UsersPage from './components/UsersPage';

const Router = CodeRouter.createRouter([
  { pathname: '/', component: Homepage },
  { pathname: '/users', component: UsersPage },
]);

export default Router;
