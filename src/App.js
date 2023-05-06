import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import HeroBanner from "./components/hero-component/hero-banner/hero.component";
import Authentication from "./routes/authentication/authentication.component";
import Collections from "./components/collections/collection.component";
import { useEffect } from "react";
import ProductOverView from "./components/product-overview-component/product-overview";
import ItemCheckOut from "./components/ItemCheckOut-component/ItemCheckOut";
import Shop from "./components/shop/shop.componet";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reduxtk/features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/shopwithstyle" element={<Navigation />}>
        <Route index={true} element={<HeroBanner />} />
        <Route path="/shopwithstyle/authentication" element={<Authentication />} />
        <Route path="collections/*" element={<Shop />} />
        <Route path={`/shopwithstyle/collectons/productview`} element={<ProductOverView />} />
        <Route path={`checkout-items`} element={<ItemCheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
