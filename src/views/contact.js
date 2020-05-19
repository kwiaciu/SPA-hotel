import $ from 'jquery';

export const contact = () => {
    const fragment = $(`<div id="contact"></div>`);

    const section = $('<section ></section>');

    const contact = $(`
    <div class="contact">
        <h3>Informations</h3>
        <ul>
            <li><b>Phone Number:</b><p>954-216-0059</p></li>
            <li><b>Mobile Number:</b><p>561-287-7093</p></li>
            <li><b>E-mail address:</b><p>info@lunaria.spa.com</p></li>
        </ul>
    </div>`)
    const address = $(`
        <address class="address">
        <h3>Address</h3>
            <ul>
                <li><b>Street:</b><p>1894 Sycamore Fork Road</p></li>
                <li><b>City:</b><p>Boca Raton</p></li>
                <li><b>Zip Code:</b><p>33486</p></li>
            </ul>
        </address>`)

    section
        .append('<h2>Contact</h2>')
        .append(contact, address)

    fragment.append(section)

    return fragment;
};


