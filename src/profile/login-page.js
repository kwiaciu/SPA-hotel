import $ from 'jquery';

export const loginPage = () => {
    const loginPage = $('<div id="login-page"></div>');
    const loginForm = $('<form action="" id="login-form"></form>');
    loginForm
        .append('<label for="login-input">Login</label>')
        .append('<input type="text" id="login-input">')
        .append('<label for="password-input">Password</label>')
        .append('<input type="password" id="password-input">')
        .append('<input type="submit"></input>');

    
    loginPage.append(loginForm);
    loginPage.append('<p class="register">Or click <a id="link-register" href="javascript:;">here</a> to register new account</p>');


    return loginPage
}