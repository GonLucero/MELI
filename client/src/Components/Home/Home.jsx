import React from 'react';
import './Styles.css';
import Header from '../Header/Header';

export default function Home(){
    const url = 'https://github.com/GonLucero'

    return (
          <div>
            <div>
            <Header/>
            </div>
            <img className='ImgHome' src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/exhibitors/fallbacks/es-desktop.jpg"
                alt='logo'
            />
            <div className="TextHome">
                    <a href={url}>Developed by Gonzalo Lucero</a>  
                <h2>2023</h2>
            </div>
          </div>
      )
}
   

    

