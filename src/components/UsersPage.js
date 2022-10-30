import { CodeComponent } from '../../Code.JS/Main';

const UsersPage = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'users',
  },
  content: ['Users Page', 'Hi'],
}).createElement();

export default UsersPage;
