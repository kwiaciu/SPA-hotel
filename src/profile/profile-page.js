import $ from 'jquery';
import { profilePageData } from './profile-page-data';
import { cartSummary } from '../cart/cart-summary';
import { previousOrders } from './previous-orders';


export const profilePage = (user) => {
    const profilePage = $(new DocumentFragment());
    profilePage
    .append(`<ul id="profile-nav">
    <li class="profile">Personal data</li>
    <li class="profile">Cart</li>
    <li class="profile">Previous orders</li>
    </ul>`)
    .append(profilePageData(user))
    .append(cartSummary)
    .append(previousOrders)
    

    return profilePage
}