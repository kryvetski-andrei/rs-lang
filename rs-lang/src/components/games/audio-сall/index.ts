import { IAudioCallQuestion } from '../../../interfaces';
import { getWords } from '../../../utilities/api';
import { renderMarkup } from '../../../utilities/renderMarkup';
import { answersContainer, startGameButton } from '../config';
import { showResults } from '../sprint/utils/endGame';
import { getCurrentGroupOfWords } from '../utils/getCurrentGroup';
import { pushVariants } from './components/pushVariants';
import { renderAudioCallGame } from './components/renderAudioCallGame';
import { audioCallPageId, playAudioIconClassName, QUESTIONS_COUNT } from './config';
import { audioCallPageMarkup } from './markup';
import { generateQuizQuestions } from './utils/generateQuestions';
import { playAudio } from './utils/playAudio';



const  setAnswer = async (elem: IAudioCallQuestion, target: HTMLElement) => {
  elem.userCorrect = (elem.rightAnswer === target.innerHTML);
}

const changeQuestion = (quizVariants: Array<IAudioCallQuestion>, currentQuestion: number) => {
  pushVariants(quizVariants, currentQuestion);
  playAudio(document.body.querySelector(`.${playAudioIconClassName}`)?.getAttribute('data-audio') as string);
}


const startGame = async () => {
  let currentQuestion = 0;
  const quizVariants = generateQuizQuestions(await getWords(1, getCurrentGroupOfWords()));
  const audioCallContainer = document.body.querySelector(`#${audioCallPageId}`) as HTMLElement;
  renderAudioCallGame(audioCallContainer, quizVariants, currentQuestion);
  
  const audioButton = document.body.querySelector(`.${playAudioIconClassName}`);
  
  playAudio(audioButton?.getAttribute('data-audio') as string);

  audioCallContainer.querySelector(`.${playAudioIconClassName}`)?.addEventListener('click', () => {
    playAudio(audioButton?.getAttribute('data-audio') as string);
  });

  audioCallContainer.querySelector(`.${answersContainer}`)?.addEventListener('click', async ({target}) => {
    if((target as HTMLElement).tagName === 'BUTTON'){
      if(currentQuestion === QUESTIONS_COUNT - 1){
        setAnswer(quizVariants[currentQuestion], target as HTMLElement);
        currentQuestion = 0;
        showResults(quizVariants, audioCallContainer);
      } else{
        setAnswer(quizVariants[currentQuestion], target as HTMLElement);
        currentQuestion++;
        changeQuestion(quizVariants, currentQuestion);
      }
    }
  });
} 


export const mountAudioCallPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, audioCallPageMarkup);
  const buttonStartGame = document.querySelector(`.${startGameButton}`);
  buttonStartGame?.addEventListener('click', startGame, {once: true});

};