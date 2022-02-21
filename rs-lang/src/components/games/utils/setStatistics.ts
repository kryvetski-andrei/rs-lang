import { IAudioCallQuestion, IPair, IResults } from '../../../interfaces';
import { updateUserStatistics } from '../../../utilities/api';
import { TokenService } from '../../../utilities/api/utilities';

export const setNewWord = (statistic: any, { id }: IAudioCallQuestion | IPair) => {
  const userId = TokenService.getUser().userId;
  const { newWordsPerDay } = statistic.optional;
  const date = new Date().toLocaleDateString('ru-RU');
  if (!newWordsPerDay[date]) {
    newWordsPerDay[date] = [id];
  } else {
    const isWordAlreadeNew = newWordsPerDay[date].some((elem: any) => elem === id);
    if (!isWordAlreadeNew) {
      newWordsPerDay[date].push(id);
    }
  }

  delete statistic.id;
  updateUserStatistics(userId, statistic)
};

export const setAudioCallGameStat = (statistic: any, { id, userCorrect }: IAudioCallQuestion) => {
  const userId = TokenService.getUser().userId;
  const { audioCallGameStat } = statistic.optional;
  if (!audioCallGameStat[id]) {
    audioCallGameStat[id] = [userCorrect];
  } else {
    audioCallGameStat[id].push(userCorrect);
  }

  delete statistic.id;
  updateUserStatistics(userId, statistic)
};

export const setSprintGameStat = (statistic: any, { id, userCorrect }: IPair) => {
  const userId = TokenService.getUser().userId;
  const { sprintGameStat } = statistic.optional;

  if (!sprintGameStat[id]) {
    sprintGameStat[id] = [userCorrect];
  } else {
    sprintGameStat[id].push(userCorrect);
  }

  delete statistic.id;
  updateUserStatistics(userId, statistic)
};

export const setAudioCallBestSeries = (statistic: any, { bestSeries }: IResults) => {
  const userId = TokenService.getUser().userId;
  const { audioCallGameStat } = statistic.optional;
  if (audioCallGameStat.longestSeries < bestSeries) {
    audioCallGameStat.longestSeries = bestSeries;
  }

  delete statistic.id;
  updateUserStatistics(userId, statistic)
};

export const setSprintBestSeries = (statistic: any, { bestSeries }: IResults) => {
  const userId = TokenService.getUser().userId;
  const { sprintGameStat } = statistic.optional;
  if (sprintGameStat.longestSeries < bestSeries) {
    sprintGameStat.longestSeries = bestSeries;
  }

  delete statistic.id;
  updateUserStatistics(userId, statistic)
};
