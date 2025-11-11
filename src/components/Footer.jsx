import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>TechSpark</h3>
                    <p>Tu tienda de tecnología de confianza. Los mejores productos tech al mejor precio.</p>
                    <div className="footer-contact">
                        <p><MdEmail /> info@techspark.com</p>
                        <p><MdPhone /> +54 381 1234-5678</p>
                        <p><MdLocationOn /> San Miguel de Tucumán, Argentina</p>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Categorías</h4>
                    <ul>
                        <li><Link to="/category/smartphones">Smartphones</Link></li>
                        <li><Link to="/category/laptops">Laptops</Link></li>
                        <li><Link to="/category/audio">Audio</Link></li>
                        <li><Link to="/category/wearables">Wearables</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Información</h4>
                    <ul>
                        <li><Link to="/">Sobre Nosotros</Link></li>
                        <li><Link to="/">Envíos</Link></li>
                        <li><Link to="/">Devoluciones</Link></li>
                        <li><Link to="/">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><FaFacebook size={28} /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram size={28} /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter size={28} /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube size={28} /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 TechSpark. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
