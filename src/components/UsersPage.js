import { CodeComponent } from '../../Code.js/Main';

const UsersPage = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'users',
  },
  content: ['Users page'],
}).createElement();

export default UsersPage;
