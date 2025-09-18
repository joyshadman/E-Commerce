import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Today from '../components/Today'
import Categories from '../components/categories'



const Home = () => {
  return (

    <div>
      
      <Navbar />
      <Hero />
      <Today />
      <Categories />

    </div>
  
    
  )
}

export default Home