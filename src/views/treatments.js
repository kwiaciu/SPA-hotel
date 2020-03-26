import $ from 'jquery';
import { treatmentsList } from './treatments-list';

export const treatments = () => {
    const fragment = $(new DocumentFragment());
    fragment
        .append('<h3>Treatments</h3>')
        .append(treatmentsList());

    return fragment;
};
