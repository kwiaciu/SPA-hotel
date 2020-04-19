import $ from 'jquery';
import { routes } from './routes';
import { oops } from '../views';
import { routeChange } from './route-change';


export class Router {

    constructor() {
        this.body = $(document.body);
        this.outlet = $('main');
        this.routes = routes;
    }

    mount(outlet) {
        this.outlet = outlet;

        // detail to np. { path: '/booking' } -> sprawdz nav.js
        this.body.on(routeChange, (event, detail) => {
            this.navigate(detail.path);
        });
    }

    init() {
        this.navigate(location.pathname);
    }

    get(path) {
        return this.routes.find(route => route.path === path);
    }

    has(path) {
        return this.get(path) !== undefined;
    }

    navigate(path, data = {}) {
        if (this.has(path)) {

            //  np  { path: '/booking', data: {}, component: booking }
            const { component } = this.get(path);
            
            // component = np. home, booking
            this.outlet.empty().append(component());


        } else {

            this.outlet.empty().append(oops());
        }
        //pushujemy do historii przeglądarki informację o odwiedzanej ścieżce
        history.pushState(data, '', path);

    }

}