import { formClassName, radioButtonLoginClassName, radioButtonRegisterClassName } from './config';
import './index.scss';

export const registrationMarkup = `
  <div class="${formClassName}">
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
      <label class="${radioButtonLoginClassName} btn btn-outline-dark" for="btnradio1">Log in</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
      <label class="${radioButtonRegisterClassName} btn btn-outline-dark" for="btnradio2">Sign in</label>
    </div>
  </div>
`;
