import ProductsContext from "../../context";
import { useContext } from "react";
import styles from './styles.module.css';
import { Box,
  CardMedia,
  CardContent,
  Button,
  CardActions
 } from "@mui/material";


function Main(){
  const {addToCart, products} = useContext(ProductsContext);

    return (
      <div className={styles.mainContainer}>
        <img className={styles.imgMain}
         src="src/assets/images/Banner.png" 
         alt="images" />

         <h1 className={styles.mainTitle}>Товары</h1>

  <Box sx={{display: "flex", 
    flexWrap: "wrap",
    gap: "6vw",
    pt: "2.1vw",
    mt: "2vw",
    justifyContent: "center",
    borderTop: "1px solid rgba(234, 234, 234, 1)" ,
    alignItems: "center"}}>

    {products.map((elem)=>{
       return (
       <div key={elem.id} 
       className={styles.cart}
       >
    
        <CardMedia sx={{maxHeight: "127px", 
         maxWidth: "278px"}}
         component="img"
         image={elem.image}
         alt={elem.name}
        />
        <CardContent sx={{p:"2vw 0 2vw 0"}}>
          <p className={styles.cartName}>
            {elem.name}
          </p>
        </CardContent>
    

      <CardActions sx={{display: "flex", 
        justifyContent: "space-between",
        width: "100%",
        p: "0",
        m: "0"}} >
        <div className={styles.priceContainer}>
        <p className={styles.priceText}>ЦЕНА:</p>
        <p className={styles.price}>{elem.price} €</p>
        </div>
        <Button onClick={()=>{addToCart(elem.id)}}
        variant="contained"
        sx={{fontSize: "1.2rem",
          borderRadius: "50%",
          border: "1px solid rgba(104, 102, 102, 0.5)",
          color: "black",
          width: "30px",
          height: "30px",
          minWidth: "30px",
          backgroundColor: "rgba(233, 233, 233, 0.5)",
          "&:hover":{
            backgroundColor: "black",
          color: "white"} 
        }} >
          +
        </Button>
      </CardActions>

    </div>)
    })}

  </Box>  
  </div>    
    )
}

export default Main;