import { IAudioCallQuestion, IPair, IResults } from '../../../interfaces';

export const setNewWord = ({ optional }: any, { id }: IAudioCallQuestion | IPair) => {
  const { newWordsPerDay } = optional;
  const date = new Date().toLocaleDateString('ru-RU');
  if (!newWordsPerDay[date]) {
    newWordsPerDay[date] = [id];
  } else {
    const isWordAlreadeNew = newWordsPerDay[date].some((elem: any) => elem === id);
    if (!isWordAlreadeNew) {
      newWordsPerDay[date].push(id);
    }
  }
};

export const setAudioCallGameStat = ({ optional }: any, { id, userCorrect }: IAudioCallQuestion) => {
  const { audioCallGameStat } = optional;
  const { words } = audioCallGameStat;
  if (!words[id]) {
    words[id] = [userCorrect];
  } else {
    words[id].push(userCorrect);
  }
};

export const setSprintGameStat = ({ optional }: any, { id, userCorrect }: IPair) => {
  const { sprintGameStat } = optional;
  const { words } = sprintGameStat;
  if (!words[id]) {
    words[id] = [userCorrect];
  } else {
    words[id].push(userCorrect);
  }
};

export const setAudioCallBestSeries = ({ optional }: any, { bestSeries }: IResults) => {
  const { audioCallGameStat } = optional;
  if (audioCallGameStat.longestSeries < bestSeries) {
    audioCallGameStat.longestSeries = bestSeries;
  }
};

export const setSprintBestSeries = ({ optional }: any, { bestSeries }: IResults) => {
  const { sprintGameStat } = optional;
  if (sprintGameStat.longestSeries < bestSeries) {
    sprintGameStat.longestSeries = bestSeries;
  }
};
