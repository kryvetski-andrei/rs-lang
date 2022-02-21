import { mountAboutPageDOMElement } from './pages/about';
import { mountDictionaryPageDOMElement } from './pages/dictionary';
import { mountGamesPageDOMElement } from './pages/games';
import { mountSprintPageDOMElement } from './components/games/sprint';
import { mountAudioCallPageDOMElement } from './components/games/audio-сall';
import { mountHomePageDOMElement } from './pages/home';
import { mountSchoolbookPageDOMElement } from './pages/schoolbook';
import { mountStatisticsPageDOMElement } from './pages/statistics';
import { mountRegistrationPageDOMElement } from './pages/registration';

import { mountNavigationDOMElement } from './components/navigation';

import { urlParser } from './utilities/urlParser';

import { IRoute } from './interfaces';

import { pagesHash, pageWrapperId, sidebarWrapperId } from './config';
import { updateUserStatistics } from './utilities/api';

const pageWrapperDOMElement = document.getElementById(pageWrapperId) as HTMLElement;
const sidebarWrapperDOMElement = document.getElementById(sidebarWrapperId) as HTMLElement;

const routes: IRoute = {
  [pagesHash.home]: () => mountHomePageDOMElement(pageWrapperDOMElement),
  [pagesHash.schoolbook]: () => mountSchoolbookPageDOMElement(pageWrapperDOMElement),
  [pagesHash.dictionary]: () => mountDictionaryPageDOMElement(pageWrapperDOMElement),
  [pagesHash.games]: () => mountGamesPageDOMElement(pageWrapperDOMElement),
  [pagesHash.statistics]: () => mountStatisticsPageDOMElement(pageWrapperDOMElement),
  [pagesHash.about]: () => mountAboutPageDOMElement(pageWrapperDOMElement),
  [pagesHash.registration]: () => mountRegistrationPageDOMElement(pageWrapperDOMElement),
  [pagesHash.sprint]: () => mountSprintPageDOMElement(pageWrapperDOMElement),
  [pagesHash.audioCall]: () => mountAudioCallPageDOMElement(pageWrapperDOMElement),
};

mountNavigationDOMElement(sidebarWrapperDOMElement);

const router = (): void => {
  const request = urlParser.parseRequestURL();
  const parsedURL =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  const renderPage = routes[parsedURL];
  pageWrapperDOMElement.innerHTML = '';
  renderPage();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
