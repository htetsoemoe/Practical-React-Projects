import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import './styles.css'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Products />
      <Footer />
    </div>
  )
}

export default App
