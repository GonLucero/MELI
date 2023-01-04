import React from 'react'
import { Header } from '../Header/Header'
import { Hero } from '../Hero/Hero'
import { Products } from '../Products/Products'
import './Styles.css'


export const Front = () => {
  return (
    <div className='ContainerFront'>
    <Header/>
    <div className='WrapperFront'>
    <Hero/>
    <Products/>
    </div>
    </div>
  )
}
