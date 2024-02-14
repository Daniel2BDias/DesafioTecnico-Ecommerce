import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartState, setCartState] = useState(false);
    const [cart, setCart] = useState([]);

    function cartController () {
        setCartState(!cartState);
    };
    
    return (
      <CartContext.Provider value={{ cart, setCart, cartState, setCartState, cartController }}>
        {children}
      </CartContext.Provider>
    );
  };

  export default CartContext;