import { IAudioCallQuestion, IPair, IResults } from '../../../interfaces';

export const setResults = (gameResults: IResults, currentQuestion: IAudioCallQuestion | IPair) => {
  const { words, bestSeries } = gameResults;
  words.push(currentQuestion);
  if (currentQuestion.userCorrect) {
    gameResults.currentSeries += 1;
    gameResults.bestSeries = bestSeries < gameResults.currentSeries ? gameResults.currentSeries : bestSeries;
  } else {
    gameResults.currentSeries = 0;
  }
};
