import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const linkArray = [
  { title: "Главная", to: "/" },
  { title: "Корзина", to: "/cart" },
  { title: "Контакты", to: "/contact" },
];

function Navbar() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      {linkArray.map((elem, index) => {
        return (
          <BottomNavigationAction
            key={index}
            sx={{
              backgroundColor: "rgba(59, 60, 61, 1)",
              color: "rgba(255, 255, 255, 0.5)",
              "&.Mui-selected": {
                color: "#fff",
              },
            }}
            label={elem.title}
            component={NavLink} //в “component prop” меняем корневой елемент
            to={elem.to}
          />
        );
      })}
    </BottomNavigation>
  );
}

export default Navbar;
