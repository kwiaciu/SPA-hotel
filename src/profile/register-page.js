import $ from 'jquery';

export const registerPage = () => {
    const registerPage = $('<div id="register-page"></div>');
    const registerForm = $('<form action="" id="register-form"></form>');
    const array = ['mail', 'phone', 'city', 'street', 'code'];
    array.forEach(element => {
        registerForm
            .append(`<label for="${element}-input">${element.toUpperCase()}</label>`)
            .append(`<input type="text" id="${element}-input"></input>`);
    })
    registerForm
        .append('<input type="submit"></input>');
    registerPage.append(registerForm);
    return registerPage
}