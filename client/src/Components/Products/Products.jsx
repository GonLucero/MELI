import React from 'react'
import './Styles.css'
import { Venta } from './Venta'

export const Products = () => {
  return (
    <div className='ContainerProduct'>
      <div className='PanelProduct'>
       <div className='ColumnProduct'>
        <div className='GalleryProduct'>
          <img className='imgProduct' src='https://http2.mlstatic.com/D_NQ_NP_2X_976460-MLA45812290438_052021-F.webp'
          alt='product' />
        </div>
        <Info/>
        </div>
        <div className='ColumnProduct'>
          <Venta/>
        {/* <Garantia/> */}
        </div>

      </div>
    </div>
    
  )
}



const Info = () => {
  return (
    <div className='Description'>
      <h4>Descripción del Producto</h4>
      <p>
        <span>Auricular Inalambrico Bluetooth Compatible con cualquier dispositivo con Bluetooth con Control Táctil.</span>
        <br/><br/>
        <span>El nuevo modelo con Bluetooth 5.0 permite llamadas telefónicas Binaurales</span>

      </p>
    </div>
  )
}

