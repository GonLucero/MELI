import React, { useState } from 'react'
import './Styles.css'
import { useNavigate } from 'react-router-dom'
import ic_search from './ic_Search.png';

export const Header = () => {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( e ) => {
      setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ( inputValue.trim().length > 2 ) {
        navigate(`/items/${inputValue}`);
        navigate(0);
    }
}

  return (
    <div className='ContainerHeader'>
      <div className='WrapperHeader'>
        <img className='img' src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.16/mercadolibre/logo__large_plus@2x.png"
        alt='logo'
        />
        <form onSubmit={ handleSubmit }>
        <div className='SearchContainer'>
            <input 
                type="text" 
                value={ inputValue } 
                onChange={ handleInputChange } 
                placeholder="Nunca dejes de buscar"
                className="SearchbarInput"
            />
            <div className='Separator'></div>
            <button className="SearchButton" type="submit"></button>
            </div>
        </form>
      </div>
    </div>
  )
}
