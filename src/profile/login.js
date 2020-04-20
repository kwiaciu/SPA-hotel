import $ from 'jquery';
import { loginPage } from './login-page';
import { loginFormHandler } from './login-form-handler';
import { loginPageHandler } from './login-page-handler';

export const login = () => {
    const login = $(`<aside id="login"></aside>`);

    login.append(loginPage());

    return login
}