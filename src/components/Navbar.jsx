import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiSmartphone, FiMonitor, FiHeadphones } from 'react-icons/fi'
import { BsSmartwatch } from 'react-icons/bs'
import { MdOutlineAccessibility } from 'react-icons/md'
import CartWidget from './CartWidget'
import logoDelNegocio from '../assets/Logo TechSpark.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className="navbar">
            <Link to="/" onClick={closeMenu}>
                <figure className="logo-figure">
                    <img src={logoDelNegocio} alt="TechSpark Logo" className="logo" />
                </figure>
            </Link>

            <button className="menu-toggle" onClick={toggleMenu}>
                {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>

            <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <NavLink
                            to="/category/smartphones"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            onClick={closeMenu}
                        >
                            <FiSmartphone /> Smartphones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/category/laptops"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            onClick={closeMenu}
                        >
                            <FiMonitor /> Laptops
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/category/audio"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            onClick={closeMenu}
                        >
                            <FiHeadphones /> Audio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/category/wearables"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            onClick={closeMenu}
                        >
                            <BsSmartwatch /> Wearables
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/category/accesorios"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            onClick={closeMenu}
                        >
                            <MdOutlineAccessibility /> Accesorios
                        </NavLink>
                    </li>
                </ul>
            </div>

            <CartWidget />
        </nav>
    )
}

export default Navbar
