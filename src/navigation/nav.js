import $ from 'jquery';
import { navItem } from './nav-item';
import { routeChange } from '../router/route-change';
import { routes } from '../router/routes'
 
export const nav = () => {
    const navbar = $(`
    <nav class="navbar navbar-expand">
        <span class="navbar-brand">IT SPA</span>
        <ul class="navbar-nav mr-auto"></ul>
    </nav>
    `);

    // nav item spodziewa się funkcji która będzie wywołana przy kilknięciu
    // const bookingNavItem = navItem("Booking",() => navbar.trigger(routeChange, { path: '/booking' }));
    // navbar.find('ul').append(bookingNavItem);


    const navItems = routes.map((route) => {
        const newNavItem = navItem(route.name, () => navbar.trigger(routeChange, { path: route.path }))
        navbar.find('ul').append(newNavItem);
    })
    // console.log(navItems);


    return navbar;
};