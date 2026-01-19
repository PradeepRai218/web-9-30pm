import React, { createContext, useEffect, useState } from "react";

export let myGlobalContext = createContext();

export default function MainContext({ children }) {
  let [count, setCount] = useState(0);
  let [cart, setCart] = useState(
    localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
  );

  let obj = { count, setCount, cart, setCart };

  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  }, [cart]);
  return (
    <myGlobalContext.Provider value={obj}>{children}</myGlobalContext.Provider>
  );
}
