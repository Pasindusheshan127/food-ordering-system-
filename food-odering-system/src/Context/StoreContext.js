import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState, useEffect } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((pre) => ({ ...pre, [itemId]: 1 }));
    } else {
      setCartItem((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };

  const getTotalCardAnount = () => {
    let totalAmout = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmout += itemInfo.price * cartItem[item];
      }
    }
    return totalAmout;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCardAnount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
