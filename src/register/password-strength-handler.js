import $ from 'jquery';
import { passwordStrength } from './password-strength';

export const passwordStrengthHandler = (page) => {
    $(page).on('change', '#password-input', () => {
        $('#part1').removeClass('green yellow red')
        $('#part2').removeClass('green yellow red')
        $('#part3').removeClass('green yellow red')
        $('#part4').removeClass('green yellow red')
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
            $('#comment').text('You can do better than this')
        } else {
            $('#part1').addClass('red')
            $('#comment').text("Just don't")
        }
    })
}
