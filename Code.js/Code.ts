interface CodeAppInterface {
  appComponent: HTMLElement;
  rootElement: HTMLElement;
}

function createApp(app: CodeAppInterface): void {
  const { appComponent, rootElement } = app;
  rootElement.append(appComponent);
}

// Code Element Interface
export interface CodeElementInterface {
  tag: string;
  attrs?: Object;
  content?: Node | Node[];
  events?: Object;
}

// Creating a Code Element
function createElement(element: CodeElementInterface): HTMLElement {
  const { tag, attrs, content, events } = element;
  const el: HTMLElement = document.createElement(tag);
  if (content instanceof Array<Node>) {
    content.map((component: Node): void => {
      if (component instanceof Array<Node>) {
        component.map((componentElement: Node): void => {
          el.appendChild(
            componentElement.nodeType === undefined ? document.createTextNode(componentElement.toString()) : componentElement
          )
        })
      } else if (component instanceof Node || typeof component === 'string') {
        if (component.nodeType === undefined) {
          el.innerHTML += component;
        } else {
          el.appendChild(component)
        }
        
      }
    });
  } else if (typeof content === 'string') {
    el.innerHTML += content;
  }
  if (attrs) {
    for (let attrKey in attrs) {
      el.setAttribute(attrKey, attrs[attrKey]);
    }
  }
  if (events) {
    for (let eventKey in events) {
      el.addEventListener(eventKey, events[eventKey]);
    }
  }
  return el;
}


export const Code = {
  createApp,
  createElement
}