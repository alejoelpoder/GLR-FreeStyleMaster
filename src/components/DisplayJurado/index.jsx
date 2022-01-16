import Item from '../general/Item'
import danger from './media/DANGER.png'
import eric from './media/ERIC-EL-NIÑO.png'
import gino from './media/GINO.png'
import k from './media/K-ROAD.png'
import potencia from './media/POTENCIA.png'
// import { Switch, useParams } from "react-router";

const DisplayJurado = () => {

    // const {pais} = useParams();

    // const paisJurado = (cat) => {
    //     switch(cat) {
    //         case 'peru': return juradoPeru;
    //         case 'chile': return juradoChile;
    //         case 'españa': return juradoEspaña;
    //         case 'mexico': return juradoMexico;
    //         case 'argentina': return juradoArgentina;
    //         default: return <p className="hola">La categoría no existe</p>;
    //     }
    // }

    const juradoPeru = [
        {nombre: 'DANGER',foto: danger},
        {nombre: 'ERIC EL NIÑO',foto: eric},
        {nombre: 'GINO',foto: gino},
        {nombre: 'K-ROAD',foto: k},
        {nombre: 'POTENCIA',foto: potencia},
    ]
    
    return (
        <>
            <ul>
                {
                    juradoPeru.map(item => (
                        <div key={item.id}>
                            <Item 
                                nombre={item.nombre}
                                foto={item.foto}
                            />
                        </div>
                    ))
                }
            </ul>
        </>
    )
}

export default DisplayJurado;
