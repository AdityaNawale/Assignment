import React from 'react'
// import { Link } from 'react-router-dom'

export default function cart({item,order,chanageQuantity}) {
  const totalCost = order.item.reduce((total,item)=>total+item.price*item.quantity,0)
  const total = totalCost + order.shipping_charges
  return (
    <div>
       <div className="container mb-5">
      <div className="d-flex flex-row align-items-start">
        <div className="col-8 d-flex flex-column m-2">
         {item.map(item=><div className="cart-item p-3">
            <div className="d-flex flex-row">
              <img
                className="col-2 img-fluid"
                src={`images/${item.image}.jpg`}
                alt=""
              />
              <div className="col-6 p-2">
                <h5>{item.name}</h5>
                <h6>{item.category}</h6>
                <h6> Quantity :{item.quantity}</h6>
                <p>₹{item.price}</p>
              </div>
              <div className="col-2 p-2">
                Quatity
                <select name="" id="" onChange={(e)=>chanageQuantity(e.target.value,item)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div data-bs-toggle="modal" data-bs-target="#removeItemModal"
                className="col-2 d-flex justify-content-end align-items-start close"
              >
                <i className="bi bi-x-circle"></i>
              </div>
            </div>
          </div> )}
        </div>
        <div className="col-4 order p-3 m-2">
          <h4>Order Total</h4>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Item Cost</span>
            <span className="billing-cost">₹{totalCost}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Extra Cheese</span>
            <span className="billing-cost">₹{order.shipping_charges}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item fs-5">Total</span>
            <span className="billing-cost fs-5">₹{total}</span>
          </div>

          <div className="d-flex mt-3">
              {/* <Link to="/checkout" className="btn btn-primary flex-grow-1">Pay Now</Link> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
