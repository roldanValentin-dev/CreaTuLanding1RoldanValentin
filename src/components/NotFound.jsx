import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1>404</h1>
                <h2>Página no encontrada</h2>
                <p>Lo sentimos, la página que buscas no existe en TechSpark.</p>
                
                <div className="not-found-actions">
                    <Link to="/">
                        <button className="btn-home">Ir al Inicio</button>
                    </Link>
                    
                    <Link to="/category/smartphones">
                        <button className="btn-category">Ver Smartphones</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound