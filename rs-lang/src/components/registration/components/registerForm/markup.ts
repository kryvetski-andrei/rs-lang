import { registerFormClassName, registerFormWrapperClassName, signinButtonClassName } from './config';

import './index.scss';

export const registerFormMarkup = `
  <div class="${registerFormWrapperClassName} tab-pane fade show" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form class="${registerFormClassName}">
      <!-- Name input -->
      <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" name="name" required/>
        <label class="form-label" for="registerName">Name</label>
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" name="email" required/>
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" name="password" required minlength="8"/>
        <label class="form-label" for="registerPassword">Password</label>
      </div>
      <!-- Submit button -->
      <button type="submit" class="${signinButtonClassName} btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
`;
