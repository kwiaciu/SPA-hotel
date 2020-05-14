import $ from 'jquery';
import { routes } from './routes';
import { oops } from '../common/oops';
import { routeChange } from './route-change';
import { Login } from '../login/login-cookie-handler';


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

    navigate(path, historyPush = true, data = {}) {
        if (this.has(path)) {
            const { component } = this.get(path);

            if (path === '/profile' && !(new Login().isNotEmpty())) {
                this.outlet.append(component());

            } else {
                if (historyPush === true) {
                    history.pushState(data, '', path);
                }

                this.outlet.empty().append(component());
            }
        } else {
            this.outlet.empty().append(oops());
        }
        //pushujemy do historii przeglądarki informację o odwiedzanej ścieżce

    }
}