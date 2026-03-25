import { useEffect, useState } from "react";
import ProductsContext from "../../context";
import axios from "axios";

const BASE_URL = "https://69c39e3eb780a9ba03e759d4.mockapi.io/";

function ProductProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);

  // api /productsData
  const fetchProducts = async () => {
    try{
      const response = await axios.get(`${BASE_URL}/productsData`);
      setCartData(response.data);
    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
   fetchProducts();
  }, [])

  // api /cartData
  const addToCart = async () => {};
  const deleteFromCart = async () => {};
  const fetchCartData = async () => {};

  return (
    <ProductsContext.Provider value={{cartData}}>{children}</ProductsContext.Provider>
  );
}
export default ProductProvider;