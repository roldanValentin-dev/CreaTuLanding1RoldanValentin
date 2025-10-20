import { useState } from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <ItemListContainer greeting="Bienvenidos a mi tienda de productos personalizados!" />
        
    </>
  )
}

export default App
