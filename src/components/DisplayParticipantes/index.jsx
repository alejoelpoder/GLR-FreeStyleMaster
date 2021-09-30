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
        {nombre: 'perTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'perLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'perWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruJOQERR',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruRODAMIENTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruANUBIS',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruERREKA',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruRICTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruOTRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'peruANOTHER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const participantesEspaña = [
        {nombre: 'españaNITRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaACERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'espE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaJOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'espaOWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'espOQERR',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'espMIENTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'espUBIS',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaREKA',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaRICTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'españaOTRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'espaTHER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const participantesMexico = [
        {nombre: 'meTRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexiERTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexicoILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexiERR',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexiMIENTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexUBIS',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexiEKA',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexCTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'meTRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'mexiOTHER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]

    const participantesArgentina = [
        {nombre: 'argeTRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argenRTIJO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argenE GRILLO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argenOKKER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'arTOM CROWLEY',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argeQERR',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argenMIENTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argenUBIS',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentRREKA',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argenICTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argenTRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'argentTHER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
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
        {nombre: 'RICTO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'OTRO',foto: 'https://via.placeholder.com/300/09f/fff.png'},
        {nombre: 'ANOTHER',foto: 'https://via.placeholder.com/300/09f/fff.png'},
    ]
    
    return (
        <>
            <ul>
                {
                    paisParticipante(pais).map(item => (
                        <Item 
                            key={item.id}
                            nombre={item.nombre}
                            foto={item.foto}
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default DisplayParticipantes;
