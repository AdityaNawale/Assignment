import { Link } from 'react-router-dom'

import React from 'react'

export default function Navbar({cartCount}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Pizaa Factory</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
           </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/#products">Veg Pizza</Link></li>
                  <li><Link className="dropdown-item" to="/#products">Nonveg Pizza</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" tabIndex="-1">
                  Cart<i className="bi bi-cart-plus-fill"></i> 
                  <span className="cart-badge badge bg-success">{cartCount}</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
