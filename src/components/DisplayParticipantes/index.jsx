import './DisplayParticipantes.css'
import Item from '../general/Item'
import { Switch, useParams } from "react-router";

const DisplayParticipantes = () => {

    const {pais} = useParams();

    const paisParticipante = (cat) => {
        switch(cat) {
            case 'peru': return participantesPeru;
            case 'chile': return participantesChile;
            case 'españa': return participantesEspaña;
            case 'mexico': return participantesMexico;
            case 'argentina': return participantesArgentina;
            default: return <p className="hola">La categoría no existe</p>;
        }
    }

    const participantesPeru = [
        {nombre: 'peruNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruTOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruJOQERR',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruRODAMIENTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruANUBIS',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruERREKA',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruRICTO',foto: 'https://via.placeholder.com/300/09f/fff.png'}
    ]

    const participantesEspaña = [
        {nombre: 'españaNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaTOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaJOQERR',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaRODAMIENTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaANUBIS',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaERREKA',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaRICTO',foto: 'https://via.placeholder.com/300/09f/fff.png'}
    ]

    const participantesMexico = [
        {nombre: 'mexicoNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoTOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoJOQERR',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoRODAMIENTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoANUBIS',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoERREKA',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoRICTO',foto: 'https://via.placeholder.com/300/09f/fff.png'}
    ]

    const participantesArgentina = [
        {nombre: 'argentinaNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaPEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaTOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaJOQERR',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaRODAMIENTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaANUBIS',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaERREKA',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentinaRICTO',foto: 'https://via.placeholder.com/300/09f/fff.png'}
    ]

    const participantesChile = [
        {nombre: 'NITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'ACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'PEPE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'JOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'TOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'JOQERR',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'RODAMIENTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'ANUBIS',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'ERREKA',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'RICTO',foto: 'https://via.placeholder.com/300/09f/fff.png'}
    ]
    
    return (
        <>
            <ul>
                {
                    paisParticipante(pais).map(item => (
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

export default DisplayParticipantes;
