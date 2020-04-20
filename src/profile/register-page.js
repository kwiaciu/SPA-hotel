import $ from 'jquery';
import { registerFormHandler } from './registerFormHandler';
import { registerPageHandler } from './registerPageHandler';

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
    registerPageHandler();
    registerFormHandler();
    return registerPage
}