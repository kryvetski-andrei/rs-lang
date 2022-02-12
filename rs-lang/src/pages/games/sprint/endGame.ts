import { IPair } from "../../../interfaces";
import { renderMarkup } from "../../../utilities/renderMarkup";
import { rightAnswersContainer, wrongAnswersContainer } from "./config";
import { resultsMarkup } from "./markup";

const pushVariantsToList = (wordPairs: Array<IPair>, parentDOMElement: HTMLElement) => {
    wordPairs.forEach(({wordsPair, userCorrect}) => {
      if(userCorrect !== undefined){
        const listItem = document.createElement('li')
        listItem.innerHTML = `${wordsPair}`;
        if(userCorrect){
          parentDOMElement.querySelector(`.${rightAnswersContainer}`)?.insertAdjacentElement('beforeend', listItem);
        } else{
          parentDOMElement.querySelector(`.${wrongAnswersContainer}`)?.insertAdjacentElement('beforeend', listItem);
        }
      }
    })
  }
  
export const showResults = (wordPairs: Array<IPair>, parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, resultsMarkup);
  pushVariantsToList(wordPairs, parentDOMElement);
}