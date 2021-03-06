import $ from 'jquery';
import { profilePageData } from './profile-page-data';
import { cartSummary } from '../cart/cart-summary';
import { previousOrders } from './previous-orders';
import { Login } from '../login/login-cookie-handler';
import { routeChange } from '../router/route-change';



export const profilePage = (user) => {
    const profilePage = $('<section id="profile-page"></section>');
    profilePage
        .append(`<ul id="profile-nav" class="nav-list">
                    <li class="nav-item profile"><button id="button-profile-data" class="btn">Personal data</button></li>
                    <li class="nav-item profile"><button id="button-cart-summary" class="btn">Cart</button></li>
                    <li class="nav-item profile"><button id="button-previous-orders" class="btn">Previous orders</button></li>
                    <li class="nav-item profile"><button id="button-logout" class="btn">Logout</button></li>
                </ul>`)
        .append(profilePageData(user))
        .append(cartSummary())
        .append(previousOrders())
    $(profilePage).children('section').slice(1).addClass('hidden')
    // $(profilePage).children('section').addClass('hidden')


    $(profilePage).find('.nav-list').on('click', 'button', (event) => {
        const target = $(event.target);
        const id = target.attr('id').slice(7);
        $(profilePage).children('section').addClass('hidden')
        $('#profile-nav').find('button').removeClass('active')
        $('#' + id).removeClass('hidden')
        $('#button-' + id).addClass('active')
    })



    $(profilePage).on('click', '#button-logout', () => {
        const login = new Login();
        login.empty();
        profilePage.trigger(routeChange, { path: '/' })
        location.reload();
    });

    return profilePage
}