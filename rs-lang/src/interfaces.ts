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

export interface IUserWord {
  difficulty: string;
  optional: Record<string, unknown>;
}

export interface IStatistic {
  learnedWords: number;
  optional: Record<string, unknown>;
}

export interface ISetting {
  wordsPerDay: number;
  optional: Record<string, unknown>;
}
