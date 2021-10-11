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
        {nombre: 'BLACKCODE',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53b8cd47df0752318dea.jpg'},
        {nombre: 'DIEGO MC',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53c5787de22cb32985f4.jpg'},
        {nombre: 'GHOST',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53cd80f61b1d187fbf92.jpg'},
        {nombre: 'JAIR WONG',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53d880f61b1d187fbf93.jpg'},
        {nombre: 'JAZE',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53e14f59fc6780416146.jpg'},
        {nombre: 'JOTA',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f54721ff7506eb13f77e2.jpg'},
        {nombre: 'KIAN',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f547d80f61b1d187fbf95.jpg'},
        {nombre: 'NEKROOS',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f548a80f61b1d187fbf96.jpg'},
        {nombre: 'SKILLL',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f549480f61b1d187fbf97.jpg'},
        {nombre: 'STICK',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f54a44aafb370e4643fc4.jpg'},
        {nombre: 'STRIKE',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f554d24ba7c305b6e130e.jpg'},
        {nombre: 'VIJAY',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f555624ba7c305b6e130f.jpg'},
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
