import Item from '../general/Item'
import { Switch, useParams } from "react-router";

const DisplayHostYDj = () => {

    const {pais} = useParams();

    const paisHostYDj = (cat) => {
        switch(cat) {
            case 'peru': return hostYDjPeru;
            case 'chile': return hostYDjChile;
            case 'españa': return hostYDjEspaña;
            case 'mexico': return hostYDjMexico;
            case 'argentina': return hostYDjArgentina;
            default: return <p className="hola">La categoría no existe</p>;
        }
    }

    const hostYDjPeru = [
        {nombre: 'METZ',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/11/lg_6164810107247222ce2b02b5.jpg'},
        {nombre: 'DMANDADO',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/11/lg_6164810df35f4972af588b77.jpg'},
    ]

    const hostYDjEspaña = [
        {nombre: 'españaNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const hostYDjMexico = [
        {nombre: 'mexicoNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const hostYDjArgentina = [
        {nombre: 'argentinaNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const hostYDjChile = [
        {nombre: 'NITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'ACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]
    
    return (
        <>
            <ul>
                {
                    paisHostYDj(pais).map(item => (
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
