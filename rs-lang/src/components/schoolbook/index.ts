import { IWord } from "../../interfaces";
import { appState, paginationClassName } from "../../pages/schoolbook/config";
import { cleanUp } from "../../utilities/cleanUp";
import { renderMarkup } from "../../utilities/renderMarkup";
import { maxCountWordsForPage } from "../config";
import { cardOfBook, wrapOfBook } from "./markup";
 

export const mountWrapBookDOMElement = (parentDOMElement: HTMLElement) => {
    renderMarkup(parentDOMElement, wrapOfBook);
  };
  
  export const mountCardOfBookDOMElement = (parentDOMElement: HTMLElement, el: IWord, numericOfUnit: string) => {
    renderMarkup(parentDOMElement, cardOfBook(el, numericOfUnit));
  };
  
  export const rerenderPagination = () => {
    const paginationElement = document.querySelector(paginationClassName) as HTMLElement;
    cleanUp(paginationElement);
    paginationElement.innerHTML = `${appState.numberPageOfSchoolbook + 1} / ${maxCountWordsForPage} `;
  };
  