import { pageClassName } from '../../config';
import { answersContainer, scoreClassName, sprintPageId, timerClassName, wordTranslation } from './config';
import { gamePageClassName } from '../config';
import { unitСheckbox } from '../config';

import '../index.scss';
import './index.scss';

export const sprintPageMarkup = `
  <section id="${sprintPageId}" class="${pageClassName} ${gamePageClassName}">
    <h2 class="game-title">Спринт</h2>
    <p class="game-description">Спринт - это игра, в которой вам будет отображаться пара слово-перевод, а вы должны будете указывать: верный перевод или неверный. Игра на скорость, и на неё вам дается 30 секунд!</p>
    <p class="game-description">Выбирать варианты ответа можно как и нажатием на кнопки "Верно"/"Неверно", так и нажатием клавишь стрелок</p>
    <p class="game-description">Выбирете сложность</p>
    <div class="difficulty-selection-container">
      <input class="${unitСheckbox}" type="radio" id="1" name="unit"><label class="unit-item" for="1">A1</label>
      <input class="${unitСheckbox}" type="radio" id="2" name="unit"><label class="unit-item" for="2">A2</label>
      <input class="${unitСheckbox}" type="radio" id="3" name="unit"><label class="unit-item" for="3">B1</label>
      <input class="${unitСheckbox}" type="radio" id="4" name="unit"><label class="unit-item" for="4">B2</label>
      <input class="${unitСheckbox}" type="radio" id="5" name="unit"><label class="unit-item" for="5">C1</label>
      <input class="${unitСheckbox}" type="radio" id="6" name="unit"><label class="unit-item" for="6">C2</label>
    </div>
    <button class="start-game">Начать</button>
  </section>
`;

export const sprintGameMarkup = `
  <div class="${timerClassName}">30</div>
  <div class="${scoreClassName}">Score: 0</div>
  <div class="${wordTranslation}">Слово - перевод</div>
  <div class="${answersContainer}">
    <button class="false">Неверно</button>
    <button class="true">Верно</button>
  </div>
`