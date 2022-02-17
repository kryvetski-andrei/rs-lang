import { pageClassName } from '../../../pages/config';
import { audioCallPageId, playAudioIconClassName, rightAnswerViewerClassName } from './config';
import { gamePageClassName, answersContainerClassName } from '../config';

import { audioIconSVG } from '../markup';

import './index.scss';
import { getDificultSelectionContainer } from '../utils/getDifficultContainer';

export const audioCallPageMarkup = () => {
  return `
  <section id="${audioCallPageId}" class="${pageClassName} ${gamePageClassName}">
    <h2 class="game-title">Аудиовызов</h2>
    <p class="game-description">Аудиовызов - это игра, в которой вам будет предложено прослушать слово на английском, и назвать правильный перевод слова</p>
    <p class="game-description">Выбирать варианты ответа можно как и нажатием на варианты ответа, так и нажатием клавишь по вариантам ответа</p>
    <p class="game-description">Выбирете сложность</p>
    ${localStorage.getItem('previousPage') === 'games' ? getDificultSelectionContainer : ''}
    <button class="start-game">Начать</button>
  </section>
`;
};

export const audioCallGameMarkup = `
  <div class="${playAudioIconClassName}">${audioIconSVG}</div>
  <div class="${rightAnswerViewerClassName}"></div>
  <div class="${answersContainerClassName}"></div>
`;
