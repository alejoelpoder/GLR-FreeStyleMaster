import Item from '../general/Item'
import fox from './media/FOX.jpg'
import gcr from './media/GCR.jpg'
import hbd from './media/HBD.jpg'
import joro from './media/JORO.jpg'
import vellutino from './media/VELLUTINO.jpg'
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
        {nombre: 'FOX',foto: fox},
        {nombre: 'GCR',foto: gcr},
        {nombre: 'HBD',foto: hbd},
        {nombre: 'JORO',foto: joro},
        {nombre: 'VELLUTINO',foto: vellutino},
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
