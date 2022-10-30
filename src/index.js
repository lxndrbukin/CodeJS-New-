import { CodeApp, CodeComponent } from '../Code.js/Main';
import Navbar from './components/Navbar';
import Router from './routes';

const App = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'container',
  },
  content: [Navbar, Router],
}).createElement();

const codeApp = new CodeApp({
  appComponent: App,
  rootElement: document.querySelector('#app'),
});

codeApp.create();
