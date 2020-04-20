import $ from 'jquery';
import { registerPage } from './register-page';
import { registerPageHandler } from './registerPageHandler';
import { registerFormHandler } from './registerFormHandler';

export const register = () => {
    $('#login').remove();
    $('main').off("click", "#login");
    $('main').off("submit", "#login-form");
    const register = $(`<aside id="register"></aside>`);

    register.append(registerPage());
    return register
}