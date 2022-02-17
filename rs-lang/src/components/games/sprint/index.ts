import { renderMarkup } from '../../../utilities/renderMarkup';
import { answersContainerClassName, startGameButton } from '../config';
import { sprintGameMarkup, sprintPageMarkup } from './markup';
import { sprintPageId, TIMER_DURATION } from './config';
import { showResults } from './utils/endGame';
import { setCountdown } from './utils/timer';
import { generatePairs } from './utils/getWordsPairs';
import { setAnswer, showCurrentPair } from './utils/gamePlay';
import { getWordsForGame } from '../utils/getWordsForGame';

const startGameSprintGame = async () => {
  const sprintContainer = document.body.querySelector(`#${sprintPageId}`) as HTMLElement;
  sprintContainer.innerHTML = '';
  renderMarkup(sprintContainer, sprintGameMarkup);
  setCountdown();
  const wordPairs = generatePairs(await getWordsForGame());
  showCurrentPair(wordPairs);
  setTimeout(() => {
    showResults(wordPairs, sprintContainer);
  }, TIMER_DURATION);
  document.body.querySelector(`.${answersContainerClassName}`)?.addEventListener('click', ({ target }) => {
    if ((target as Element).tagName === 'BUTTON') {
      setAnswer(wordPairs, (target as Element).className);
    }
  });
};

export const mountSprintPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, sprintPageMarkup());
  const buttonStartGame = document.querySelector(`.${startGameButton}`);
  buttonStartGame?.addEventListener('click', startGameSprintGame, { once: true });
};
