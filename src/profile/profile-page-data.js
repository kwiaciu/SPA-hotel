import $ from 'jquery';
import { databaseAccess } from '../common/database-access';


export const profilePageData = (user) => {
    const profilePageData = $('<section id="profile-data"></section>');
    const data = $('<ul id="data"></ul>')

    const array = ['mail', 'phone', 'city', 'street', 'code'];
    databaseAccess.getUser(user).then(response => {
        array.forEach(element => {
            data.append(`<li id="user-${element}">${element.toUpperCase()}:<p class="data">${response.data[element]}</p><input class="data hidden" value="${response.data[element]}" type="text"></input></li>`)
        });
    });
    
    profilePageData
    .append(data)
    .append('<button id="edit" class="btn" disabled><i>Edit</i></button>')
    .append('<button id="save" class="btn hidden"><i>Save</i></button>')
    return profilePageData
}