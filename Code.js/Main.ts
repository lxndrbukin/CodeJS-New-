export interface CodeElement {
  tag: string;
  attrs?: Object;
  content?: Node | Node[];
  events?: Object;
}

export class CodeComponent {
  element: CodeElement;
  constructor(element: CodeElement) {
    this.element = element;
  }
  createElement(): HTMLElement {
    const { element } = this;
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
}

interface CodeAppInstance {
  appComponent: HTMLElement;
  rootElement: HTMLElement;
}

export class CodeApp {
  appTemplate: CodeAppInstance;
  constructor(appTempalte: CodeAppInstance) {
    this.appTemplate = appTempalte;
  }
  create() {
    const { appTemplate } = this;
    const { appComponent, rootElement } = appTemplate;
    rootElement.append(appComponent);
  }
}
