import $ from 'jquery';
import { registerFormHandler } from './register-form-handler';

export const registerPage = () => {
    const registerPage = $('<div id="register-page"></div>');
    const registerForm = $('<form action="" id="register-form"></form>');
    const array = ['mail', 'password', 'confirm-password', 'phone', 'city', 'street', 'code'];
    array.forEach(element => {
        registerForm
            .append(`<label for="${element}-input">${element.toUpperCase()}</label>`)
            .append(`<input type="text" id="${element}-input" required></input>`);
    })
    registerForm
        .append('<input type="submit"></input>');
    registerPage.append(registerForm);
    registerFormHandler(registerPage);
    return registerPage
}