import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import HeroBanner from "./components/hero-component/hero-banner/hero.component";
import Authentication from "./routes/authentication/authentication.component";
import Collections from "./components/collections/collection.component";
import ProductOverView from "./components/product-overview-component/product-overview";
import ItemCheckOut from "./components/ItemCheckOut-component/ItemCheckOut";
import Shop from "./components/shop/shop.componet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<HeroBanner />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="collections/*" element={<Shop />} />
        <Route path={`collectons/productview`} element={<ProductOverView />} />
        <Route path={`checkout-items`} element={<ItemCheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
