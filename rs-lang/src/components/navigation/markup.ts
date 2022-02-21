import { pagesHash } from '../../config';
import {
  navNameClassName,
  navItems,
  navListClassName,
  navItemClassName,
  navPathClassName,
  profileWrapperClassName,
  profileClassName,
  profileIcon,
  logoClassName,
  navClassName,
} from './config';

import './index.scss';

export const navigationMarkup = `
  <div class="${navClassName} d-flex flex-column flex-shrink-0 p-3 text-white bg-secondary bg-gradient" style="width: 230px; height: 100vh">
    <a class="${logoClassName} text-white" href="#${pagesHash.home}">
      <h1>RSLANG</h1>
    </a>
    <hr>
    <ul class="${navListClassName} nav-pills flex-column mb-auto">
      ${navItems
        .map(
          ({ name, path, icon }) =>
            `
            <li class="${navItemClassName}">
              <a class="${navPathClassName} text-white" href="#${path}">
                ${icon}
                <span class="${navNameClassName}">${name}</span>
              </a>
            </li>
          `
        )
        .join('')}
    </ul>
    <hr>
    <div class="${profileWrapperClassName} dropdown">
      <div class="devs">
      <ul class="devs__list">
        <li class="devs__item">
          <a class="link" href="https://github.com/alchonokk" target="_blank" title="Alina">
            <img src="../../assets/images/alina.jpg" class="card-img-top"  alt="alina">
          </a>
        </li>
        <li class="devs__item">
          <a class="link" href="https://github.com/mikolash" target="_blank" title="Nikolai">
            <img src="../../assets/images/nikolai.jpg" class="card-img-top"  alt="nikolai">
          </a>
        </li>
        <li class="devs__item">
          <a class="link" href="https://github.com/kryvetski-andrei" target="_blank" title="Andrei">
            <img src="../../assets/images/andrei.jpg" class="card-img-top" alt="andrei">
          </a>
        </li>
      </ul>
    </div>
    <hr>
    <a class="rsschool-link" href="https://rs.school/js/" target="_blank">
      <img src="https://rs.school/images/rs_school_js.svg" alt="rsschool-logo"> 
    </a>
    <hr>
      <div class="${profileClassName} d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        ${profileIcon}
      </div>
        
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style="">
        <li><button class="dropdown-item profile-button">Sign in</button></li>
      </ul>
    </div>
  </div>
`;
