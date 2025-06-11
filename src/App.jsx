import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home';
import Nosotros from './componentes/Nosotros';
import Layout from './componentes/Layout';
import Notfound from './componentes/Notfound';
import Productos from './componentes/Productos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/quienes-somos" element={<Nosotros />} ></Route>
            <Route path="/productos" element={<Productos />} ></Route>
            <Route path="/productos/:idMarca/:nombreMarca" element={<Productos />} ></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
