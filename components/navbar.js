import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function NavBar() {
    return (
        <nav className="navbar">
             <div>
                <a href="/">
                    <img className="logo" src={logo} alt="" />
                </a>
            </div>
   
        <ul className="nav-menu">
                <li className="nav-item">
                <Link to="/" className="nav-links">   HOME </Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-links"> ABOUT </Link>
                </li>
                <li className="nav-item">
                <Link to="/properties" className="nav-links"> PROPERTIES </Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-links">CONTACT </Link>
                </li>
       </ul>
  
       </nav>
    );
  }
  
  export default NavBar;