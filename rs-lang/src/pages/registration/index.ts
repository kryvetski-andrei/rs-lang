import { mountRegistrationDOMElement } from '../../components/registration';
import { renderMarkup } from '../../utilities/renderMarkup';
import { registrationPageId } from './config';
import { registrationPageMarkup } from './markup';

export const mountRegistrationPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, registrationPageMarkup);

  const registrationPageDOMElement = document.body.querySelector(`#${registrationPageId}`) as HTMLElement;
  mountRegistrationDOMElement(registrationPageDOMElement);
};
