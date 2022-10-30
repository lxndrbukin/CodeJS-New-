import { CodeComponent } from '../../Code.JS/Main';

const Dummy = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'dummy',
  },
  content: 'Dummy',
}).createElement();

export default Dummy;
