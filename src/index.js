import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { User_Context_Provider } from "./contexts/user.context.component";
import { Product_context_Provider } from "./contexts/product.context.component";
import { ProductQuickViewProvider } from "./contexts/product-quick-view-context";
import { CartContextProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <User_Context_Provider>
        <Product_context_Provider>
          <ProductQuickViewProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </ProductQuickViewProvider>
        </Product_context_Provider>
      </User_Context_Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
