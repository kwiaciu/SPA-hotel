import $ from 'jquery';

export const navItem = (text, click) => {
    const navItem = $('<li class="nav-item"></li>');

    const anchor = $('<a class="btn btn-link"></a>').on('click', click).text(text);

    navItem.append(anchor);

    return navItem;
};