import Item from '../general/Item'
import bekaesh from './media/BEKAESH.png'
import verse from './media/VERSE.png'
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
        {nombre: 'BEKAESH',foto: bekaesh},
        {nombre: 'VERSE',foto: verse},
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
