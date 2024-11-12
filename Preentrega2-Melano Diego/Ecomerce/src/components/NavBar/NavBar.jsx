import CartWidget from '../CartWidget/cartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <img src="..//public/logo web.png" alt="imglogo" className="imgLogo" />
            <a className="title" href="#">Spider-Vaper</a>
            <div className="collapse navbar-collapse divNav" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ulNav">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Item">Detalle</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/liquidos">Liquidos</Link>
                    </li>
                    
                    <li className="nav-item  liNavbar">
                        <Link className="nav-link" to="/category/vapeadore">Vapeadores</Link>
                    </li>
                    


                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder=" Buscar Producto" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <div>
                    <CartWidget />
                </div>
            </div>


        </>
    )
}

export default NavBar