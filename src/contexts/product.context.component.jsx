import { createContext, useState } from "react";
import SHOP_DATA from "../shopdata";
import { useEffect } from "react";
// import { addCollectionsAndDocumentsToFireStore } from "../utils/firebase/firebase.utils";
import { getCollectionsAndDocumentFromFireBase } from "../utils/firebase/firebase.utils";
export const Product_Context = createContext({
  productCollections: {},
});

export const Product_context_Provider = ({ children }) => {
  const [productCollections, setProductCollections] = useState({});

  /**  adding Json data to fireStore database..
  useEffect(() => {
    addCollectionsAndDocumentsToFireStore("group", SHOP_DATA);
  }, []);
  */

  useEffect(() => {
    const getShoeGroups = async () => {
      const groupMaps = await getCollectionsAndDocumentFromFireBase();
      setProductCollections(groupMaps);
    };
    getShoeGroups();
  }, []);

  console.log(productCollections);

  const value = {
    productCollections,
  };
  return (
    <Product_Context.Provider value={value}>
      {children}
    </Product_Context.Provider>
  );
};
