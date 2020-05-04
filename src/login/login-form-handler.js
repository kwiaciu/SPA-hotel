import $ from 'jquery';
import { checkPassword } from './check-password';

export const loginFormHandler = () => {
    $('main').on("submit", "#login-form",function (event) {
        event.preventDefault();
        const login = $('#login-input').val();
        const pass = $('#password-input').val();
        checkPassword(login, pass);
        // $('main').off("submit","#login");
    });
}
