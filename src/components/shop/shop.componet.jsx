import React from "react";
import { Routes, Route } from "react-router-dom";
import Collections from "../collections/collection.component";
import ShoeGroup from "../shoeGroupComponent/shoegroup.component";

function Shop() {
  return (
    <Routes>
      <Route index={true} element={<Collections />} />
      <Route path=":group" element={<ShoeGroup />} />
    </Routes>
  );
}

export default Shop;
