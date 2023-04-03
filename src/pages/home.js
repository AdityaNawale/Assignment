import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';

import {ADD_TO_CART} from '../Action/index';




const Home =()=>{

  const dispatch = useDispatch();
  const products = useSelector(state=>state.product.products)
  const cartItems = useSelector(state=>state.cart.item)

  const addToCart =(product)=>{
    dispatch({type:ADD_TO_CART,payload:product})
  }

  return (
    <div>
     <Navbar cartCount={cartItems.length}/>
     
     <ProductList products={products} addToCart={addToCart}/>
    
    </div>
  );
}

export default Home;