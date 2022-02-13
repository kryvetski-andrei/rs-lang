import toggleAudio from './toggleAudio';

export const switchAudio = (word: string) => {
  document.body.querySelector(`.audio-button-${word}`)?.addEventListener('click', (e: Event) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const titleOfAudio = target.getAttribute('data-audio');
    const titleOfAudioMeaning = `${titleOfAudio?.slice(0, -4)}_meaning.mp3`;
    const titleOfAudioExample = `${titleOfAudio?.slice(0, -4)}_example.mp3`;
    if (titleOfAudio) {
      toggleAudio(titleOfAudio, titleOfAudioMeaning, titleOfAudioExample);
    }
  });
};
