import { pageClassName } from '../config';
import { aboutPageId } from './config';

import './index.scss';

export const aboutPageMarkup = `
  <section id="${aboutPageId}" class="${pageClassName}">
    <h2 class="title-about">О команде разработчиков:</h2>
    <div class="wpap-about">
      <div class="card-development">
        <div class="image-development ava1"></div>
        <div class= "wrap-work">
          <a href="https://github.com/kryvetski-andrei"  class="git-link" target="_blank"><img src="../../assets/github.svg" alt="gitHub logo" width="25"><p class="github-user">kryvetski-andrei</p></a>
          <h4>Участие в разработке:</h4>
          <ul class="work-development">
            <li> Главная страница приложения</li>
            <li> Авторизация</li>
            <li> Статистика</li>
            <li> Back-end</li>
          </ul>
        </div>
      </div> 
      <div class="card-development">
        <div class="image-development ava2"></div>
        <div class= "wrap-work">
          <a href="https://github.com/mikolash"  class="git-link" target="_blank"><img src="../../assets/github.svg" alt="gitHub logo" width="25"><p class="github-user">mikolash</p></a>
          <h4>Участие в разработке:</h4>
          <ul class="work-development">
            <li> Мини-игра "Аудиовызов"</li>
            <li> Мини-игра "Спринт"</li>
          </ul>
        </div>
      </div> 
      <div class="card-development">
        <div class="image-development ava3"></div>
        <div class= "wrap-work">
          <a href="https://github.com/alchonokk"  class="git-link" target="_blank"><img src="../../assets/github.svg" alt="gitHub logo" width="25"><p class="github-user">alchonokk</p></a>
          <h4>Участие в разработке:</h4>
          <ul class="work-development">
            <li> Электронный учебник</li>
            <li> Словарь (раздел "Сложные слова")</li>
          </ul>
        </div>
      </div> 
    </div>
  </section>
  
`;
