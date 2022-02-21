import { mountBooksBGDOMElement } from '../../components/booksBg';
import { renderMarkup } from '../../utilities/renderMarkup';
import { homePageId } from './config';
import { homePageMarkup } from './markup';

export const mountHomePageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, homePageMarkup);

  const homePageDOMElement = document.body.querySelector(`#${homePageId}`) as HTMLElement;
  mountBooksBGDOMElement(homePageDOMElement);
};
