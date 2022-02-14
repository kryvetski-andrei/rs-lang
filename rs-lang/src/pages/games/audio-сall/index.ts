import { IAudioCallQuestion } from '../../../interfaces';
import { getWords } from '../../../utilities/api';
import { renderMarkup } from '../../../utilities/renderMarkup';
import { answersContainer, startGameButton } from '../config';
import { showResults } from '../sprint/endGame';
import { audioCallPageId, playAudioIconClassName } from './config';
import { generateQuizQuestions } from './generateQuestions';
import { audioCallGameMarkup, audioCallPageMarkup } from './markup';
import { playAudio } from './playAudio';

let currentQuestion = 0;

const  setAnswer = async (elem: IAudioCallQuestion, target: HTMLElement) => {
  elem.userCorrect = (elem.rightAnswer === target.innerHTML);
}

const changeQuestion = (quizVariants: Array<IAudioCallQuestion>) => {
  currentQuestion++;
  pushVariants(quizVariants);
  playAudio(document.body.querySelector(`.${playAudioIconClassName}`)?.getAttribute('data-audio') as string);
}

const pushVariants = (quizVariants: Array<IAudioCallQuestion>) => {
  document.body.querySelector(`.${playAudioIconClassName}`)?.setAttribute('data-audio', `${quizVariants[currentQuestion].audio}`);
  const { variants } = quizVariants[currentQuestion];
  (document.body.querySelector(`.${answersContainer}`) as HTMLElement).innerHTML = '';
  variants.forEach((elem) => {
    const variant = document.createElement('button');
    variant.classList.add('variants');
    variant.innerHTML = elem;
    document.body.querySelector(`.${answersContainer}`)?.insertAdjacentElement('beforeend', variant);
  })
}

const renderAudioCall = (audioCallContainer: HTMLElement, quizVariants: Array<IAudioCallQuestion>) => {
  audioCallContainer.innerHTML = '';
  renderMarkup(audioCallContainer, audioCallGameMarkup);
  pushVariants(quizVariants);
  
}

const startGame = async () => {
  const quizVariants = generateQuizQuestions(await getWords(1, 1));
  const audioCallContainer = document.body.querySelector(`#${audioCallPageId}`) as HTMLElement;
  renderAudioCall(audioCallContainer, quizVariants);
  const audioButton = document.body.querySelector(`.${playAudioIconClassName}`)
  playAudio(audioButton?.getAttribute('data-audio') as string);

  audioCallContainer.querySelector(`.${playAudioIconClassName}`)?.addEventListener('click', () => {
    playAudio(audioButton?.getAttribute('data-audio') as string);
    console.log(audioButton);
  });

  audioCallContainer.querySelector(`.${answersContainer}`)?.addEventListener('click', async ({target}) => {
    if((target as HTMLElement).tagName === 'BUTTON'){
      if(currentQuestion === 9){
        showResults(quizVariants, audioCallContainer);
        currentQuestion = 0;
      }
      setAnswer(quizVariants[currentQuestion], target as HTMLElement);
      changeQuestion(quizVariants);
    }
  });
} 


export const mountAudioCallPageDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, audioCallPageMarkup);
  const buttonStartGame = document.querySelector(`.${startGameButton}`)
  buttonStartGame?.addEventListener('click', startGame, {once: true});

};