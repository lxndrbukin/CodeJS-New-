import Code from '../../Code.js/Code';

const html = /*html*/ `
  <div class='another'>Another</div>
`;

const Dummy = Code.createElement({
  tag: 'div',
  attrs: {
    class: 'dummy',
  },
  content: ['Dummy', html],
});

export default Dummy;
