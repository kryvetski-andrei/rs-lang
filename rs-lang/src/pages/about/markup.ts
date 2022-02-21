import { pageClassName } from '../config';
import { aboutPageId } from './config';
import '../../assets/images/alina.jpg';

import './index.scss';

export const aboutPageMarkup = `
  <section id="${aboutPageId}" class="${pageClassName}">
    <div class="about-us-wrapper">
      <div class="about-us">
        <div class="dev__wrapper">
        <a class="link" href="https://github.com/alchonokk">
          <div class="card" style="width: 18rem;">
            <img src="../../assets/images/alina.jpg" class="card-img-top" target="_blank" alt="alina">
            <div class="card-body">
              <p class="card-text">Алина</p>
              <h6>Участие в разработке:</h4>
              <ul class="work-development">
                <li> Электронный учебник</li>
                <li> Словарь (раздел "Сложные слова")</li>
                <li> Работа с сервером</li>
              </ul>
            </div>
          </div>
          </a>
        </div>
        <div class="dev__wrapper">
          <a class="link" href="https://github.com/mikolash">
            <div class="card" style="width: 18rem;">
            <img src="../../assets/images/nikolai.jpg" class="card-img-top" target="_blank" alt="nikolai">
            <div class="card-body">
              <p class="card-text">Николай</p>
              <h6>Участие в разработке:</h4>
              <ul class="work-development">
                <li> Мини-игра "Аудиовызов"</li>
                <li> Мини-игра "Спринт"</li>
                <li> Работа с сервером</li>
              </ul>
            </div>
          </a>
          </div>
        </div>
        <div class="dev__wrapper">
        <a class="link" href="https://github.com/kryvetski-andrei" target="_blank">
          <div class="card" style="width: 18rem;">
            <img src="../../assets/images/andrei.jpg" class="card-img-top" alt="andrei">
            <div class="card-body">
              <p class="card-text">Андрей</p>
              <h6>Участие в разработке:</h4>
              <ul class="work-development">
                <li> Оформление </li>
                <li> Авторизация </li>
                <li> Статистика </li>
                <li> Работа с сервером </li>
              </ul>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
  </section>
`;
