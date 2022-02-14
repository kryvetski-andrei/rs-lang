import { IAuth, ISetting, IStatistic, IUser, IUserWord } from '../../interfaces';
import {
  aggregatedWords,
  settings,
  signinPath,
  statistics,
  userDataLocalStorage,
  usersPath,
  words,
  wordsPath,
} from './config';
import { TokenService } from './utilities';

export const getNewTokens = async (userId: string) => {
  const { refreshToken } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/tokens`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const userData = await response.json();
  TokenService.setUser(userData);

  return userData;
};

export const getWords = async (page: number, group: number) => {
  const response = await fetch(`${wordsPath}?page=${page}&group=${group}`);
  const wordsData = await response.json();

  return wordsData;
};

export const getWord = async (userId: string) => {
  const response = await fetch(`${wordsPath}/${userId}`);
  const wordData = await response.json();

  return wordData;
};

export const createUser = async (body: IUser) => {
  const response = await fetch(usersPath, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const userData = await response.json();

  return userData;
};

export const loginUser = async (user: IUser) => {
  const response = await fetch(signinPath, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const userData = await response.json();
  if (userData.token) TokenService.setUser(userData);

  return userData;
};

export const authorizeUser = async ({ name, email, password }: IUser) => {
  await createUser({ name, email, password });
  loginUser({ email, password });
};

export const logoutUser = () => {
  TokenService.removeUser();
};

export const updateUser = async (userId: string, body: IAuth) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.status === 401) {
    await getNewTokens(userId);
    await updateUser(userId, body);
    return;
  }
  const userData = await response.json();

  return userData;
};

export const deleteUser = async (userId: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const userData = await response.json();

  if (response.status === 401) {
    await getNewTokens(userId);
    await deleteUser(userId);
    return;
  }

  return userData;
};

export const getUserWords = async (userId: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/${words}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 401) {
    await getNewTokens(userId);
    await getUserWords(userId);
    return;
  }

  const userWordData = await response.json();

  return userWordData;
};

export const postUsersWords = async (userId: string, wordId: string, word: IUserWord) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/${words}/${wordId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });

  if (response.status === 401) {
    await getNewTokens(userId);
    await postUsersWords(userId, wordId, word);
    return;
  }
  const wordsData = await response.json();

  return wordsData;
};

export const getUserWord = async (userId: string, wordId: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/${words}/${wordId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 401) {
    await getNewTokens(userId);
    await getUserWord(userId, wordId);
    return;
  }

  const userWordData = await response.json();

  return userWordData;
};

export const updateUserWord = async (userId: string, wordId: string, word: IUserWord) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/${words}/${wordId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });

  if (response.status === 401) {
    await getNewTokens(userId);
    await updateUserWord(userId, wordId, word);
    return;
  }
  const userWordData = await response.json();

  return userWordData;
};

export const deleteUserWord = async (userId: string, wordId: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/${words}/${wordId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 401) {
    await getNewTokens(userId);
    await deleteUser(userId);
  }
};

// TODO: ADD OTHER FILTERS VIA BOOLEAN PARAMS OR MAP DATA STRUCTURE WITH FILTERS

export const getUserAggregatedHardWords = async (userId: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const filter = '{ "$and": [{ "userWord.difficulty": "hard" }] }';
  const response = await fetch(`${usersPath}/${userId}/${aggregatedWords}?filter=${filter}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 401) {
    await getNewTokens(userId);
    await getUserAggregatedHardWords(userId);
    return;
  }

  const aggregatedHardWordsData = await response.json();

  return aggregatedHardWordsData;
};

export const getUserStatistics = async (userId: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/${statistics}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 401) {
    await getNewTokens(userId);
    await getUserStatistics(userId);
    return;
  }

  const userWordData = await response.json();

  return userWordData;
};

export const updateUserStatistics = async (userId: string, statistic: IStatistic) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/${statistics}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(statistic),
  });

  if (response.status === 401) {
    await getNewTokens(userId);
    await updateUserStatistics(userId, statistic);
    return;
  }
  const userWordData = await response.json();

  return userWordData;
};

export const getUserSettings = async (userId: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/${settings}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 401) {
    await getNewTokens(userId);
    await getUserSettings(userId);
    return;
  }

  const userWordData = await response.json();

  return userWordData;
};

export const updateUserSettings = async (userId: string, setting: ISetting) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${userId}/${settings}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(setting),
  });

  if (response.status === 401) {
    await getNewTokens(userId);
    await updateUserSettings(userId, setting);
    return;
  }
  const userWordData = await response.json();

  return userWordData;
};
