import { groupOfSchoolbookLocalStorage, pageOfBookLocalStorage } from "../../components/config";

export const schoolbookPageId = 'schoolbook';

export const boxCardsIdName = 'cards-block';
export const unitsClassName = 'unit-button';
export const prevPageOfBookClassName = '.prev-button';
export const nextPageOfBookClassName = '.next-button';
export const paginationClassName = '.number-page';

export type DataBook = {
  numberPageOfSchoolbook: number;
  groupOfSchoolbook: number;
};

export const appState: DataBook = {
  numberPageOfSchoolbook: JSON.parse(localStorage.getItem(`${pageOfBookLocalStorage}`)!),
  groupOfSchoolbook: JSON.parse(localStorage.getItem(`${groupOfSchoolbookLocalStorage}`)!)
};
