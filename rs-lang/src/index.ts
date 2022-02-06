import { urlParser } from './utilities/urlParser';
import { mountDOMElement } from './utilities/renderMarkup';

import { navigationMarkup } from './components/navigation';
import { homePageMarkup } from './pages/home';
import { schoolbookPageMarkup } from './pages/schoolbook';
import { dictionaryPageMarkup } from './pages/dictionary';
import { gamesPageMarkup } from './pages/games';
import { statisticsPageMarkup } from './pages/statistics';
import { aboutPageMarkup } from './pages/about';

import { pagesHash, pageWrapperId, sidebarWrapperId } from './config';

import { IRoute } from './interfaces';

const pageWrapperDOMElement = document.getElementById(pageWrapperId) as HTMLElement;
const sidebarWrapperDOMElement = document.getElementById(sidebarWrapperId) as HTMLElement;

const routes: IRoute = {
  [pagesHash.home]: () => mountDOMElement(pageWrapperDOMElement, homePageMarkup),
  [pagesHash.schoolbook]: () => mountDOMElement(pageWrapperDOMElement, schoolbookPageMarkup),
  [pagesHash.dictionary]: () => mountDOMElement(pageWrapperDOMElement, dictionaryPageMarkup),
  [pagesHash.games]: () => mountDOMElement(pageWrapperDOMElement, gamesPageMarkup),
  [pagesHash.statistics]: () => mountDOMElement(pageWrapperDOMElement, statisticsPageMarkup),
  [pagesHash.about]: () => mountDOMElement(pageWrapperDOMElement, aboutPageMarkup),
};

sidebarWrapperDOMElement.innerHTML = navigationMarkup;

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
