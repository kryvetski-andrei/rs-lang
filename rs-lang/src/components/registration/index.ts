import { renderMarkup } from '../../utilities/renderMarkup';
import { mountLoginFormDOMElement } from './components/loginForm';
import { loginFormWrapperClassName } from './components/loginForm/config';
import { mountRegisterFormDOMElement } from './components/registerForm';
import { registerFormWrapperClassName } from './components/registerForm/config';
import { formClassName, radioButtonLoginClassName, radioButtonRegisterClassName } from './config';
import { registrationMarkup } from './markup';

export const mountRegistrationDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, registrationMarkup);

  const formDOMElement = document.body.querySelector(`.${formClassName}`) as HTMLElement;
  const radioButtonLogin = document.body.querySelector(`.${radioButtonLoginClassName}`) as HTMLElement;
  const radioButtonRegister = document.body.querySelector(`.${radioButtonRegisterClassName}`) as HTMLElement;

  mountLoginFormDOMElement(formDOMElement);
  mountRegisterFormDOMElement(formDOMElement);

  const loginForm = document.body.querySelector(`.${loginFormWrapperClassName}`) as HTMLElement;
  const registerForm = document.body.querySelector(`.${registerFormWrapperClassName}`) as HTMLElement;

  radioButtonLogin.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
  });
  radioButtonRegister.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  });
};
