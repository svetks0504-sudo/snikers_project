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
      setProducts(response.data);
    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
   fetchProducts();
  }, [])

  // api /cartData
  const addToCart = async (id) => {
    try{
      const product = products.find((elem) => elem.id === id);
      if (!product) return;

      const response = await axios.post(`${BASE_URL}/cartData`, {
        name: product.name,
        image: product.image,
        price: product.price
      });

        setCartData((prev)=>[...prev, response.data]);
    
    }catch (error){
      console.log(error)
    }
  };


  const deleteFromCart = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/cartData/${id}`)
    setCartData(prev => prev.filter((elem) => elem.id !== id)) ;
  
}catch(error){
  console.log(error)
}
  }

  const fetchCartData = async () => {
    try{
      const response = await axios.get(`${BASE_URL}/cartData`);
      setCartData(response.data);
    }catch(error){
      console.log(error)
    }
  };

  return (
    <ProductsContext.Provider value={{
      cartData, 
      products, 
      addToCart, 
      deleteFromCart, 
      fetchCartData }}>{children}</ProductsContext.Provider>
  );
}
export default ProductProvider;