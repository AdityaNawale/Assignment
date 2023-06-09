import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import Home from './pages/home';
import CartPage from './pages/cartPage'
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {cartReducer, orderReducer, productReducer} from './Reducers/index'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const store = configureStore(
  {reducer:{
      product:productReducer,
      cart:cartReducer,
      order:orderReducer
  }}
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<CartPage/>} />
       
        {/* // <Route path="myorders" element={<OrdersPage />} />
        // <Route path="login" element={<LoginSignupPage />} />
        // <Route path="ordersuccess/:orderid" element={<OrderSuccessPage />} />
        // <Route path="product/:productId" element={<ProductDetailsPage />} />
        // <Route path="*" element={<NoPage />} /> */} 
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
