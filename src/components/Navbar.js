import { CodeComponent } from '../../Code.js/Main';
import { CodeLink } from '../../Code.js/Router';

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
  return new CodeLink({
    attrs: {
      href: link.path,
      class: 'link',
    },
    content: link.name,
  }).createLink();
});

const Navbar = new CodeComponent({
  tag: 'div',
  attrs: {
    class: 'navbar',
  },
  content: NavbarLinks,
}).createElement();

export default Navbar;
