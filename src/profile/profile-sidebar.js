import $ from 'jquery';
import { Login } from '../login/login-cookie-handler';
import { profileSidebarHandler } from './profile-sidebar-handler';


export const profileSidebar = () => {
    const login = new Login();
    const loggedIn = login.exists() && login.isNotEmpty();

    const profileSidebar = $('<aside id="profile-sidebar"></aside>');

    if (loggedIn) {
        profileSidebar
            .append('<button id="show-profile" class="btn"><i class="material-icons icon">person</i> Profile</button>')
            .append('<button id="logout" class="btn"><i class="material-icons">exit_to_app</i>Logout</button>');
    } else {
        profileSidebar
            .append('<button id="show-profile" class="btn"><i class="material-icons icon">person</i> Profile</button>');
    }
    profileSidebarHandler();
    return profileSidebar
}
