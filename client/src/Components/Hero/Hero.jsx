import React from 'react'
import './Styles.css'

export const Hero = () => {
  return (
    <div className='ContainerHero'>
      <div className='RowHero'>
        <a className='back' href='#'>Volver al Listado</a>
        <a className='click' href='#'>Electrónica,Audio y Video</a>
        <a className='click' href='#'>Audio</a>
        <a className='click' href='#'>Auriculares</a>
      </div>
      <div className='RowHero'>
        <a className='click' href='#'>Compartir</a>
        <a className='click' href='#'>Vender uno igual</a>
      </div>
    </div>
  )
}
