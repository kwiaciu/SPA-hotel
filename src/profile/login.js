import $ from 'jquery';
import { loginPage } from './login-page';

export const login = () => {
    const login = $(`<aside id="login"></aside>`);

    login.append(loginPage());

    return login
}