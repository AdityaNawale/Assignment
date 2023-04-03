import { ADD_TO_CART,CHANGE_ORDER_CART,CHANGE_QUANTITY} from "../Action";
const initialStateProduct = {products :[
  {
    id:1,
    name: "Deluxe Veggie",
    varients: ["Small", "Medium", "Large"],
    price:150,
    prices: [
      {
        Small: 150,
        Medium: 200,
        Large: 325,
      },
    ],
    category: "Veg",
    image: "pizza1",
    description: "Pepper Barbecue Chicken I Cheese",
    nonvegname:[ "Black Olive","Capsicum","Mushroom" ,"Fresh Tomato","Panner"],
    nonvegprice: [20,25,30,10,35],
  },
  {
    id:2,
    name: "Cheese and Corn",
    varients: ["Small", "Medium", "Large"],
    price:175,
    prices: [
      {
        Small: 175,
        Medium: 375,
        Large: 475,
      },
    ],
    category: "Veg",
    image: "pizza2",
    description: "Pepper Barbecue Chicken I Cheese",
    nonvegname:[ "Black Olive","Capsicum","Mushroom" ,"Fresh Tomato","Panner"],
    nonvegprice: [20,25,30,10,35],
  },
  {
    id:3,
    name: "Paneer Tikka",
    varients: ["Small", "Medium", "Large"],
    price:160,

    prices: [
      {
        Small: 160,
        Medium: 290,
        Large: 340,
      },
    ],
    category: "Veg",
    image: "pizza3",
    description: "Pepper Barbecue Chicken I Cheese",
    nonvegname:[ "Black Olive","Capsicum","Mushroom" ,"Fresh Tomato","Panner"],
    nonvegprice: [20,25,30,10,35],
  },
  {
    id:4,
    name: "Non-Veg Supreme",
    varients: ["Small", "Medium", "Large"],
    price:190,
    prices: [
      {
        Small: 190,
        Medium: 325,
        Large: 425,
      },
    ],
    category: "Nonveg",
    image: "pizza4",
    description: "Pepper Barbecue Chicken I Cheese",
    nonvegname:[ "Black Olive","Capsicum","Mushroom" ,"Fresh Tomato" ,"Chicken tikka" , "Barbeque chicken" , "Grilled chicken"],
    nonvegprice: [20,25,30,10,35,45,40],
  },
  {
    id:5,
    name: "Chicken Tikka",
    varients: ["Small", "Medium", "Large"],
    price:210,
    prices: [
      {
        Small: 210,
        Medium: 370,
        Large: 500,
      },
    ],
    category: "Nonveg",
    image: "pizza5",
    description: "Pepper Barbecue Chicken I Cheese",
    nonvegname:[ "Black Olive","Capsicum","Mushroom" ,"Fresh Tomato" ,"Chicken tikka" , "Barbeque chicken" , "Grilled chicken"],
    nonvegprice: [20,25,30,10,35,45,40],
   
  },
  {
    id:6,
    name: "Barbecue Chicken",
    varients: ["Small", "Medium", "Large"],
    price:220,
    prices: [
      {
        Small: 220,
        Medium: 380,
        Large: 525,
      },
    ],
    category: "Nonveg",
    image: "pizza4",
    description: "Pepper Barbecue Chicken I Cheese",
    nonvegname:[ "Black Olive","Capsicum","Mushroom" ,"Fresh Tomato" ,"Chicken tikka" , "Barbeque chicken" , "Grilled chicken"],
    nonvegprice: [20,25,30,10,35,45,40],
  },
  {
    id:7,
    name: "Cold Drink",
    varients: ["Small", "Medium", "Large"],
    price:55,
    prices: [
      {
        Small: 220,
        Medium: 380,
        Large: 525,
      },
    ],
    category: "Cold Drink",
    image: "drink2",
    description: "Pepper Barbecue Chicken I Cheese",
  },
  {
    id:8,
    name: "Mausse Cake",
    varients: ["Small", "Medium", "Large"],
    price:90,
    prices: [
      {
        Small: 220,
        Medium: 380,
        Large: 525,
      },
    ],
    category: "Cake",
    image: "cake",

  }
  ]}

  const initialStateCart = {
    item:[]
  }

const initialStateOrder =
{
  item : [],
  shipping_charges : 30,
  discount_in_percent : 10,
  shipping_address: ''
}
 
  
  const productReducer = (state = initialStateProduct,action)=>
  {
    return state;
  }


  const cartReducer = (state = initialStateCart,action)=>
  {
    switch(action.type){
      case ADD_TO_CART:
        if(state.item.find(item=>item.id===action.payload.id)){ 
        return state;
        }
         return {...state,item:[...state.item,{...action.payload,quantity:1}]}

      case CHANGE_QUANTITY:
      const oldItem = state.item.find((item) => item.id === action.payload.id)
      const index = state.item.indexOf(oldItem);
      const newItems = [...state.item];
      newItems[index] = action.payload;
        return {...state,item:newItems}
       
     default :  
        return state;
 
    }
   
  }

  
  const orderReducer = (state = initialStateOrder,action)=>
  {
    switch(action.type){
      case CHANGE_ORDER_CART :
        return {...state,item:action.payload}

     default :  
        return state;
 
    }
   
  }
  

  export {productReducer,cartReducer,orderReducer};