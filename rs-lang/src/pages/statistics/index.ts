import { renderMarkup } from '../../utilities/renderMarkup';
import { statisticsPageMarkup } from './markup';

export const mountStatisticsPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, statisticsPageMarkup);
};
