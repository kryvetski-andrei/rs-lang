import {
  resultNavigationButtons,
  playAgainButtonClassName,
  rightAnswersContainerClassName,
  scoreClassName,
  sprintPageId,
  timerClassName,
  toSchoolbookButtonClassName,
  wordTranslation,
  wrongAnswersContainerClassName,
  trueAnswerClassName,
  falseAnswerClassName,
} from './config';
import { answersContainerClassName, gamePageClassName, pageClassName } from '../config';

import './index.scss';
import { getDificultSelectionContainer } from '../utils/getDifficultContainer';

export const sprintPageMarkup = (): string => {
  return `
  <section id="${sprintPageId}" class="${pageClassName} ${gamePageClassName}">
    <h2 class="game-title">Спринт</h2>
    <p class="game-description">Спринт - это игра, в которой вам будет отображаться пара слово-перевод, а вы должны будете указывать: верный перевод или неверный. Игра на скорость, и на неё вам дается 30 секунд!</p>
    <p class="game-description">Выбирать варианты ответа можно как и нажатием на кнопки "Верно"/"Неверно", так и нажатием клавишь стрелок</p>
    <p class="game-description">Выбирете сложность</p>
    ${localStorage.getItem('previousPage') === 'games' ? getDificultSelectionContainer : ''}
    <button class="start-game">Начать</button>
  </section>
`;
};

export const resultsMarkup = `
<div class="results-viewer">
  <div class="results-container">
    <p class="right">Верно</p>
    <ul class="${rightAnswersContainerClassName}">
    </ul>
    <p class="wrong">Неверно</p>
    <ul class="${wrongAnswersContainerClassName}">
    </ul>
  </div>
  <div class="${resultNavigationButtons}">
    <a class="${toSchoolbookButtonClassName}" href="/#/schoolbook">В учебник</a>
    <a class="${playAgainButtonClassName}" href="/#/games">Еще раз</a>
  </div>
</div>
`;

export const sprintGameMarkup = `
  <div class="${timerClassName}">30</div>
  <div class="${scoreClassName}">Score: 0</div>
  <div class="${wordTranslation}">Слово - перевод</div>
  <div class="${answersContainerClassName}">
    <button class="${falseAnswerClassName}">Неверно</button>
    <button class="${trueAnswerClassName}">Верно</button>
  </div>
`;
