import '../css/Navbar.css'
import imagenSRC from '../assets/logo-shop-src.png'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return(
        <nav style={{display:"flex", justifyContent:'space-around', alignItems:'center', padding:'2rem', color:"black", backgroundColor:'grey'}}>
            <NavLink className="nav-link" to='/'>
                {/* imagen en public */}
                <img src='../logo-nav.png' alt='logo' className='logo'/>
                {/* imagen de src */}
                {/* <img src={imagenSRC} alt='logo' className='logo'/> */}
            </NavLink>
            <NavLink  className="nav-link" to="/category/camisetas">Camisetas</NavLink>
            <NavLink  className="nav-link" to="/category/shorts">Shorts</NavLink>
            <NavLink  className="nav-link" to="/category/accesorios">Accesorios</NavLink>
            <CartWidget/>
        </nav>
    )
}

export default Navbar