import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './Styles.css'
import { Venta } from './Venta'

export const Products = () => {
  const itemDetail = useSelector((store) => store.ProductDetail);
  console.log("item",itemDetail)
  return (
    <div className='ContainerProduct'>
      <div className='PanelProduct'>
       <div className='ColumnProduct'>
        <div className='GalleryProduct'>
          <img className='imgProduct' src={itemDetail.item.picture}
          alt='product' />
        </div>
          <Info/>
        </div>
        <div className='ColumnProduct'>
          <Venta/>
        </div>

      </div>
    </div>
    
  )
}

const Info = () => {
  const itemDetail = useSelector((store) => store.ProductDetail);
  return (
    <div className='Description'>
      <h4>Descripción del Producto</h4>
      <p>
      <div dangerouslySetInnerHTML={{ __html: itemDetail.item.description.replace(/(\r\n|\n|\r)/gm, "<br>") }} />      </p>
    </div>
  )
}

