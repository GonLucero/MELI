import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Products from './Products/Products'
import { GetProductDetail } from "../../Actions";
import './Styles.css'


function Front() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loadingDetail);
  const {id} = useParams();


  useEffect(() => {
    dispatch(GetProductDetail(id)); 
  }, [dispatch, id]); 


  return (
  
      loading === true ? 
      <div>
        <Header/>
      </div>

      :
      
      <div>
        <div>
          <Header/>
        </div>
        <div className='WrapperFront'>
          <Hero props={false} />
          <Products/>
        </div>
      </div>
    
  )
}


export default Front;