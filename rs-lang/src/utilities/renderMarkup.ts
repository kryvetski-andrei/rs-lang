/**
 * Reneders some markup
 * @param parent { HTMLElement } - parent DOM Element
 * @param markup
 */

export const mountDOMElement = (parentDOMElement: HTMLElement, markup: string) => {
  parentDOMElement.insertAdjacentHTML('beforeend', markup);
  return parentDOMElement;
};
