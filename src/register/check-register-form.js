import $ from 'jquery';
import { databaseAccess } from '../common/database-access';
import { customAlert } from '../common/custom-alert';

export const checkRegisterForm = (data) => {
    databaseAccess.getUser(data.id).then(response => {
        if (response.status === 404) {
            databaseAccess.postUser(data).then(response => customAlert(response))
            // location.reload();
            $('#register').remove();
            $('main').off("click", "#register");
            $('main').off("submit", "#register-form");
        } else if (response.status === 200) {
            customAlert('User already exists')
        } else {
            customAlert(`Error: ${response}`)
        }
    })

}