import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import styles from './styles.module.css'


function Layout (){
return (
<div>
    <header className={styles.header}>
        <h3>Сникер - магазин</h3>
        <Navbar />
    </header>

    <main>
        <Outlet />
    </main>


    <footer>
    </footer>
</div>
)
}
export default Layout;