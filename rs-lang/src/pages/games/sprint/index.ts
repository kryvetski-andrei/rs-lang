import { renderMarkup } from '../../../utilities/renderMarkup';
import { startGameButton, unitСheckbox } from '../config';
import { resultsMarkup, sprintGameMarkup, sprintPageMarkup } from './markup';
import { answersContainer, resultNavigationButtons, playAgainButtonClassName, rightAnswersContainer, sprintPageId, toSchoolbookButtonClassName, wordTranslation, wrongAnswersContainer, timerDuration } from './config';
import { setCountdown } from './timer';
import { getWords } from '../../../utilities/api';
import { IPair, IWord } from '../../../interfaces'
import { generatePairs } from './getWordsPairs';
import { showResults } from './endGame';
import { setAnswer } from './gamePlay';




const getCurrentGroupOfWords = (): number => {
  let groupIndex = 0;
  document.body.querySelectorAll(`.${unitСheckbox}`)?.forEach((elem, index) => {
    if((elem as HTMLInputElement).checked){
      groupIndex = index;
    }
  })
  return groupIndex;
}


const startGame = async () => {
  const sprintContainer = document.body.querySelector(`#${sprintPageId}`) as HTMLElement;
  sprintContainer.innerHTML = '';
  renderMarkup(sprintContainer, sprintGameMarkup);
  setCountdown();
  const wordPairs = generatePairs(await getWords(0, getCurrentGroupOfWords()));
  setTimeout(() => {
    showResults(wordPairs, sprintContainer);
  }, timerDuration)
  document.body.querySelector(`.${answersContainer}`)?.addEventListener('click',({target}) =>{
    if((target as Element).tagName === 'BUTTON'){
      setAnswer(wordPairs, (target as Element).className);
    }
  })
}

export const mountSprintPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, sprintPageMarkup);
  const buttonStartGame = document.querySelector(`.${startGameButton}`)
  buttonStartGame?.addEventListener('click', startGame, {once: true});
};