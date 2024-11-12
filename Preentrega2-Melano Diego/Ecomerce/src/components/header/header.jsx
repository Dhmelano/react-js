import NavBar from "../NavBar/NavBar"
import './header.css'

function Header () {
    return (
        <nav className=" navbar navbar-expand-lg bg-body-tertiary headerContainer">
                <div className=" container-fluid divHeader" >
                    <NavBar/>
                </div>
        </nav>        
    )
}

export default Header