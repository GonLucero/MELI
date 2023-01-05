import React from 'react'
import { useSelector } from "react-redux";
import './Styles.css'

export default function Hero(props) {

  const itemDetail = useSelector((store) => store.ProductDetail);
  const Search = useSelector((store) => store.SearchProduct);

  if(props.props === false ) {
    var renderList = itemDetail?.categories.AllCategories.map((item, index) => 
     <a className='click' href="/#" key={index}>{item}</a>
    );
  }else{
    var renderList2 = Search?.categories.map((item, index) => 
     <a className='click' href="/#" key={index}>{item}</a>
    );
  }
  
  return (
    <div className='ContainerHero'>
      <div className='RowHero'>
        <a className='back' href="/#">Volver al Listado</a>
          { props.props === false ? renderList : renderList2}
      </div>

      <div className='RowHero'>
        <a className='click' href="/#">Compartir</a>
        <a className='click' href="/#">Vender uno igual</a>
      </div>
    </div>
  )
}
