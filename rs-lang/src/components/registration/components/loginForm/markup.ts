import { loginButtonClassName, loginFormClassName, loginFormWrapperClassName } from './config';

import './index.scss';

export const loginFormMarkup = `
  <div class="${loginFormWrapperClassName} tab-pane show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form class="${loginFormClassName}">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="email" id="loginName" name="email" class="form-control" required/>
        <label class="form-label" for="loginName">Email</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" name="password" class="form-control" required/>
        <label class="form-label" for="loginPassword">Password</label>
      </div>
      <!-- Submit button -->
      <button type="submit" class="${loginButtonClassName} btn btn-primary btn-block mb-4">Log in</button>
    </form>
  </div>
`;
