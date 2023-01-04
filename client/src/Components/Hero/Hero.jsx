import React from 'react'
import { useSelector } from "react-redux";
import './Styles.css'

export const Hero = () => {
  const itemDetail = useSelector((store) => store.ProductDetail);
  const renderList = itemDetail.categories.AllCategories.map((item, index) => 
                             <a className='click' href='#' id={index}>{item}</a>
                           );
  return (
    <div className='ContainerHero'>
      <div className='RowHero'>
        <a className='back' href='#'>Volver al Listado</a>
          {renderList}
                </div>
      {/* (
        {
          itemDetail.cate.map((v)=>{
            <a className='click' href='#'>hola</a>
          }

          )
        }
      ) */}


      <div className='RowHero'>
        <a className='click' href='#'>Compartir</a>
        <a className='click' href='#'>Vender uno igual</a>
      </div>
    </div>
  )
}
