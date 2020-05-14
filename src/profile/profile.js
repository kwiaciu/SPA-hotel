import $ from 'jquery';
import { Login } from '../login/login-cookie-handler';
import { login } from '../login/login';
import { profilePage } from './profile-page';
export const profile = () => {
    const cookie = new Login();
    const loggedIn = cookie.exists() && cookie.isNotEmpty();

    const profile = $(new DocumentFragment);

    if (loggedIn) {
        const user = cookie.getValue().login;
        console.log('logged in');
        console.log(user);
        $('main').empty();
        profile.append(profilePage(user))

        // load user name from cookies
        // fetch data from database to display user data
    } else {
        profile
            .append(login());
    }
    return profile
}