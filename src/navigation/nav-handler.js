import $ from 'jquery';

export const navHandler = () => {
    // $('.nav-list').hide();
    $(document).on({
        mouseenter: function () { $('.nav-list').slideDown() },
        mouseleave: function () { $('.nav-list').slideUp() },
      }, (".navbar"));
}