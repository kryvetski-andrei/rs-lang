import { loginUser } from '../../../../utilities/api';
import { renderMarkup } from '../../../../utilities/renderMarkup';
import { loginButtonClassName, loginFormClassName } from './config';
import { loginFormMarkup } from './markup';

export const mountLoginFormDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, loginFormMarkup);

  const formDOMElement = document.body.querySelector(`.${loginFormClassName}`) as HTMLFormElement;
  document.body.querySelector(`.${loginButtonClassName}`)?.addEventListener('click', (event: Event) => {
    event.preventDefault();
    const formData = new FormData(formDOMElement);
    const formProps = JSON.parse(JSON.stringify(Object.fromEntries(formData)));
    const { email, password } = formProps;

    loginUser({ email, password });
  });
};
