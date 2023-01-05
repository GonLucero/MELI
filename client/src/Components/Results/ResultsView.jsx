import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  Header  from '../Header/Header'
import  Hero  from '../Hero/Hero'
import ResultList from "./ResultList/ResultList";
import { SearchProducts } from "../../Actions";
import './Styles.css'

const useQuery = () => {
     return new URLSearchParams(useLocation().search);
}

export default function ResultsView() {
  const dispatch = useDispatch();
  let query = useQuery();
  const searchQuery = query.get('search');
  const itemDetail = useSelector((store) => store.SearchProduct);
  const loading = useSelector((store) => store.loadingSearch);

  useEffect(() => {
    dispatch(SearchProducts(searchQuery)); // apenas entre a la pagina, mandame la info
  }, []); 


  return (
    loading === true ? 
      <div className='Navbar2'>
      <Header/>
      </div>
    :
      <div>
        <Header/>
        <div className='WrapperFront'>
           <Hero props={true}/>
        </div>
        <div className='ListFront'>
          <ResultList search={searchQuery} items={itemDetail.items} />
        </div>
      </div>
  )
}


