
export class Cart {

    constructor() {
        this.key = 'IT_SPA_CART';


    }

    cookie() {
        const cookies = document.cookie.split(';');
        const itSpaCookie = cookies.find(cookie => cookie.startsWith(this.key));
        
        return itSpaCookie;
    }

    exists() {
        return this.cookie() !== undefined;
    }

    getValue() {
        if (this.exists()) {
            const itSpaCookie = this.cookie();
            const cookieValue = itSpaCookie.split('=')[1];
            const parsedValue = JSON.parse(cookieValue);
            
            return parsedValue;

        } else {
            this.setValue([]);
        }
    }

    setValue(value) {
        const stringifiedValue = JSON.stringify(value);
        document.cookie = `${this.key}=${stringifiedValue}`;
        this.getValue();
    }


    // Cart structure cart = [{'id': '01', 'quantity':'6'},{{'id': '04', 'quantity':'1'}...]
    addToCart(value) {
        const currentCart = this.getValue();
        // console.log(value.id)
        // console.log(currentCart[1].id)
        const attendanceTest = (cartElement => value.id === cartElement.id)
        if (currentCart.some(attendanceTest)) {
            const i = currentCart.findIndex(attendanceTest)
            currentCart[i].quantity = parseInt(currentCart[i].quantity) + parseInt(value.quantity);
        } else {
            currentCart.push(value);
        }

        this.setValue(currentCart);
    }

    empty() {
        this.setValue([]);
    }
}