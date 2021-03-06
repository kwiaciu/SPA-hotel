import $ from 'jquery';
import { treatmentsList } from './treatments-list';

export const treatments = () => {
    const fragment = $('<section id="treatments"></section>');
    fragment
        .append('<h2>Treatments</h2>')
        .append(treatmentsList());

    return fragment;
};
