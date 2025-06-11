import { useParams } from "react-router-dom";
import { celulares, marcas } from "../../data";

const Productos = () => {
    const { idMarca, nombreMarca } = useParams();

    return (
        <>
            <h1>Productos de la marca {nombreMarca}</h1>

            {celulares
                .filter(cel => cel.marcaId == idMarca)
                .map((cel, index) => (
                    <div className="cardCelular" key={index}>
                        <h2>{cel.nombre}</h2>
                        <img src={cel.fotos[1]} alt={cel.nombre} />
                        <p>{cel.descripcion}</p>
                    </div>
                ))
            }
            
        </>
    );
};

export default Productos;
