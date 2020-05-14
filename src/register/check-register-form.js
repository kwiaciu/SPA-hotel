import $ from 'jquery';
import { databaseAccess } from '../common/database-access';
import { customAlert } from '../common/custom-alert';

export const checkRegisterForm = (data) => {
    databaseAccess.getUser(data.id).then(response => {
        if (response.status == '404') {
            databaseAccess.postUser(data).then(response => customAlert(response))
            // location.reload();
            
        }
    })

}