import $ from 'jquery';


export const registerFormHandler = () => {
    $('main').on("submit", "#register-form",function (event) {
        event.preventDefault();
        const mail = $('#register-input').val();
        const phone = $('#register-input').val();
        const city = $('#register-input').val();
        const street = $('#register-input').val();
        const code = $('#password-input').val();
        // checkPassword(login, pass);
    });
}