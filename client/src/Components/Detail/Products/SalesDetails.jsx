import React from 'react'
import { useSelector } from "react-redux";
import './StylesSalesDetails.css'

export default function SalesDetails() {

  const itemDetail = useSelector((store) => store.ProductDetail);
  const condition = itemDetail.item.condition;
  const sold_quantity = itemDetail.item.sold_quantity;
  const title = itemDetail.item.title;
  const currency = itemDetail.item.price.currency;
  const amount = itemDetail.item.price.amount;
  return (
    <div className='ContainerSales'>
        <div className='State'>
            {condition === 'new' ? 'Nuevo' : 'Usado'} | {sold_quantity} vendidos
        </div>
        <div className='RowSales'>
            <h1>
            {title}
            </h1>
        </div>
          <div className='Price'>
            <p>{currency}</p> 
            <p className='NumberPrice'>{amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</p>            
          </div>
          <div className='ButtonCard'>
              <button className='solid'>Comprar</button>
          </div>
    </div>
  )
}
