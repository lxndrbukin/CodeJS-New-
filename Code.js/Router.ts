import { CodeElement, CodeComponent } from './Main';

interface RouterPath {
  pathname: string;
  component: HTMLElement;
}

export class BrowserRouter {
  routes: RouterPath[];
  events: string[] = ['click', 'load', 'popstate'];
  constructor(routes: RouterPath[]) {
    this.routes = routes;
  }
  buildRouter(): void {
    const { routes, events } = this;
    routes.map((route: RouterPath): void => {
      const { pathname, component } = route;
      events.map((eventName: string) => {
        if (eventName === 'click') {
          document.addEventListener(eventName, (e: Event): void => {
            if (
              pathname && e.target &&
              location.pathname === pathname &&
              e.target['tagName'] === 'A'
            ) {
              component.style.display = 'block';
            } else if (
              pathname && e.target &&
              location.pathname !== pathname &&
              e.target['tagName'] === 'A'
            ) {
              component.style.display = 'none';
            } else if (e.target && e.target['tagName'] !== 'A') {
              return;
            }
          });
        } else {
          window.addEventListener(eventName, (): void => {
            if (pathname && location.pathname === pathname) {
              component.style.display = 'block';
            } else if (pathname && location.pathname !== pathname) {
              component.style.display = 'none';
            }
          });
        }
      });
    });
  }
  createRouter(): HTMLElement[] {
    const { routes } = this;
    this.buildRouter();
    return routes.map((route: RouterPath): HTMLElement => {
      return route.component;
    });
  }
}

export class CodeLink extends CodeComponent {
  constructor(element: CodeElement) {
    super(element);
  }
  createLink(): HTMLElement {
    const { element } = this;
    const { content, events, attrs } = element;
    const a = new CodeComponent({
      tag: 'a',
      events: events,
      attrs: attrs,
      content: content,
    }).createElement();
    a.addEventListener('click', (e): void => {
      e.preventDefault();
      for (let attr in attrs) {
        if (attr === 'href') {
          history.pushState(
            { page: attrs[attr] },
            attrs[attr],
            location.origin + attrs[attr]
          );
        }
      }
    });
    return a;
  }
}
