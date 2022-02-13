import { appState, unitsClassName } from '../../pages/schoolbook/config';
import { rerenderPageOfBook } from './switchPage';

export const switchUnitsOfBook = () => {
  document.body.addEventListener('click', (e: Event) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (target.classList.contains(unitsClassName)) {
      const titleOfUnit = target.getAttribute('data');
      appState.groupOfSchoolbook = Number(titleOfUnit);
      appState.numberPageOfSchoolbook = 0;
      rerenderPageOfBook();
    }
  });
};