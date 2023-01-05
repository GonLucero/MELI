import React from 'react';
import { Link } from 'react-router-dom';
import "./Styles.css";


export default function ResultsListItem({data}){
    const url = `/items/${data.id}`;
    const symbol = data.price.currency ;
    const price = data.price.amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    const adress = data.adress

    return (
            <div className="Container">
                <div>
                    <Link to={url} className='ContainerImg'>
                        <img src={data.picture} alt={data.title}  className="Img" />
                    </Link>
                </div>
                <div>
                    <h2 className='TitleContainer'>
                        <Link to={url} className='Title'>{data.title}</Link>
                    </h2>
                    <div className="mali-item-price-wrapper">
                        <div className="Price2">{symbol} {price}</div>
                    </div>
                </div>
                <div className="mali-item-price-wrapper">
                        <div className="Adress">{adress}</div>
                </div>
            </div>
            
    )
}
