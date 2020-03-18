import $ from 'jquery';

export const booking = () => {
    const fragment = $(new DocumentFragment());
    fragment
        .append('<h3>Booking</h3>')
        .append('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil, praesentium odio repudiandae natus deserunt doloremque. Quidem, earum animi placeat nisi, provident alias, libero quasi quisquam facilis iure assumenda necessitatibus!</p>');

    return fragment;
};
