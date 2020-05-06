
export const passwordStrength = (password) => {
    // judge password in scale 0-4, where 0 is unacceptable and 3 best
    let verdict = 1;

    if (password.length > 10) {
        verdict += 1
    }

    const numRegex = /\d+/g;
    if (numRegex.test(password)) {
        verdict += 1
    }

    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialCharacters.test(password)) {
        verdict += 1
    }

    if (password.length < 5) {
        verdict = 0
    }
    console.log(verdict)
    return verdict
}