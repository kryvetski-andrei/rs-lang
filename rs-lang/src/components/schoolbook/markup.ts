import { IWord } from '../../interfaces';
import { appState } from '../../pages/schoolbook/config';
import { apiBaseURL } from '../../utilities/api/config';
import { MAX_NUMBER_OF_WORDS_PER_PAGE } from '../config';

export const wrapOfBook = `
  <div class="forms">
    <div class="unit-controls">
      <p class="units-text">Units</p>
      <button class="unit-1 unit-button" title="Unit 1" data="0">1</button>
      <button class="unit-2 unit-button" title="Unit 2" data="1">2</button>
      <button class="unit-3 unit-button" title="Unit 3" data="2">3</button>
      <button class="unit-4 unit-button" title="Unit 4" data="3">4</button>
      <button class="unit-5 unit-button" title="Unit 5" data="4">5</button>
      <button class="unit-6 unit-button" title="Unit 6" data="5">6</button>
    </div>
    <div class="game-controls">
      <a href="#/audio-call" class="audio-game" title="audio-game"></a>
      <a href="#/sprint" class="sprint-game" title="sprint-game"></a>
    </div>
  </div>
  <div class="cards-wrap" id="cards-block"></div>
  <div class="pagination-book">
    <button class="button prev-button" id="prevPageBook" disabled >‹ prev</button>
    <p class="number-page">${appState.numberPageOfSchoolbook + 1} / ${MAX_NUMBER_OF_WORDS_PER_PAGE}</p>
    <button class="button next-button" id="nextPageBook">next ›</button>
  </div>
`;

export const cardOfBook = (wordData: IWord, numericOfUnit: string) => `
  <div class="card-book unit-${numericOfUnit}"" id="${wordData.id}" data-name="${wordData.word}">
 
    <img src="${apiBaseURL}/${wordData.image}" class="image" width="100%" height="150" alt="img-${wordData.word}">
    <div class="english-words book-words">
      <div class="word">${wordData.word} ${wordData.transcription} 
      <button class="audio-button audio-button-${wordData.word} " data-audio="${wordData.audio}" title="Произношение"></button>
      </div>
      <div class="word-meaning">${wordData.textMeaning}</div>
      <div class="word-example">${wordData.textExample}</div>
    </div>
    <div class="russian-words book-words">
      <div class="word"> ${wordData.wordTranslate} </div>
      <div class="word-meaning">${wordData.textMeaningTranslate}</div>
      <div class="word-example">${wordData.textExampleTranslate}</div>
    </div>
    <div class="area-learn-difficult hidden" id="area-${wordData.id}">
      <button class="learn-button learn-button-${wordData.word}" title="Изученное" data-name-button = "Studied"></button>
      <button class="difficult-button difficult-button-${wordData.word}" title="Сложное" data-name-button = "Heavy"></button>
      <button class="statistic-button statistic-button-${wordData.word}" title="Статистика" data-name-button = "Statistic"></button>
    </div>
  </div>
`;
