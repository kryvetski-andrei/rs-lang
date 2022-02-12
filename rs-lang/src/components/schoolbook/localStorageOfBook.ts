import { appState } from '../../pages/schoolbook/config';
import { groupOfSchoolbookLocalStorage, pageOfBookLocalStorage } from '../config';

export const addPageOfBookInLocalStorage = () => {
  localStorage.setItem(`${pageOfBookLocalStorage}`, JSON.stringify(appState.numberPageOfSchoolbook));
  appState.numberPageOfSchoolbook = JSON.parse(localStorage.getItem(`${pageOfBookLocalStorage}`)!);
};

export const addUnitOfBookInLocalStorage = () => {
  localStorage.setItem(`${groupOfSchoolbookLocalStorage}`, JSON.stringify(appState.groupOfSchoolbook));
  appState.groupOfSchoolbook = JSON.parse(localStorage.getItem(`${groupOfSchoolbookLocalStorage}`)!);
};

export const addPagesAndUnitsLocalStorage = () => {
  if (localStorage.getItem(`${pageOfBookLocalStorage}`) !== null) {
    addPageOfBookInLocalStorage();
  } else {
    appState.numberPageOfSchoolbook = 0;
  }

  if (localStorage.getItem(`${groupOfSchoolbookLocalStorage}`) !== null) {
    addUnitOfBookInLocalStorage();
  } else {
    appState.groupOfSchoolbook = 0;
  }
};
