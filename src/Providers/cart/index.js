import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@Solid:cart")) || []
  );

  const addCart = (product) => {
    product.quantity = 1;

    const list = JSON.parse(localStorage.getItem("@Solid:cart")) || [];
    const finded = list.find((item) => item.id === product.id);

    if (finded === undefined) {
      list.push(product);
      setCart(list);
      localStorage.setItem("@Solid:cart", JSON.stringify(list));
    } else {
      const mapList = list.map((item) => {
        if (item.id === finded.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      setCart(mapList);
      localStorage.setItem("@Solid:cart", JSON.stringify(mapList));
    }
  };

  const deleteCart = (id) => {
    const newCart = cart.filter((item) => item.uniqueId !== id);

    setCart(newCart);
    localStorage.setItem("@Solid:cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addCart, deleteCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
