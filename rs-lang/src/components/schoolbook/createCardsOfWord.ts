import { mountCardOfBookDOMElement } from ".";
import { IWord } from "../../interfaces";
import { appState, boxCardsIdName } from "../../pages/schoolbook/config";
import { getWords } from "../../utilities/api";
import { cleanUp } from "../../utilities/cleanUp";
import { groupOfSchoolbookLocalStorage, pageOfBookLocalStorage } from "../config";
import { addPageOfBookInLocalStorage, addUnitOfBookInLocalStorage } from "./localStorageOfBook";
import { switchAudio } from "./switchAudio";

export const createCardsOfBook = async () => {
  const cardOfBookElement = document.getElementById(boxCardsIdName) as HTMLElement;
   
  addPageOfBookInLocalStorage(); 
  addUnitOfBookInLocalStorage();

  const wordsData  = await getWords(appState.numberPageOfSchoolbook, appState.groupOfSchoolbook);
  
  cleanUp(cardOfBookElement);
  
  const numericOfUnit = String(appState.groupOfSchoolbook + 1);
  wordsData.forEach((el: IWord) => {
    mountCardOfBookDOMElement(cardOfBookElement, el, numericOfUnit);
    switchAudio(el.word);
  });
};
  