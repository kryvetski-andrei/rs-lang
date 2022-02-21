export interface IRoute {
  [key: string]: () => void;
}

export interface INavItem {
  name: string;
  path: string;
  icon: string;
}

export interface IUser {
  name?: string;
  email: string;
  password: string;
}

export interface IAuth {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface IWord {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export interface IPair {
  id: string;
  audio: string;
  word: string;
  wordsPair: string;
  isPairRight: boolean;
  userCorrect?: boolean;
}

export interface IAudioCallQuestion {
  id: string;
  audio: string;
  wordsPair: string;
  rightAnswer: string;
  variants: Array<string>;
  userCorrect?: boolean;
}
export interface IUserWord {
  difficulty: string;
  optional: Record<string, unknown>;
}

export interface IResults {
  words: Array<IAudioCallQuestion | IPair>;
  bestSeries: number;
  currentSeries: number;
}

export interface IStatistic {
  learnedWords: number;
  optional: Record<string, unknown>;
}

export interface ISetting {
  wordsPerDay: number;
  optional: Record<string, unknown>;
}

export interface IWordDictionary {
  paginatedResults: IWordDictionaryElement[];
  totalCount: [];
}

export interface IWordDictionaryElement {
  _id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
  userword: IUserWord;
}
