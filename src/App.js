import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import useLocalStorage from './hooks/useLocalStorage';

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  

  const addItem = (item) => {
    // add the given item to the cart
    setCart( [...cart, item] );
	// console.log("Cart:", cart[0].id);
  };
  const removeItem = (id) => {
    // remove the given item to the cart

		const items = cart.filter(item=>(item.id !== id))

    setCart(  items );
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem}}>
        <CartContext.Provider value={{cart, removeItem} }>
          <Navigation  />

          {/* Routes */}

          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart  />
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
