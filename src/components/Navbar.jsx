import CartWidget from './CartWidget';
import logoDelNegocio from '../assets/logo1.jpeg';
const Navbar = () => {
    return (
        <nav className="navbar">

                <figure className="logo-figure">
                    <img src={logoDelNegocio} alt="Logo de la tienda" className="logo"/>
                </figure>
           
            <div>
                <ul className="nav-links">
                    <li><button>Tazas</button></li>
                    <li><button>Mates</button></li>
                    <li><button>Remeras</button></li>
                    <li><button>Accesorios</button></li>
                </ul>
            </div>

            <CartWidget/>
        </nav>
    );
}
export default Navbar;