export const savePreviousPageToLocalStorage = () => {
  const previousPage = (location.href.match(/#\/(\w+)(?=\/?)/) as Array<any>)[1];
  localStorage.setItem('previousPage', previousPage);
};
