import { renderMarkup } from '../../../utilities/renderMarkup';
import { startGameButton } from '../config';
import { sprintGameMarkup, sprintPageMarkup } from './markup';
import { sprintPageId } from './config';
import { setCountdown } from './timer';



const startGame = async () => {
  const sprintContainer = document.body.querySelector(`#${sprintPageId}`) as HTMLElement;
  sprintContainer.innerHTML = '';
  renderMarkup(sprintContainer, sprintGameMarkup);
  setCountdown();
}

export const mountSprintPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, sprintPageMarkup);
  const buttonStartGame = document.querySelector(`.${startGameButton}`)
  buttonStartGame?.addEventListener('click', startGame, {once: true});
};