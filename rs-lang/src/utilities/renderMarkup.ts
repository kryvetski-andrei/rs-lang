export const renderMarkup = (parentDOMElement: HTMLElement, markup: string) => {
  parentDOMElement.insertAdjacentHTML('beforeend', markup);
  return parentDOMElement;
};
