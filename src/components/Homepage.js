import { Code } from '../../Code.js/Code';
import Dummy from './Dummy';
import DummyTwo from './DummyTwo';
// import style from '/';

export const style = /*html*/ `
  .homepage {
    background-color: #000;
  }
`;

const Homepage = Code.createElement({
  tag: 'div',
  attrs: {
    class: 'homepage',
  },
  content: [Dummy, DummyTwo, 'Hi'],
});

export default Homepage;
