import { CodeComponent } from '../../Code.JS/Main';
import Dummy from './Dummy';
import DummyTwo from './DummyTwo';

const Homepage = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'homepage',
  },
  content: [Dummy, DummyTwo],
}).createElement();

export default Homepage;
