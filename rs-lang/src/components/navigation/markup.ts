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
  <div class="${navClassName} d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 230px; height: 100vh">
    <a class="${logoClassName} text-white" href="#${pagesHash.home}">
      <h1>RS LANG</h1>
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
      <div class="${profileClassName} d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        ${profileIcon}
      </div>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style="">
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
`;
