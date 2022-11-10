import { Code } from '../Code.js/Code';
import Navbar from './components/Navbar';
import Router from './routes';

const App = Code.createElement({
  tag: 'div',
  attrs: {
    class: 'container',
  },
  content: 'Hello',
});

Code.createApp({
  appComponent: App,
  rootElement: document.querySelector('#app'),
});
