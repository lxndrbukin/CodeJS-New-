import { CodeComponent } from '../../Code.JS/Main';

const DummyTwo = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'dummy',
  },
  content: 'DummyTwo',
}).createElement();

export default DummyTwo;
