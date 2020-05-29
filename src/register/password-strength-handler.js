import $ from 'jquery';
import { passwordStrength } from './password-strength';

export const passwordStrengthHandler = (page) => {

    $(page).on('change', 'input[type=password]', (e) => {
        $('input[type=password]').removeClass('different-inputs');
        $('#different-passwords').remove();
        const pass = $('#password-input').val()
        const confirm = $('#confirm-password-input').val()

        if (pass !== confirm && confirm) {
            $(e.target).addClass('different-inputs');
            $(e.target).after('<p id="different-passwords" style="color:red">Passwords are not the same</p>')
        }
    })


    $(page).on('change', '#password-input', () => {
        $('#part1').removeClass('green yellow red')
        $('#part2').removeClass('green yellow red')
        $('#part3').removeClass('green yellow red')
        $('#part4').removeClass('green yellow red')
        $('#register-form').find('button[type=submit]').prop('disabled', false);
        $('input[type=password]').removeClass('wrong-input');

        const val = $('#password-input').val()
        const verdict = passwordStrength(val)
        $('#judgement').removeClass('hidden')
        if (verdict == 4) {
            $('#part1').addClass('green')
            $('#part2').addClass('green')
            $('#part3').addClass('green')
            $('#part4').addClass('green')
            $('#comment').text('Great password!')
        } else if (verdict == 3) {
            $('#part1').addClass('green')
            $('#part2').addClass('green')
            $('#part3').addClass('green')
            $('#comment').text('Good password')
        } else if (verdict == 2) {
            $('#part1').addClass('yellow')
            $('#part2').addClass('yellow')
            $('#comment').text('Password acceptable but not safe')
        } else {
            $('#part1').addClass('red')
            $('#comment').text("Password too weak")
            $('#register-form').find('button[type=submit]').prop('disabled', true);
            $('input[type=password]').addClass('wrong-input')
        }
    })

}
