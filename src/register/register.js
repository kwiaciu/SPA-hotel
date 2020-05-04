import $ from 'jquery';
import { registerPage } from './register-page';
import { registerPageHandler } from './register-page-handler';

export const register = () => {
    $('#login').remove();
    $('main').off("click", "#login");
    $('main').off("submit", "#login-form");
    const register = $(`<aside class="overlay" id="register"></aside>`);

    register.append(registerPage());
    registerPageHandler(register);

    return register
}