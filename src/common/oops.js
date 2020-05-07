import $ from 'jquery';

export const oops = () => {
    const fragment = $('<section></section>');
    fragment
        .append('<h2>Wrong page</h2>')
        .append(`<p>Page you are trying to access does not exist</p>
                <p><a href='./'>Click here</a> to go back to main page</p>`);

    return fragment;
};
