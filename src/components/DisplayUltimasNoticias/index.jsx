import Item from '../general/Item'
import { Switch, useParams } from "react-router";

const DisplayUltimasNoticias = () => {

    const {pais} = useParams();

    const paisUltimasNoticias = (cat) => {
        switch(cat) {
            case 'peru': return ultimasNoticiasPeru;
            case 'chile': return ultimasNoticiasChile;
            case 'españa': return ultimasNoticiasEspaña;
            case 'mexico': return ultimasNoticiasMexico;
            case 'argentina': return ultimasNoticiasArgentina;
            default: return <p className="hola">La categoría no existe</p>;
        }
    }

    const ultimasNoticiasPeru = [
        {nombre: 'peruNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const ultimasNoticiasEspaña = [
        {nombre: 'españaNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const ultimasNoticiasMexico = [
        {nombre: 'mexicoNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const ultimasNoticiasArgentina = [
        {nombre: 'argentinaNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const ultimasNoticiasChile = [
        {nombre: 'NITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'ACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'PEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]
    
    return (
        <>
            <ul>
                {
                    paisUltimasNoticias(pais).map(item => (
                        <li key={item.id}>
                            <Item 
                                nombre={item.nombre}
                                foto={item.foto}
                            />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default DisplayUltimasNoticias;
