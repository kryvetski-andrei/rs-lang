import { pageClassName } from '../../config';
import { audioCallPageId, playAudioIconClassName, rightanswerViewerClassName } from './config';
import { gamePageClassName } from '../config';
import { answersContainer } from '../config';
import { audioIconSVG } from '../markup';
import '../index.scss';
import './index.scss';

export const audioCallPageMarkup = `
  <section id="${audioCallPageId}" class="${pageClassName} ${gamePageClassName}">
    <h2 class="game-title">Аудиовызов</h2>
    <p class="game-description">Аудиовызов - это игра, в которой вам будет предложено прослушать слово на английском, и назвать правильный перевод слова</p>
    <p class="game-description">Выбирать варианты ответа можно как и нажатием на варианты ответа, так и нажатием клавишь по вариантам ответа</p>
    <p class="game-description">Выбирете сложность</p>
    <div class="difficulty-selection-container">
      <input type="radio" id="1" name="unit"><label class="unit-item" for="1">A1</label>
      <input type="radio" id="2" name="unit"><label class="unit-item" for="2">A2</label>
      <input type="radio" id="3" name="unit"><label class="unit-item" for="3">B1</label>
      <input type="radio" id="4" name="unit"><label class="unit-item" for="4">B2</label>
      <input type="radio" id="5" name="unit"><label class="unit-item" for="5">C1</label>
      <input type="radio" id="6" name="unit"><label class="unit-item" for="6">C2</label>
    </div>
    <button class="start-game">Начать</button>
  </section>
`;

export const audioCallGameMarkup = `
  <div class="${playAudioIconClassName}">${audioIconSVG}</div>
  <div class="${rightanswerViewerClassName}"></div>
  <div class="${answersContainer}"></div>
`