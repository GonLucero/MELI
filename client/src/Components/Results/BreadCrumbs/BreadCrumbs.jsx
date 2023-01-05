import React from 'react';

import "./Styles.css";

export default function BreadCrumbs({ items = [] }){

    const list = items.map( (item, i, a) => {
        const active = i === a.length - 1;
        const classes = active ? 'meli-active' : '';

        return (
            <li key={i} className={classes} itemProp="itemListElement" itemType="http://schema.org/ListItem" itemScope="">
                 <a href="/" onClick={e => e.preventDefault()}>
                    {item}
                </a>
            </li>
        );
    });

    return (
        <section className="meli-breadcrumbs">
            <ol className="meli-breadcrumbs-nav" itemType="http://schema.org/BreadcrumbList" itemScope="">
                {list}
            </ol>
        </section>
    );
}

