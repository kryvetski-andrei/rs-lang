import { authorizeUser } from '../../../../utilities/api';
import { renderMarkup } from '../../../../utilities/renderMarkup';
import { registerFormClassName, signinButtonClassName } from './config';
import { registerFormMarkup } from './markup';

export const mountRegisterFormDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, registerFormMarkup);

  const formDOMElement = document.body.querySelector(`.${registerFormClassName}`) as HTMLFormElement;
  document.body.querySelector(`.${signinButtonClassName}`)?.addEventListener('click', (event: Event) => {
    const formData = new FormData(formDOMElement);
    const formProps = JSON.parse(JSON.stringify(Object.fromEntries(formData)));
    const { name, email, password } = formProps;

    authorizeUser({ name, email, password });
    event.preventDefault();
  });
};
