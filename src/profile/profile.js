import $ from 'jquery';
import { loginPage } from './login-page';
import { Login } from './login-cookie-handler';

export const profile = () => {
    const login = new Login();
    const loggedIn = login.exists() && login.isNotEmpty();
    const profile = $(` <aside id="login">
                        
                        </aside>`);

    if (loggedIn) {
        console.log('logged in');
        // userProfile()
        // load user name from cookies
        // fetch data from database to display user data
    } else {
        console.log('not logged in');
        profile.append(loginPage());
        return profile
    }
}