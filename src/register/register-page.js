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
    $(registerForm).find('#mail-input').attr("type", "email")
    $(registerForm).find('#password-input').attr("type", "password")
    $(registerForm).find('#confirm-password-input').attr("type", "password")
    $(registerForm).find('#phone-input').attr("type", "tel").attr("pattern", "[0-9]{9}").attr("placeholder", "123456789");

    return registerPage
}