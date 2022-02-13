import { IUserWord } from "../../interfaces";
import { deleteUserWord, postUsersWords } from "../../utilities/api";
import { difficultClassName, hiddenClassName, studiedClassName } from "../config";


export const showArea = async(word: string, idWord: string, idUser:string, arrayOfUserWords:[IUserWord]) => {
  const areaButtonOFlearnedAndHeavyWordElement = document.getElementById(`area-${idWord}`);
  areaButtonOFlearnedAndHeavyWordElement?.classList.remove(hiddenClassName);
  
  toggleLearnButton(word, idWord, idUser);
  toggleDifficultButton(word, idWord, idUser);
  
  arrayOfUserWords.forEach((wordOfUser: IUserWord) => {
    if (wordOfUser.optional.word === word){
      if (wordOfUser.difficulty ==='hard'){
        (document.body.querySelector(`.difficult-button-${word}`))?.classList.add('difficult');
        ((document.body.querySelector(`.learn-button-${word}`)) as HTMLButtonElement).disabled = true;
        ((document.body.querySelector(`.difficult-button-${word}`)) as HTMLButtonElement).disabled = true;
      };
    
      if (wordOfUser.optional.learn ==='learn'){
        (document.body.querySelector(`.learn-button-${word}`))?.classList.add('studied');
        ((document.body.querySelector(`.difficult-button-${word}`)) as HTMLButtonElement).disabled = true;
      };

    }
  });

  };
 
export const toggleLearnButton = (word: string, idWord: string, idUser: string) => {
  document.body.querySelector(`.learn-button-${word}`)?.addEventListener('click', async(e: Event) => {
    const target = e.target as HTMLButtonElement;
    if(target.classList.contains(studiedClassName)){
    target.classList.remove(studiedClassName);
    await deleteUserWord(idUser, idWord);
    (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = false;
    } else{
    target.classList.add(studiedClassName);
    let learnOption = {difficulty: "no", optional:{"learn":"learn", "word": word}}
    await postUsersWords(idUser, idWord, learnOption);
    (document.body.querySelector(`.difficult-button-${word}`) as HTMLButtonElement).disabled = true;
    }
  });
}
  
export const toggleDifficultButton = (word: string, idWord: string, idUser: string) => {
  document.body.querySelector(`.difficult-button-${word}`)?.addEventListener('click', async(e: Event) => {
    const target = e.target as HTMLButtonElement;
    target.classList.add(difficultClassName);
    let difficultOption = {difficulty: "hard", optional:{"learn":"no", "word": word}}
    await postUsersWords(idUser, idWord, difficultOption);
    target.disabled = true;
    (document.body.querySelector(`.learn-button-${word}`) as HTMLButtonElement).disabled = true;
  });
}