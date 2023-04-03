import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';

import Cart from '../components/cart';
import { } from '../Action/index';
import { useEffect } from 'react';
import {CHANGE_ORDER_CART,CHANGE_QUANTITY} from '../Action/index';




const Home =()=>{

  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cart.item)
  const order = useSelector(state=>state.order)

  useEffect(()=>
  {
      dispatch({type:CHANGE_ORDER_CART,payload:cartItems})
  },[cartItems,dispatch])

  const chanageQuantity = (quantity,item) =>
  {
    dispatch({type:CHANGE_QUANTITY,payload:{...item,quantity:quantity}})
  }


  return (
    <div>
     <Navbar cartCount={cartItems.length}/>
     <Cart item={cartItems} order={order} chanageQuantity={chanageQuantity}/>
    
    </div>
  );
}

export default Home;