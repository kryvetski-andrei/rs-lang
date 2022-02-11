import { renderMarkup } from '../../../utilities/renderMarkup';
import { audioCallPageMarkup } from './markup';

export const mountAudioCallPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, audioCallPageMarkup);
};