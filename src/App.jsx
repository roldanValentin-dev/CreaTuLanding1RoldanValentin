import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className='header'>
        <Navbar />
      </header>

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a TechSpark - Tu tienda de tecnología!" />} />
        <Route path='/category/:categoriaId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
