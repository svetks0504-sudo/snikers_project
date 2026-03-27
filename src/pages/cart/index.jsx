import { Box, Button, Container } from "@mui/material";
import { useContext, useEffect } from "react";
import ProductContext from "../../context";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Cart() {
  const { cartData, fetchCartData, deleteFromCart } =
    useContext(ProductContext);

  function mapElem(render) {
    return cartData.map((elem) => render(elem));
  }


  function sumPrice() {
    return cartData.reduce((acc, elem) => {
      return acc + elem.price;
    }, 0);
  }

  return (
    <Box sx={{ padding: "3vw 13vw" }}>
      <h1>Корзина</h1>
      <hr className={styles.lineTop} />
      {!cartData || cartData.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2vw",
          }}
        >
          <p>Добавте товар в корзину</p>

          <Button
            to="/"
            component={Link}
            variant={"outlined"}
            sx={{
              fontSize: "1.2rem",
              border: "1px solid rgba(104, 102, 102, 0.5)",
              color: "black",
              backgroundColor: "rgba(233, 233, 233, 0.5)",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            K товарaм
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "7vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "3vw",
            }}
          >
            {mapElem((elem) => {
              return (
                <Box
                  key={elem.id}
                  sx={{
                    width: "47vw",
                    padding: "1vw",
                    gap: "2vw",
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },
                    alignItems: "center",
                    backgroundColor: "rgba(250, 250, 250, 1)",
                  }}
                >
                  <img
                    className={styles.imageBasck}
                    src={elem.image}
                    alt={elem.name}
                  />
                  <Box
                    sx={{
                      bgcolor: "rgba(0,0,0,0.5)",
                      width: { xs: "100%", md: "1px" },
                      height: { xs: "1px", md: "90px" },
                      flexShrink: 0,
                    }}
                  />
                  <p className={styles.cartText}>{elem.name}</p>
                  <Box>
                    <p className={styles.priceText}>ЦЕНА:</p>
                    <p className={styles.price}>{elem.price} €</p>
                  </Box>

                  <Button
                    onClick={() => {
                      deleteFromCart(elem.id);
                    }}
                    variant="contained"
                    sx={{
                      fontSize: "1.2rem",
                      borderRadius: "50%",
                      border: "1px solid rgba(104, 102, 102, 0.5)",
                      color: "black",
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(233, 233, 233, 0.5)",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                      marginLeft: "auto",
                    }}
                  >
                    <img
                      className={styles.deleteImg}
                      src="src/assets/icons/delete.svg"
                    />
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(250, 250, 250, 1)",
              width: "22vw",
              padding: "1.3vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "2vw",
            }}
          >
            <h1>Итого</h1>
            {mapElem((elem) => (
              <p className={styles.greyText}>{elem.name}</p>
            ))}
            <hr className={styles.lineTogeser} />
            <Box
              sx={{
                padding: "0 0 1vw 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1vw",
              }}
            >
              <p className={styles.priceText}>ЦЕНА:</p>
              <p className={styles.price}>{sumPrice()} €</p>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Cart;
