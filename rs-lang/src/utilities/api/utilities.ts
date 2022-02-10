import { IAuth } from '../../interfaces';
import { userDataLocalStorage } from './config';

const getLocalRefreshToken = () => {
  const userData = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  return userData.refreshToken;
};

const getLocalAccessToken = () => {
  const userData = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  return userData.accessToken;
};

const updateLocalAccessToken = (token: string) => {
  const userData = JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
  userData.token = token;
  localStorage.setItem(`${userDataLocalStorage}`, JSON.stringify(userData));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem(`${userDataLocalStorage}`)!);
};

const setUser = (userData: IAuth) => {
  localStorage.setItem(`${userDataLocalStorage}`, JSON.stringify(userData));
};
const removeUser = () => {
  localStorage.removeItem(`${userDataLocalStorage}`);
};

export const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};
