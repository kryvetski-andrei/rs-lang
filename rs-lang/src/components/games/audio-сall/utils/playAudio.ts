import { apiBaseURL } from "../../../../utilities/api/config";

export const playAudio = (audioPath: string) => {
  const audio = new Audio();
  audio.src = `${apiBaseURL}/${audioPath}`
  audio.load();
  audio.play();
}
