
// perhaps it would be better to make class cookies and then subclass login and cart, since they share most of the methods

export class Login {
    constructor() {
        this.key = 'IT_SPA_LOGIN';
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


    // INPUT VALUE IS OBJECT
    setValue(value) {
        const stringifiedValue = JSON.stringify(value);
        document.cookie = `${this.key}=${stringifiedValue}`;
        console.log(`${this.key}=${stringifiedValue}`)
    }

    empty() {
        this.setValue([]);
    }

    isNotEmpty() {
        return JSON.stringify(this.getValue()) !== JSON.stringify([]);
    }

}