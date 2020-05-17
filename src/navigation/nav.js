import $ from 'jquery';
import { navItem } from './nav-item';
import { routeChange } from '../router/route-change';
import { routes } from '../router/routes'

export const nav = () => {
    const navbar = $(`
    <nav class="navbar">
        <span class="nav-logo">Lunaria Hotel & Spa</span>
        <span id="hamburger" class="icon btn trans"><i class="material-icons">menu</i></span>
        <ul class="nav-list" style="display: none"></ul>
    </nav>
    `);

    routes.map((route) => {
        const newNavItem = navItem(route.name, () => navbar.trigger(routeChange, { path: route.path }))
        navbar.find('ul').append(newNavItem);
    })

    $(navbar).on('click', '#hamburger', function () {
        if ($('.navbar .nav-list').css('display') == 'none') {
            $('.navbar .nav-list').slideDown(500, 'swing')
        } else {
            $('.navbar .nav-list').slideUp(500, 'swing')
        }

    })

    $(navbar).on('click', '.nav-logo', function () {
        navbar.trigger(routeChange, { path: '/' })
    })

    $(document).on('routechange', function () {
        setTimeout(function () {
            $('.navbar .nav-list').slideUp(500, 'swing')
        }, 500)
    })


    return navbar;
};