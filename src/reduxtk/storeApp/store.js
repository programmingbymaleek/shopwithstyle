import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "../features/user/userSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat()
})

export default store; 