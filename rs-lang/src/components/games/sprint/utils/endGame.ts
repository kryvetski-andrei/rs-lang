import { IPair, IAudioCallQuestion } from "../../../../interfaces";
import { renderMarkup } from "../../../../utilities/renderMarkup";
import { rightAnswersContainerClassName, wrongAnswersContainerClassName } from "../config";
import { resultsMarkup } from "../markup";

const pushVariantsToList = (wordPairs: Array<IPair | IAudioCallQuestion>, parentDOMElement: HTMLElement) => {
  const rightAnswersContainer = parentDOMElement.querySelector(`.${rightAnswersContainerClassName}`);
  const wrongAnswersContainer = parentDOMElement.querySelector(`.${wrongAnswersContainerClassName}`);
    wordPairs.forEach(({wordsPair, userCorrect}) => {
      if(userCorrect !== undefined){
        const listItem = document.createElement('li')
        listItem.innerHTML = `${wordsPair}`;
        if(userCorrect){
          rightAnswersContainer?.insertAdjacentElement('beforeend', listItem);
        } else{
          wrongAnswersContainer?.insertAdjacentElement('beforeend', listItem);
        }
      }
    })
  }
  
export const showResults = (wordPairs: Array<IPair | IAudioCallQuestion>, parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, resultsMarkup);
  pushVariantsToList(wordPairs, parentDOMElement);
}