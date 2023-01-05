import React, { useState } from 'react'
import './Styles.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Reset } from '../../Actions';
import { useDispatch } from "react-redux";

export default function Header(){
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const url = `/`;

  const handleInputChange = ( e ) => {
      setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ( inputValue.trim().length > 2 ) {
        navigate(`/items?search=${inputValue}`);
        navigate(0);
    }
}

const GoHome = () => {
  <Link to={url}></Link> 
  dispatch(Reset())
}

  return (
    <div className='ContainerHeader'>
      <div className='WrapperHeader'>
      <Link to={url}>
        <img onClick={() => GoHome()} className='img' src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.16/mercadolibre/logo__large_plus@2x.png"
        alt='logo'
        />
      </Link> 
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
