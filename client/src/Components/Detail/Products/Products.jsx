import React from 'react'
import { useSelector } from "react-redux";
import './Styles.css'
import SalesDetails from './SalesDetails';

export default function Products() {

  const itemDetail = useSelector((store) => store.ProductDetail);
  const picture = itemDetail.item.picture;
  return (
    <div className='ContainerProduct'>
      <div className='PanelProduct'>
       <div className='ColumnProduct'>
        <div className='GalleryProduct'>
          <img className='imgProduct' src={picture}
          alt='product' />
        </div>
          <Info/>
        </div>
        <div className='ColumnProduct'>
          <SalesDetails/>
        </div>
      </div>
    </div>
    
  )
}

const Info = () => {

  const itemDetail = useSelector((store) => store.ProductDetail);
  const description = itemDetail.item.description;
  return (
    <div className='Description'>
        <h4>Descripción del Producto</h4>
        <p>
        <div dangerouslySetInnerHTML={{ __html: description.replace(/(\r\n|\n|\r)/gm, "<br>") }} /></p>
    </div>
  )
}

