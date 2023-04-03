import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductList({products,addToCart}) {
  return (
    <div>
       

       <div className="container mb-5">
          <div id="products" className="row">

            {products.map(product =><div className="col-xl-3 col-lg-4 col-md-6 position-relative">
              
                <div className="card product-item">
               
                  <img src={`images/${product.image}.jpg`} onClick="goToProductDetails()" className="card-img-top" alt="..." data-bs-toggle="tooltip" data-bs-placement="top" title="Click to See Product Details"/>
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted  fw-light">{product.category}</h6>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text price"> ₹{product.price} </p>
                    <div className="text-center">
                      <Link className="btn btn-dark w-100" onClick={()=>addToCart(product)} role="button" > Add To Cart</Link>
                    </div>
                  </div>
                </div>
            </div> )}
              
          </div>
    </div>

    </div>
  )
}
