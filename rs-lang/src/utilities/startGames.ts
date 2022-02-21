import { savePreviousPageToLocalStorage } from './savePageNameToLocalStorage';
import { audioGameClassName, sprintGameClassName } from '../components/config';

export const startGames = () => {
  document.body.querySelector(sprintGameClassName)?.addEventListener('click', () => {
    savePreviousPageToLocalStorage();
  });
  document.body.querySelector(audioGameClassName)?.addEventListener('click', () => {
    savePreviousPageToLocalStorage();
  });
};
