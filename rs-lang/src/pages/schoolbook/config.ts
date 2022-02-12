export const schoolbookPageId = 'schoolbook';

export const boxCardsIdName = 'cards-block';
export const unitsClassName = 'unit-button';
export const prevPageOfBookClassName = '.prev-button';
export const nextPageOfBookClassName = '.next-button';
export const paginationClassName = '.number-page';

export type Data = {
  numberPageOfSchoolbook: number;
  groupOfSchoolbook: number;
};

export const appState: Data = {
  numberPageOfSchoolbook: 0,
  groupOfSchoolbook: 0,
};
