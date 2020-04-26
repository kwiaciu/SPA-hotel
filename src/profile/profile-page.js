import $ from 'jquery';
import { profilePageData } from './profile-page-data';
import { cartSummary } from '../cart/cart-summary';
import { previousOrders } from './previous-orders';


export const profilePage = (user) => {
    const profilePage = $('<section></section>');
    profilePage
        .append(`<ul id="profile-nav" class="nav-list">
                    <li class="nav-item profile"><button id="button-profile-data" class="btn">Personal data</button></li>
                    <li class="nav-item profile"><button id="button-cart-summary" class="btn">Cart</button></li>
                    <li class="nav-item profile"><button id="button-previous-orders" class="btn">Previous orders</button></li>
                </ul>`)
        .append(profilePageData(user))
        .append(cartSummary)
        .append(previousOrders)

        $(profilePage).find('ul').on('click', 'button', (event) => {
            const target = $(event.target);
            const id = target.attr('id').slice(7);
            console.log(id)
            $(profilePage).children('section').addClass('hidden')
            $('#'+id).removeClass('hidden')
        })

    return profilePage
}