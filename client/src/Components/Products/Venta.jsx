import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './StylesVenta.css'


export const Venta = () => {
  const itemDetail = useSelector((store) => store.ProductDetail);
  return (
    <div className='ContainerVenta'>
        <div className='Estado'>
            {itemDetail.item.condition === 'new' ? 'Nuevo' : 'Usado'} | {itemDetail.item.sold_quantity} vendidos
        </div>
        <div className='RowVenta'>
            <h1>
            {itemDetail.item.title}
            </h1>
        </div>
          <div className='Price'>
            <p>{itemDetail.item.price.currency}</p> 
            <p className='NumberPrice'>{itemDetail.item.price.amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</p>            
            </div>
          <div className='ButtonCard'>
              <button className='solid'>Comprar</button>
          </div>
    </div>
  )
}
