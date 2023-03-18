import { createContext, useState, useEffect } from "react";

/*
const addCartItem = (cartItems, productToadd) => {
  const isItemAlreadyinCart = cartItems.find(
    (cartItem) => cartItem.id === productToadd.id
  );
  if (isItemAlreadyinCart) {
    return cartItems.map((cartItem) => {
      return cartItem.size === productToadd.size
        ? { ...cartItem, quantity: (productToadd.quantity += 1) }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToadd }];
};

*/

const addCartItem = (cartItems, productToadd) => {
  if (cartItems.length < 1) {
    return [{ ...productToadd, id: 1 }];
  } else {
    return [...cartItems, { ...productToadd, id: (cartItems.length += 1) }];
  }
};

const incrementItem = (cartItems, product_increment_id) => {
  return cartItems.map((item) =>
    item.id === product_increment_id
      ? { ...item, quantity: (item.quantity += 1) }
      : item
  );
};

const decrementItem = (cartItems, product_to_decrement) => {
  return cartItems.map((item) =>
    (item.id === product_to_decrement.id) & (product_to_decrement.quantity > 1)
      ? { ...item, quantity: (item.quantity -= 1) }
      : item
  );
};

const deletItem = (cartItems, product_To_Delete) => {
  return cartItems.filter((cartItem) => {
    return (
      cartItem.id !== product_To_Delete.id ||
      cartItem.quantity !== product_To_Delete.quantity
    );
  });
};
export const CreateCartContext = createContext({
  toggleCart: false,
  setToggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  deleteCartItem: () => {},
  incrementCheckOutItem: () => {},
  decrementCheckoutItem: () => {},
  total: 0,
});
export const CartContextProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  //counting item in the added to the cart..

  useEffect(() => {
    setCartCount(
      cartItems.reduce((accumulator, current) => {
        return accumulator + current.quantity;
      }, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    setTotal(
      cartItems.reduce((accumulator, current) => {
        return accumulator + current.quantity * current.price;
      }, 0)
    );
  }, [cartCount]);

  const addItemToCart = (productToadd) => {
    setCartItem(addCartItem(cartItems, productToadd));
  };

  const incrementCheckOutItem = (product_increment_id) => {
    setCartItem(incrementItem(cartItems, product_increment_id));
  };
  const decrementCheckoutItem = (product_to_decrement) => {
    setCartItem(decrementItem(cartItems, product_to_decrement));
  };

  const deleteCartItem = (product_To_Delete) => {
    setCartItem(deletItem(cartItems, product_To_Delete));
  };

  const value = {
    toggleCart,
    setToggleCart,
    addItemToCart,
    setCartItem,
    cartItems,
    cartCount,
    deleteCartItem,
    total,
    incrementCheckOutItem,
    decrementCheckoutItem,
  };

  return (
    <CreateCartContext.Provider value={value}>
      {children}
    </CreateCartContext.Provider>
  );
};
