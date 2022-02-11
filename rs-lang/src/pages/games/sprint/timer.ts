import { timerInterval, timerClassName, timerDuration } from "./config";

let secondsCount = 29;

const changeTimer = () => {
  (document.querySelector(`.${timerClassName}`) as HTMLElement).innerHTML = `${secondsCount}`;
  secondsCount -= 1;
}

const stopTimer = (intervalID: NodeJS.Timer) => {
    setTimeout(() => {
        clearInterval(intervalID)
      }, timerDuration)  
}

export const setCountdown = () => {
    const intervalID = setInterval(changeTimer, timerInterval);
    stopTimer(intervalID);
}