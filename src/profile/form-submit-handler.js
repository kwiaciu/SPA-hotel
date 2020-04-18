import $ from 'jquery';
import { checkPassword } from './check-password';

export const formSubmitHandler = () => {
    $('#login-form').on("submit", function (event) {
        event.preventDefault();
        const login = $('#login-input').val();
        const pass = $('#password-input').val();
        checkPassword(login, pass);
        console.log('prevented')
    });
}
