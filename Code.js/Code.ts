interface CodeAppInterface {
  appComponent: HTMLElement;
  rootElement: HTMLElement;
}

export function createApp(app: CodeAppInterface): void {
  const { appComponent, rootElement } = app;
  rootElement.append(appComponent);
}

// Code Element Interface

// Creating a Code Element
export function createElement(tag: string, props?: Object[], ...children: Node[]): HTMLElement {
  const codeElement = document.createElement(tag);
  for (let propKey in props) {
		if (propKey.startsWith('on') && propKey.toLowerCase() in window) {
      codeElement.addEventListener(propKey.toLowerCase().substring(2), props[propKey])
    } else {
      codeElement.setAttribute(propKey, props[propKey].toString())
    }
	}
  children.forEach(child => {
    codeElement.appendChild(
      child.nodeType === undefined ? 
      document.createTextNode(child.toString()) : 
      child
    )
  })
  return codeElement;
}