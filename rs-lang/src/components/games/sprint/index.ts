import { renderMarkup } from '../../../utilities/renderMarkup';
import { answersContainerClassName, startGameButton } from '../config';
import { sprintGameMarkup, sprintPageMarkup } from './markup';
import { sprintPageId, TIMER_DURATION } from './config';
import { showResults } from './utils/endGame';
import { setCountdown } from './utils/timer';
import { generatePairs } from './utils/getWordsPairs';
import { setAnswer, showCurrentPair } from './utils/gamePlay';
import { getWordsForGame } from '../utils/getWordsForGame';
import { IResults } from '../../../interfaces';
import { setResults } from '../utils/setResults';
import { initialStatistics } from '../utils/initialStatistics';
import { setNewWord, setSprintBestSeries, setSprintGameStat } from '../utils/setStatistics';
import { cleanUp } from '../../../utilities/cleanUp';
import { getNewTokens, getUserAggregatedHardWords } from '../../../utilities/api';
import { userDataLocalStorage, usersPath, aggregatedWords } from '../../../utilities/api/config';


const startGameSprintGame = async () => {
  let currentPair = 0;
  const sprintRsults: IResults = {
    words: [],
    bestSeries: 0,
    currentSeries: 0,
  };
  const sprintContainer = document.body.querySelector(`#${sprintPageId}`) as HTMLElement;
  cleanUp(sprintContainer);
  renderMarkup(sprintContainer, sprintGameMarkup);
  setCountdown();
  const wordPairs = generatePairs(await getWordsForGame());
  showCurrentPair(wordPairs[currentPair]);
  setTimeout(() => {
    showResults(wordPairs, sprintContainer);
    setSprintBestSeries(initialStatistics, sprintRsults);
    currentPair = 0;
    console.log(initialStatistics);
  }, TIMER_DURATION);
  document.body.querySelector(`.${answersContainerClassName}`)?.addEventListener('click', ({ target }) => {
    if ((target as Element).tagName === 'BUTTON') {
      setAnswer(wordPairs[currentPair], (target as Element).className);
      setResults(sprintRsults, wordPairs[currentPair]);
      setNewWord(initialStatistics, wordPairs[currentPair]);
      setSprintGameStat(initialStatistics, wordPairs[currentPair]);
      currentPair += 1;
      showCurrentPair(wordPairs[currentPair]);
      console.log(sprintRsults);
    }
  });
};

export const mountSprintPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, sprintPageMarkup());
  const buttonStartGame = document.querySelector(`.${startGameButton}`);
  buttonStartGame?.addEventListener('click', startGameSprintGame, { once: true });
};
