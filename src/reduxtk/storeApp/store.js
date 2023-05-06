import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import logger from "redux-logger";
import { cartReducer } from "../features/cart/cartSlice";
import { productReducer } from "../features/products/product.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat()
})

export default store; 