import React from 'react'

const Card = ({product}) => {
  return (
    <div className='card px-3 py-3 bg-light' key={product.id} style={{width: "18rem"}}>
      <div className="card-body">
        <img src={product.image} height="100px" alt="" />

        <h4 className='card-title text-truncate'>
            {product.title}
        </h4>

        <p className='card-text text-truncate text-sm-start'>
            {product.description}
        </p>
      </div>

      <button className="btn btn-outline-primary">Add To Cart</button>
    </div>
  )
}

export default Card
