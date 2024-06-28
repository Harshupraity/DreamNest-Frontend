import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Slide from '../components/Slide.jsx'
import Categories from '../components/categories.jsx'
import Listings from "../components/Listings.jsx"
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Slide/>
      <Categories/>
      <Listings/>
    </div>
  )
}

export default HomePage