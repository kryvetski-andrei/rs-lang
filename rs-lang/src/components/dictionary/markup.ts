import { IWordDictionaryElement } from '../../interfaces';
import { apiBaseURL } from '../../utilities/api/config';

export const wrapOfDictionary = `
  <div class="forms">
    <div class="game-controls">
      <button class="audio-game" title="audio-game"></button>
      <button class="sprint-game" title="sprint-game"></button>
    </div>
  </div>
  <div class="cards-wrap" id="cards-block"></div>
`;

export const cardOfDictionary = ({
  _id,
  word,
  image,
  audio,
  transcription,
  textMeaning,
  textExample,
  wordTranslate,
  textMeaningTranslate,
  textExampleTranslate,
}: IWordDictionaryElement) => `
  <div class="card-book" id="${_id}" data-name="${word}">
    <img src="${apiBaseURL}/${image}" class="image" width="100%" height="150" alt="img-${word}">
    <div class="english-words book-words">
      <div class="word">${word} ${transcription} 
      <button class="audio-button audio-button-${word} " data-audio="${audio}" title="Произношение"></button>
      </div>
      <div class="word-meaning">${textMeaning}</div>
      <div class="word-example">${textExample}</div>
    </div>
    <div class="russian-words book-words">
      <div class="word"> ${wordTranslate} </div>
      <div class="word-meaning">${textMeaningTranslate}</div>
      <div class="word-example">${textExampleTranslate}</div>
    </div>
    <div class="area-difficult-statistic" id="area-${_id}">
      <button class="difficult-button difficult-button-${word} difficult" title="Удалить из сложного"></button>
      <button class="statistic-button statistic-button-${word}" title="Статистика" data-name-button = "Statistic"></button>
    </div>
  </div>
`;
