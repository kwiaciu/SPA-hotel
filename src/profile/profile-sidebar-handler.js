import $ from 'jquery';
import { Login } from './login-cookie-handler';
import { profile } from './profile';


export const profileSidebarHandler = () => {

    $('body').on('click', '#show-profile', () => {
        $('main').append(profile())
        console.log('sidebar works')
    });

    $('body').on('click', '#logout', () => {
        const login = new Login();
        login.empty();
    });


}