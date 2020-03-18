
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
    }

    empty() {
        this.setValue([]);
    }
}