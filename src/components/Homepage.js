import { CodeComponent } from '../../Code.js/Main';
import Dummy from './Dummy';
import DummyTwo from './DummyTwo';

const Homepage = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'homepage',
  },
  content: [Dummy, DummyTwo, 'Hi'],
}).createElement();

export default Homepage;
