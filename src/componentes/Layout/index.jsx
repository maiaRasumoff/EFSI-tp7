import { Link, Outlet } from "react-router-dom";
import './layout.css';

const Layout = () => {
    
    //HARDCODEO
    const marcas = [
        { id: 1, nombre: 'Apple' },
        { id: 2, nombre: 'Samsung' },
        { id: 3, nombre: 'Xiaomi' },
        { id: 4, nombre: 'Motorola' }
      ];

    return (<>
        <nav>
            <Link to="/">Home  </Link>
            <Link to="/quienes-somos">Quienes Somos  </Link>
            <Link to="/productos">Productos  </Link>
            { marcas.map(p => <Link to={`/productos/${p.id}/${p.nombre}`}>   Marca: {p.nombre} </Link> ) }
        </nav>

        <h3>Esto es un header</h3>

        <Outlet></Outlet>

        <footer>
            <h3>Esto es un footer</h3>
        </footer>
    </>);
}

export default Layout;