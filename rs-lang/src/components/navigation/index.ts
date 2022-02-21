import { pagesHash } from '../../config';
import { TokenService } from '../../utilities/api/utilities';
import { renderMarkup } from '../../utilities/renderMarkup';
import { navigationMarkup } from './markup';

export const mountNavigationDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, navigationMarkup);

  const logButton = document.body.querySelector(`.profile-button`) as HTMLElement;

  logButton.addEventListener('click', () => {
    if (logButton.innerText === 'Log out') {
      localStorage.clear();
      logButton.innerText = 'Sign in';
    } else {
      location.hash = `${pagesHash.registration}`;
      logButton.innerText = 'Log out';
    }
  });
};
