import { pageClassName } from '../config';
import { gamesPageId } from './config';

import './index.scss';

export const gamesPageMarkup = `
  <section id="${gamesPageId}" class="${pageClassName}">
    <a class="game-button" href="#/sprint">
      <p>Спринт</p>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="180" height="180" id="Layer_1" viewBox="0 0 512.161 512.161" style="enable-background:new 0 0 512.161 512.161;" xml:space="preserve">
          <g transform="translate(-1)">
            <path d="M506.812,112.745l-1.298-1.298c-8.667-8.667-22.72-8.667-31.387,0L426.4,159.684   c-5.97,6.025-15.634,6.245-21.861,0.494L337.605,98.39c-4.791-4.425-11.081-6.885-17.609-6.885H220.43l-84.206,79.945   c-8.594,8.603-9.966,22.857-1.673,31.753c9.097,9.755,24.11,9.353,32.713-0.046l62.309-65.938h45.714L119.859,310.934H29.984   c-14.848,0-28.169,11.127-28.946,25.957c-0.823,15.817,11.758,28.901,27.392,28.901h128l72.192-77.056l64.951,67.913   l-17.481,111.579c-3.072,12.901,2.853,26.798,14.949,32.219c16.274,7.296,34.24-2.185,38.089-18.661l28.443-152.567l-82.395-82.286   l73.253-73.143l48.503,48.503c8.558,8.558,22.437,8.558,30.994,0l21.074-21.074l57.801-57.801   C515.278,134.953,515.278,121.22,506.812,112.745"/>
            <path d="M458.146,54.936c0-25.243-20.471-45.714-45.714-45.714c-25.243,0-45.714,20.471-45.714,45.714   s20.471,45.714,45.714,45.714C437.675,100.65,458.146,80.18,458.146,54.936"/>
          </g>
        </svg>
    </a>
    <a class="game-button" href="#/audio-call">
      <p>Аудиовызов</p>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="180" height="180" viewBox="0 0 75 75">
          <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="stroke:#111;stroke-width:5;stroke-linejoin:round;fill:#111;"/>
          <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;stroke:#111;stroke-width:5;stroke-linecap:round"/>
        </svg>
      </a>
  </section>
`;
