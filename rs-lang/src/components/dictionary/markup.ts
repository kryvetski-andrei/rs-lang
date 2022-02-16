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

export const cardOfDictionary = (wordData: IWordDictionaryElement) => `
  <div class="card-book" id="${wordData._id}" data-name="${wordData.word}">
    <img src="${apiBaseURL}/${wordData.image}" class="image" width="195" height="130">
    <div class="english-words">
      <div class="word">${wordData.word} ${wordData.transcription} 
      <button class="audio-button audio-button-${wordData.word} " data-audio="${wordData.audio}" id="audioId"></button>
      </div>
      <div class="word-meaning">${wordData.textMeaning}</div>
      <div class="word-example">${wordData.textExample}</div>
    </div>
    <div class="russian-words">
      <div class="word"> ${wordData.wordTranslate} </div>
      <div class="word-meaning">${wordData.textMeaningTranslate}</div>
      <div class="word-example">${wordData.textExampleTranslate}</div>
    </div>
    <div class="area-difficult-statistic" id="area-${wordData._id}">
      <button class="difficult-button difficult-button-${wordData.word} difficult" title="Удалить из сложного"></button>
      <button class="statistic-button statistic-button-${wordData.word}" title="Статистика" data-name-button = "Statistic"></button>
    </div>
  </div>
`;
