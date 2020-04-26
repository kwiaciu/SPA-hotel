import { databaseAccess } from '../common/database-access';
import { Login } from './login-cookie-handler';

export const checkPassword = (login,pass) => {
    //TODO: change console.logs to dom elements to show to user
    if (typeof(login)==='string' && typeof(pass)==='string' && login.length > 3 && pass.length > 3 ){
        databaseAccess.getUser(login).then( response => {
            console.log(response);
            if (response.status == '404') {
            console.log('User not found')
            
            } else {
            const userPass = response.data.password;
            if ( userPass === pass) {
                const cookie = new Login();
                console.log('logging in')
                cookie.setValue({"login": login});
                location.reload();

                // console.log(cookie.getValue());
                // add info to cookies that user is now logged
                // redirect to 'profile' again which now will be displaying user data
            } else {
                console.log('Incorrect password')
                
            }

            
            }})
    } else {
        console.log('Incorrect login data')
    }
    
}
    
// TODO: https://www.npmjs.com/package/json-