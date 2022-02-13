import { IAuth, IUser, IUserWord } from '../../interfaces';
import { signinPath, userDataLocalStorage, usersPath, words, wordsPath } from './config';
import { TokenService } from './utilities';

export const getNewTokens = async (id: string) => {
  const { refreshToken } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${id}/tokens`, {
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

export const getWord = async (id: string) => {
  const response = await fetch(`${wordsPath}/${id}`);
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

export const updateUser = async (id: string, body: IAuth) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.status === 401) {
    await getNewTokens(id);
    await updateUser(id, body);
    return;
  }
  const userData = await response.json();

  return userData;
};

export const deleteUser = async (id: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const userData = await response.json();

  if (response.status === 401) {
    await getNewTokens(id);
    await deleteUser(id);
    return;
  }

  return userData;
};

export const getUserWords = async (id: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${id}/${words}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 401) {
    await getNewTokens(id);
    await getUserWords(id);
    return;
  }

  const userWordData = await response.json();

  return userWordData;
};

export const postUsersWords = async (id: string, wordId: string, word: IUserWord) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${id}/${words}/${wordId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });

  if (response.status === 401) {
    await getNewTokens(id);
    await postUsersWords(id, wordId, word);
    return;
  }
  const wordsData = await response.json();

  return wordsData;
};

export const getUserWord = async (id: string, wordId: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${id}/${words}/${wordId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 401) {
    await getNewTokens(id);
    await getUserWord(id, wordId);
    return;
  }

  const userWordData = await response.json();

  return userWordData;
};

export const updateUserWord = async (id: string, wordId: string, word: IUserWord) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${id}/${words}/${wordId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });

  if (response.status === 401) {
    await getNewTokens(id);
    await updateUserWord(id, wordId, word);
    return;
  }
  const userWordData = await response.json();

  return userWordData;
};

export const deleteUserWord = async (id: string, wordId: string) => {
  const { token } = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  const response = await fetch(`${usersPath}/${id}/${words}/${wordId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 401) {
    await getNewTokens(id);
    await deleteUser(id);
    return;
  }
  
  // const userWordData = await response.json();
  // return userWordData;
};
