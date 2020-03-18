import { Cart } from './cart';

export const itSpaCart = () => {
    const cart = new Cart();
    //jak się dowiedzieć że nastąpiła zmiana w cookies
    cookieStore.addEventListener('change', event => {
        console.log(event);

        // jeśli zaistniała zmiana w cookies, ponownie pobieram zawartość kosza
        const newContent = cart.getValue(); 

        // i poprawiam wyświetlane przez kosz informacje
        //TODO
    });

    return cart;
}