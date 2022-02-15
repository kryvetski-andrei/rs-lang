export const getFirstElementsOfArray = <T>(array: Array<T>, count: number): Array<T> => {
  return array.slice(0, count);
};
