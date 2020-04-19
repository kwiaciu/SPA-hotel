import $ from 'jquery';
import { Login } from './login-cookie-handler';


export const profileSidebar = () => {
    const login = new Login();
    const loggedIn = login.exists() && login.isNotEmpty();

    const profileSidebar = $('<aside id="profile-sidebar"></aside>');

    if (loggedIn) {
        profileSidebar
        .append('<button id="show-profile" class="btn"><i class="icon">Profile</i></button>')
        .append('<button id="logout" class="btn"><i class="icon">Logout</i></button>');
    } else {
        profileSidebar
        .append('<button id="show-profile" class="btn"><i class="icon">Profile</i></button>');
    }

    return profileSidebar
}
