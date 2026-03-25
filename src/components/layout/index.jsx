import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

function Layout (){
return (
<div>
    <header>
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