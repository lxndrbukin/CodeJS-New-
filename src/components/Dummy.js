import { CodeComponent } from '../../Code.js/Main';

const html = /*html*/ `
  <div class='another'>Another</div>
`;

const Dummy = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'dummy',
  },
  content: ['Dummy', html],
}).createElement();

export default Dummy;
