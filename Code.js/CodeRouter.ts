import { CodeElementInterface, Code } from './Code';

interface RouterPath {
  pathname: string;
  component: HTMLElement;
}

function buildRouter(routes: RouterPath[]): void {
  const events = ['load', 'click', 'popstate'];
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

function createRouter(routes: RouterPath[]): HTMLElement[] {
  buildRouter(routes);
  return routes.map((route: RouterPath): HTMLElement => {
    return route.component;
  });
}



function createLink(element: CodeElementInterface): HTMLElement {
  const { content, events, attrs } = element;
  const a = Code.createElement({
    tag: 'a',
    events: events,
    attrs: attrs,
    content: content,
  });
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

export const CodeRouter = {
  createRouter,
  createLink
}