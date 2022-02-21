import { savePreviousPageToLocalStorage } from '../../utilities/savePageNameToLocalStorage';
import { audioGameClassName, sprintGameClassName } from '../config';

export const startGames = () => {
  document.body.querySelector(sprintGameClassName)?.addEventListener('click', () => {
    savePreviousPageToLocalStorage();
  });
  document.body.querySelector(audioGameClassName)?.addEventListener('click', () => {
    savePreviousPageToLocalStorage();
  });
};
