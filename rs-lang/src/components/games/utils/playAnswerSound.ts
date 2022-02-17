export const playAnswerSound = (isUserCorrect: boolean) => {
  const audio = new Audio();
  audio.src = `../../../assets/${isUserCorrect}-answer.mp3`;
  audio.play();
};
