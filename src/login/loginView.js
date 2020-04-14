import $ from 'jquery';
import { Login } from './login';

export const loginView = () => {
    const login = new Login();
    const loggedIn = login.exists() && login.isNotEmpty();
    if (loggedIn) {
        console.log('logged in');
        // userProfile()
    } else {
        console.log('not logged in');
    }

    
}