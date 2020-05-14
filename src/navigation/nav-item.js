import $ from 'jquery';

export const navItem = (text, click) => {
    const navItem = $('<li class="nav-item"></li>');

    const anchor = $('<button class="btn trans"></button>').on('click', click).text(text);

    navItem.append(anchor);

    return navItem;
};

