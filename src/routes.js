import { BrowserRouter } from '../Code.JS/Router';
import Homepage from './components/Homepage';
import UsersPage from './components/UsersPage';

const Router = new BrowserRouter([
  { pathname: '/', component: Homepage },
  { pathname: '/users', component: UsersPage },
]).createRouter();

export default Router;