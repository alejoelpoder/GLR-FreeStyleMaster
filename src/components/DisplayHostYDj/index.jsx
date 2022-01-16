import Item from '../general/Item'
import serko from './media/SERKO-FU.png'
import sonicko from './media/SONICKO.png'
// import { Switch, useParams } from "react-router";

const DisplayHostYDj = () => {

    // const {pais} = useParams();

    // const paisHostYDj = (cat) => {
    //     switch(cat) {
    //         case 'peru': return hostYDjPeru;
    //         case 'chile': return hostYDjChile;
    //         case 'españa': return hostYDjEspaña;
    //         case 'mexico': return hostYDjMexico;
    //         case 'argentina': return hostYDjArgentina;
    //         default: return <p className="hola">La categoría no existe</p>;
    //     }
    // }

    const hostYDjPeru = [
        {nombre: 'SERKO FU',foto: serko},
        {nombre: 'SONICKO',foto: sonicko},
    ]
    
    return (
        <>
            <ul>
                {
                    hostYDjPeru.map(item => (
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

export default DisplayHostYDj;
