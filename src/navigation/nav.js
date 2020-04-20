import $ from 'jquery';
import { navItem } from './nav-item';
import { routeChange } from '../router/route-change';
import { routes } from '../router/routes'
import { navHandler } from './nav-handler';
 
export const nav = () => {
    const navbar = $(`
    <nav class="navbar">
        <span class="nav-logo">Lunaria Hotel & Spa</span>
        <ul class="nav-list"></ul>
    </nav>
    `);

    // nav item spodziewa się funkcji która będzie wywołana przy kilknięciu
    // const bookingNavItem = navItem("Booking",() => navbar.trigger(routeChange, { path: '/booking' }));
    // navbar.find('ul').append(bookingNavItem);


    const navItems = routes.map((route) => {
        const newNavItem = navItem(route.name, () => navbar.trigger(routeChange, { path: route.path }))
        navbar.find('ul').append(newNavItem);
    })
    
 
    navHandler();

    return navbar;
};