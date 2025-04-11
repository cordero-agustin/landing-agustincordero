import '../css/Navbar.css'
import CartWidget from './CartWidget'
const Navbar = () => {
    return(
        <nav style={{display:"flex", justifyContent:"space-around", alignItems:"center", padding:'2rem', backgroundColor: "darkred", color: 'whitesmoke', fontWeight:'bold', fontFamily:'Arial'}}>
            <a className="nav-link" href="" >
                <img src="../logo-nav.png" alt="logo" className='logo-nav'/>
            </a>
            <a className="nav-link" href="" >Camisetas</a>
            <a className="nav-link" href="" >Shorts</a>
            <a className="nav-link" href="" >Accesorios</a>
            <CartWidget/>
        </nav>
    )
}

export default Navbar