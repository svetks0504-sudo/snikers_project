import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import styles from './styles.module.css'
import SocialLinks from '../socialLinks/index'
import { TextField } from "@mui/material";

function Layout (){
return (
<div className={styles.page}>
    <header className={styles.header}>
        <h3>Сникер - магазин</h3>
        <Navbar />
    </header>

    <main>
        <Outlet />
    </main>


    <footer className={styles.footer}>
        <div className={styles.footerTop}>
            <p>Контакты</p>
            <SocialLinks />
        </div>
        <div className={styles.columText}>
            <p className={styles.text18px}>8 800 000 00 00</p>
            <p className={styles.text18px}>emailexample@email.com</p>
        </div>
        <div className={styles.botomFooter}>
            <p className={styles.text20px}>2024 Сникер-магазин. Все права защищены</p>
           <TextField sx={{
            "& .MuiInputBase-input": {
            color: "rgba(255, 255, 255, 0.5)"},
            "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.5)"},
            "& .MuiInputLabel-root.Mui-focused":{
            color: "rgba(255, 255, 255, 0.5)"},
             "& .MuiInput-underline:before": {
            borderBottomColor: "rgba(255,255,255,0.3)"},
             "& .MuiInput-underline:hover:before": {
            borderBottomColor: "rgba(255, 255, 255, 0.5)" },
             "& .MuiInput-underline:after":{
            borderBottomColor: "rgba(255, 255, 255, 0.5)"
             }
           }}
           id="standard-basic" 
           label="Введите свой email:" 
           variant="standard" />
        </div>
    </footer>

</div>
)
}
export default Layout;