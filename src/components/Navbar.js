import { Code } from '../../Code.js/Code';
import { CodeRouter } from '../../Code.js/CodeRouter';

const links = [
  {
    name: 'Homepage',
    path: '/',
  },
  {
    name: 'Users',
    path: '/users',
  },
];

const NavbarLinks = links.map((link) => {
  return CodeRouter.createLink({
    attrs: {
      href: link.path,
      class: 'link',
    },
    content: link.name,
  });
});

const Navbar = Code.createElement({
  tag: 'div',
  attrs: {
    class: 'navbar',
  },
  content: NavbarLinks,
});

export default Navbar;
