import $ from 'jquery';

export const treatments = () => {
    const fragment = $(new DocumentFragment());
    fragment
        .append('<h3>Treatments</h3>')
        .append(`<ul>
            <li>Treatment 1</li>
            <li>Treatment 2</li>
            <li>Treatment 3</li>
            <li>Treatment 4</li>
        </ul>`);

    return fragment;
};
