import { useState } from "react";
import ProductsContext from "../../context";
import axios from "axios";

const BASE_URL = "https://69c39e3eb780a9ba03e759d4.mockapi.io/";

function ProductProvider({ childer }) {
  const [cartData, setCartData] = useState();
  const [products, setProducts] = useState();

  // api /productsData
  const fetchProducts = async () => {};

  // api /cartData
  const addToCart = async () => {};
  const deleteFromCart = async () => {};
  const fetchCartData = async () => {};

  return (
    <ProductsContext.Provider value={{}}>{childer}</ProductsContext.Provider>
  );
}
export default ProductProvider;