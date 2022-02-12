import { IWord } from '../../interfaces';
import { appState } from '../../pages/schoolbook/config';
import { apiBaseURL } from '../../utilities/api/config';
import { maxCountWordsForPage } from '../config';

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
</div>
<div class="cards-wrap" id="cards-block">  
</div>
<div class="pagination-book">
         <button class="button prev-button" id="prevPageBook" disabled >‹ prev</button>
         <p class="number-page">${appState.numberPageOfSchoolbook + 1} / ${maxCountWordsForPage}</p>
         <button class="button next-button" id="nextPageBook">next ›</button>
</div>
`;

export const cardOfBook = (el: IWord, numericOfUnit: string) => `
<div class="card-book" id="${el.id}" data-name="${el.word}">
            <div class="line unit-${numericOfUnit}"></div>
            <img src="${apiBaseURL}/${el.image}" class="image" width="195" height="130">
            <div class="english-words">
                <div class="word">${el.word} ${el.transcription} 
                <button class="audio-button audio-button-${el.word} " data-audio="${el.audio}" id="audioId"></button>
                </div>
                <div class="word-meaning">${el.textMeaning} </div>
                <div class="word-example">${el.textExample} </div>
            </div>
            <div class="russian-words">
                <div class="word"> ${el.wordTranslate} </div>
                <div class="word-meaning">${el.textMeaningTranslate}</div>
                <div class="word-example">${el.textExampleTranslate}</div>
            </div>
            <div class="area-learn-difficult">
                <button class="learn-button learn-button-${el.word}" title="Изученное" data-name-button = "Studied"></button>
                <button class="difficult-button difficult-button-${el.word}" title="Сложное" data-name-button = "Heavy"></button>
            </div>

        </div>
`;
