import { IPair, IAudioCallQuestion, IResults } from '../../../../interfaces';
import { renderMarkup } from '../../../../utilities/renderMarkup';
import { audioDataAttribute, playAudioIconClassName } from '../../audio-сall/config';
import { playAudio } from '../../audio-сall/utils/playAudio';
import { getAudioIconSVG } from '../../markup';
import {
  playAgainButtonClassName,
  resultsContainerClassName,
  RESULT_ICON_SIZE,
  rightAnswersContainerClassName,
  wrongAnswersContainerClassName,
} from '../config';
import { resultsMarkup } from '../markup';

const pushVariantsToList = (wordPairs: Array<IPair | IAudioCallQuestion>, parentDOMElement: HTMLElement) => {
  let rightAnswerCount = 0;
  let wrongAnswerCount = 0;
  const rightAnswersContainer = parentDOMElement.querySelector(`.${rightAnswersContainerClassName}`);
  const wrongAnswersContainer = parentDOMElement.querySelector(`.${wrongAnswersContainerClassName}`);
  wordPairs.forEach(({ audio, wordsPair, userCorrect }) => {
    if (userCorrect !== undefined) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${getAudioIconSVG(RESULT_ICON_SIZE, audio)}${wordsPair}`;
      if (userCorrect) {
        rightAnswerCount += 1;
        rightAnswersContainer?.insertAdjacentElement('beforeend', listItem);
      } else {
        wrongAnswerCount += 1;
        wrongAnswersContainer?.insertAdjacentElement('beforeend', listItem);
      }
    }
  });
  (document.querySelector('.right') as HTMLElement).innerHTML = `Верно: ${rightAnswerCount}`;
  (document.querySelector('.wrong') as HTMLElement).innerHTML = `Неверно: ${wrongAnswerCount}`;
};

export const showResults = (wordPairs: Array<IPair | IAudioCallQuestion>, parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, resultsMarkup);
  pushVariantsToList(wordPairs, parentDOMElement);
  parentDOMElement.querySelectorAll(`.${playAudioIconClassName}`)?.forEach((playButtonImage) => {
    playButtonImage.addEventListener('click', () => {
      playAudio(playButtonImage.getAttribute(`${audioDataAttribute}`) as string);
    });
  });
};
