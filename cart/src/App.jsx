import React, { useEffect, useState } from 'react'
import './app.css'
import Card from './components/Card' 

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const api = await fetch('https://fakestoreapi.com/products');
    const data = await api.json();
    setProducts(data);
    console.log(data);
  }

  return (
    <div className='container-fluid bg-secondary'>
      <div className="d-flex flex-wrap justify-content-center gap-3 py-3">
        {
          products.map(product => {
            return (
              <Card key={product.id} product={product}/>
            )
          })
        }
        
        
      </div>
    </div>
  )
}

export default App
