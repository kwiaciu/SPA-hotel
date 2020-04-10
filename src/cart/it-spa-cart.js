import { Cart } from './cart';

export const itSpaCart = () => {
    const cart = new Cart();
    console.log('it works');
    //jak się dowiedzieć że nastąpiła zmiana w cookies
    document.addEventListener('click', event => {
        console.log(event);

        // jeśli zaistniała zmiana w cookies, ponownie pobieram zawartość kosza
        const newContent = cart.getValue(); 
        setTimeout(()=> console.log(cart.getValue()),1000)
        // i poprawiam wyświetlane przez kosz informacje
        //TODO
    });

    return cart;
}