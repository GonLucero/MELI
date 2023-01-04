import React from 'react'
import './StylesVenta.css'

export const Venta = () => {
  return (
    <div className='ContainerVenta'>
        <div className='Estado'>
            Nuevo | 1246 vendidos
        </div>
        <div className='RowVenta'>
            <h1>
            Auriculares Inalámbricos Bluetooth 5.0 Y30 Tws Táctiles
            </h1>
        </div>
          <div className='Price'>
            <p>$</p> 
            <p className='NumberPrice'>2.499</p>            
            </div>
          <div className='ButtonCard'>
              <button className='solid'>Comprar</button>
          </div>
    </div>
  )
}
