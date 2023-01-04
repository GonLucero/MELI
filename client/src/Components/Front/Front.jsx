import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../Header/Header'
import { Hero } from '../Hero/Hero'
import { Products } from '../Products/Products'
import { GetProductDetail } from "../../Actions";
import './Styles.css'


function Front() {
  const dispatch = useDispatch();
  // me traigo la info del videojuego
  const itemDetail = useSelector((store) => store.ProductDetail);
  console.log("id",itemDetail)
  // me traigo la id, que queda escrita en la url
  const {id} = useParams();


  useEffect(() => {
    dispatch(GetProductDetail(id)); // apenas entre a la pagina, mandame la info
  }, []); 


  return (
  
    itemDetail.length === 0 ? 
    <div>
    <p>Loading...</p>
    </div>

    :
    
    <div className='ContainerFront'>
    <Header/>
    <div className='WrapperFront'>
    <Hero/>
    <Products/>
    </div>
    </div>
    
  

  )
}


export default Front;