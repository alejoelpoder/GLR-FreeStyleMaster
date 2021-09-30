import Item from '../general/Item'
import { Switch, useParams } from "react-router";

const DisplayJurado = () => {

    const {pais} = useParams();

    const paisJurado = (cat) => {
        switch(cat) {
            case 'peru': return juradoPeru;
            case 'chile': return juradoChile;
            case 'españa': return juradoEspaña;
            case 'mexico': return juradoMexico;
            case 'argentina': return juradoArgentina;
            default: return <p className="hola">La categoría no existe</p>;
        }
    }

    const juradoPeru = [
        {nombre: 'peruNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruTOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const juradoEspaña = [
        {nombre: 'españaNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaTOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const juradoMexico = [
        {nombre: 'mexicoNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoTOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const juradoArgentina = [
        {nombre: 'argentinaNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaTOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const juradoChile = [
        {nombre: 'NITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'ACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'PEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'JOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'TOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]
    
    return (
        <>
            <ul>
                {
                    paisJurado(pais).map(item => (
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
