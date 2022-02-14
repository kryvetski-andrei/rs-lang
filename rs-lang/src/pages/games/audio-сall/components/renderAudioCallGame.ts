import { IAudioCallQuestion } from "../../../../interfaces";
import { renderMarkup } from "../../../../utilities/renderMarkup";
import { audioCallGameMarkup } from "../markup";
import { pushVariants } from "./pushVariants";

export const renderAudioCallGame = (audioCallContainer: HTMLElement, quizVariants: Array<IAudioCallQuestion>, currentQuestion: number) => {
    audioCallContainer.innerHTML = '';
    renderMarkup(audioCallContainer, audioCallGameMarkup);
    pushVariants(quizVariants, currentQuestion);
}