// Cart structure cart "IT_SPA_CART = [{'id': '01', 'quantity':'6'},{{'id': '04', 'quantity':'1'}]"

export class Cart {

    constructor() {
        this.key = 'IT_SPA_CART';
    }

    cookie() {
        const cookies = document.cookie.split('; ');
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

    // INPUT VALUE IS ARRAY OF OBJECTS
    setValue(value) {
        const stringifiedValue = JSON.stringify(value);
        document.cookie = `${this.key}=${stringifiedValue}`;
        document.dispatchEvent(new Event('custom'));
        console.log(document.cookie)
        // alert('coooooooooooookie!!!!!11')
    }

    // INPUT VALUE IS OBJECT {id: 123, quantity: 123}
    addToCart(value) {
        const currentCart = this.getValue();
        const attendanceTest = (cartElement => value.id === cartElement.id)
        let response = ''
        if (currentCart.some(attendanceTest)) {
            const i = currentCart.findIndex(attendanceTest)
            currentCart[i].quantity = parseInt(currentCart[i].quantity) + parseInt(value.quantity);
            response = 'Added another treatment of the same type'
        } else {
            currentCart.push(value);
            response = 'Treatment added to cart';
        }
        this.setValue(currentCart);
        return (response)

    }

    // INPUT VALUE IS OBJECT {id: 123, quantity: 123, dates: ['','']}
    addRoom(value) {
        const currentCart = this.getValue();
        const attendanceTest = (cartElement => value.id === cartElement.id)
        let response = ''
        if (currentCart.some(attendanceTest)) {
            const i = currentCart.findIndex(attendanceTest)
            response = 'Room is already in cart';
        } else {
            currentCart.push(value);
            response = 'Added to cart'
        }
        this.setValue(currentCart);
        return response
    }

    // INPUT VALUE IS OBJECT
    removeFromCart(value) {
        const currentCart = this.getValue();
        let newCart = [...currentCart];
        const attendanceTest = (cartElement => value.id === cartElement.id)
        if (newCart.some(attendanceTest)) {
            newCart = newCart.filter((element => element.id !== value.id))
        }
        this.setValue(newCart);
    }

    empty() {
        this.setValue([]);
    }

    isNotEmpty() {
        return JSON.stringify(this.getValue()) !== JSON.stringify([]);
    }

}