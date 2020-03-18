import $ from 'jquery';

export const contact = () => {
    const fragment = $(new DocumentFragment());
    fragment
        .append('<h3>Contact</h3>')
        .append(`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad, et temporibus iusto doloribus repudiandae sed? Molestias explicabo veritatis a laboriosam praesentium repellat totam, velit aperiam voluptatem, debitis ducimus pariatur?</p>
        <p>Odit obcaecati praesentium nesciunt voluptates ullam est, sed ab perferendis eum. Amet, cumque. Officiis amet qui tenetur cupiditate. Vitae doloremque quis dolore, eveniet alias magnam reprehenderit tempora dignissimos nam quasi.</p>
        <p>Eos architecto corrupti laboriosam animi aliquam minima quibusdam, numquam ducimus at dolorem atque quaerat nihil non vero ipsam, minus eveniet quis! Nisi placeat qui quos illum. Quas quo magnam hic.</p>`);

    return fragment;
};
