import { databaseAccess } from '../common/database-access';
import { Login } from './login-cookie-handler';
import { customAlert } from '../common/custom-alert';

export const checkPassword = (login, pass) => {
    if (typeof (login) === 'string' && typeof (pass) === 'string' && login.length > 3 && pass.length > 3) {
        databaseAccess.getUser(login).then(response => {
            // console.log(response);
            if (response.status == '404') {
                customAlert('User not found')

            } else {
                const userPass = response.data.password;
                if (userPass === pass) {
                    const cookie = new Login();
                    cookie.setValue({ "login": login });
                    location.reload();
                    customAlert('Logged in')

                    // console.log(cookie.getValue());
                    // add info to cookies that user is now logged
                    // redirect to 'profile' again which now will be displaying user data
                } else {
                    customAlert('Incorrect password')

                }


            }
        })
    } else {
        customAlert('Incorrect login data')
    }

}

// TODO: https://www.npmjs.com/package/json-