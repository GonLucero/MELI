import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from "react-redux";
import './Styles.css';
import  Header  from "../Header/Header";
import  Breadcrumbs  from "./BreadCrumbs/BreadCrumbs";
import  ResultsList   from "./ResultList/ResultList";
import { SearchProducts } from "../../Actions/index"
import Hero from "../Hero/Hero";
// import { useFetchResults } from '../../hooks/useFetchApi';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

export default function ResultView(){
    const dispatch = useDispatch();
    let query = useQuery();

    const searchQuery = query.get('search');

    const itemDetail = useSelector((store) => store.SearchProduct);
    const loading = useSelector((store) => store.loadingSearch);
    
    // const { data, loading } = useFetchResults( searchQuery );
    const loading_class = loading ? 'meli-content-loading meli-container' : 'meli-container';

    const meta_description = `Encontrá ${searchQuery} en MercadoLibre.com.uy! Entrá y conocé nuestras increíbles ofertas y promociones. Descubrí la mejor forma de comprar online.`;

    useEffect(() => {
        dispatch(SearchProducts(searchQuery)); // apenas entre a la pagina, mandame la info
      }, []); 


    return (
        <main className="meli-page-results">
            <Header />
            <div className={loading_class}>
                <Hero/>
                {/* <Breadcrumbs items={itemDetail.categories} /> */}
                <ResultsList search={searchQuery} items={itemDetail.items} />
            </div>
            <HelmetProvider>
            <Helmet>
                <title>{searchQuery} | Mercado libre</title>
                <meta name="description" content={meta_description} />
            </Helmet>
            </HelmetProvider>
        </main>
    );
}
