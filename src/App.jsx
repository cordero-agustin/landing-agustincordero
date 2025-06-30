import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import FetchApi from './components/ejemplos/FetchApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';



function App() {
 
  return (
    <CartProvider>
    <BrowserRouter>
    <NavbarReactBootstrap/>
   <Routes>
      <Route path='/' element={<ItemListContainer greeting='induStore'/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria: '/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/fetch' element={<FetchApi/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
  
    
  )
}

export default App
