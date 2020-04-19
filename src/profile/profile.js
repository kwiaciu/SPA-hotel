import $ from 'jquery';
import { Login } from './login-cookie-handler';
import { login } from './login';
import { profilePage } from './profile-page';
export const profile = () => {
    const cookie = new Login();
    const loggedIn = cookie.exists() && cookie.isNotEmpty();
    const user = cookie.getValue().login;
    const profile = $(new DocumentFragment());

    if (loggedIn) {
        console.log('logged in');
        console.log(user);
        $('main').empty();
        profile.append(profilePage(user))

        // load user name from cookies
        // fetch data from database to display user data
    } else {
        console.log('not logged in');
        profile.append(login());
    }
    return profile
}