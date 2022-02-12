// import { baseLangUrl } from './API/getWords';

import { apiBaseURL } from "../../utilities/api/config";

const audio = new Audio();
let wasPlayed = false;

function toggleAudio(link: string, linkMeaning: string, linkExample: string) {
  function playAudio() {
    const audioArray = [`${apiBaseURL}/${link}`, `${apiBaseURL}/${linkMeaning}`, `${apiBaseURL}/${linkExample}`];

    audio.src = audioArray[0];
    audio.load();
    audio.play();
    let i = 1;
    audio.addEventListener('ended', function () {
      if (i < audioArray.length) {
        audio.src = audioArray[i];
        audio.load();
        audio.play();
        i += 1;
      }
    });
    wasPlayed = false;
  }

  if (!wasPlayed) {
    wasPlayed = true;
    playAudio();
  }
}

export default toggleAudio;
