import React from 'react';
import  ResultsListItem  from '../ResultListItem/ResultListItem';
import './Styles.css';

export default function ResultList({ items = [] }){

    const list = items.map((i, index) => {
        return (
            <div key={index} className='item'>
                <ResultsListItem data={i} />
                <div className='Separation'></div>
            </div>
            
        );
    });
    
    return (
        <div>
           {
                list.length ? 

                <div className="meli-results-list">
                    <div className="meli-grid meli-child-width-1-1">
                        {list}
                    </div>
                </div>

                :

                <div className="ContainerFailed">
                    <img className='ImgFailed' src="https://static.vecteezy.com/system/resources/previews/004/968/456/original/magnifying-glass-with-cross-mark-search-no-result-found-concept-illustration-flat-design-eps10-simple-modern-graphic-element-for-landing-page-empty-state-ui-infographic-vector.jpg"
                    alt='logo'
                    />
                    <div className="TextFailed">
                        <h1>No hay publicaciones que coincidan con tu búsqueda.</h1>
                        <ul>
                            <li>Revisá la ortografía de la palabra.</li>
                            <li>Utilizá palabras más genéricas o menos palabras.</li>
                        </ul>
                    </div>
                </div>
           } 
        </div>
    )
    

}

