import $ from 'jquery';
import { databaseAccess } from '../common/database-access';

export const checkRegisterForm = (data) => {
    databaseAccess.getUser(data.id).then(response => {
        if (response.status == '404') {
            databaseAccess.postUser(data).then(response => alert(response))
            location.reload();

        }
    })

}