import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList'
import HeroBanner from './HeroBanner'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const { categoriaId } = useParams();

    useEffect(()=> {
        window.scrollTo(0, 0)
        setLoading(true)

        const getProducts = ()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    fetch('/data/products.json')
                    .then(response => response.json())
                    .then(data => {
                        const filtrado = categoriaId
                        ? data.filter((product) => product.category === categoriaId)
                        : data
                        resolve(filtrado)
                    })
                    .catch(error => {
                        console.error('Error al obtener los productos:', error);
                        resolve([])
                    });
                },1500)
            })
        }
        getProducts().then((data)=>{
            setProducts(data)
            setLoading(false)
        })
    },[categoriaId])

    if (loading) {
        return(
            <div className="item-list-container">
                <p>Cargando productos...</p>
            </div>
        )
    }
     return (
        <div className="item-list-container">
            {greeting && <h2>{greeting}</h2>}
            {!categoriaId && <HeroBanner />}
            {!categoriaId && <h2 className="productos-destacados">Productos Destacados</h2>}
            {categoriaId && <h3>Categoría: {categoriaId}</h3>}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
    