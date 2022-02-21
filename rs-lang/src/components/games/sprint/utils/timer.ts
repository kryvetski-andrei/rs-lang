import { timerClassName, TIMER_DURATION, TIMER_INTERVAL } from '../config';

let secondsCount = 29;

const changeTimer = () => {
  (document.querySelector(`.${timerClassName}`) as HTMLElement).innerHTML = `${secondsCount}`;
  secondsCount -= 1;
};

const stopTimer = (intervalID: NodeJS.Timer) => {
  setTimeout(() => {
    clearInterval(intervalID);
    secondsCount = 29;
  }, TIMER_DURATION);
};

export const setCountdown = () => {
  const intervalID = setInterval(changeTimer, TIMER_INTERVAL);
  window.addEventListener('hashchange', () => {
    clearInterval(intervalID);
  });
  stopTimer(intervalID);
};
