import Item from '../general/Item'
import babi from './media/BABI.png'
import estrimo from './media/ESTRIMO.png'
import noult from './media/NOULT.png'
import piezas from './media/PIEZAS.png'
import soen from './media/SOEN.png'
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
        {nombre: 'BABI',foto: babi},
        {nombre: 'ESTRIMO',foto: estrimo},
        {nombre: 'NOULT',foto: noult},
        {nombre: 'PIEZAS',foto: piezas},
        {nombre: 'SOEN',foto: soen},
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
