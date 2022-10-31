import { CodeComponent } from '../../Code.js/Main';

const DummyTwo = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'dummy',
  },
  content: ['DummyTwo'],
}).createElement();

export default DummyTwo;
