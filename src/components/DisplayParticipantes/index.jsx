import './DisplayParticipantes.css'
import Item from '../general/Item'
import { useParams } from "react-router";
import Modal from '../Modal';
import { useState } from 'react';

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
        {nombre: 'BLACKCODE',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53b8cd47df0752318dea.jpg', nombreReal: 'Yofran Alexander Rivero Soto', edad: 25, anteriorTemporada: '3er puesto ascenso'},
        {nombre: 'DIEGO MC',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53c5787de22cb32985f4.jpg', nombreReal: 'Diego Verano', edad: 22, anteriorTemporada: '2do puesto ascenso'},
        {nombre: 'GHOST',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53cd80f61b1d187fbf92.jpg', nombreReal: 'Roy Roger Ávila Pérez', edad: 20, anteriorTemporada: 'Clasificado 2021'},
        {nombre: 'JAIR WONG',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53d880f61b1d187fbf93.jpg', nombreReal: 'Jair Wong', edad: 25, anteriorTemporada: '1er puesto ascenso'},
        {nombre: 'JAZE',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f53e14f59fc6780416146.jpg', nombreReal: 'Juan Carlos Iwasaki La Puente', edad: 21, anteriorTemporada: '1er puesto'},
        {nombre: 'JOTA',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f54721ff7506eb13f77e2.jpg', nombreReal: 'Juan José Leyva Serrano', edad: 26, anteriorTemporada: '3er puesto'},
        {nombre: 'KIAN',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f547d80f61b1d187fbf95.jpg', nombreReal: 'Enrique Chumpitaz', edad: 21, anteriorTemporada: 'Clasificado 2021'},
        {nombre: 'NEKROOS',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f548a80f61b1d187fbf96.jpg', nombreReal: 'Cristopher Johansen García Orbezo', edad: 23, anteriorTemporada: '6to puesto'},
        {nombre: 'SKILL',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f549480f61b1d187fbf97.jpg', nombreReal: 'Alberth Christopher Ferro Rodríguez', edad: 19, anteriorTemporada: '5to puesto'},
        {nombre: 'STICK',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f54a44aafb370e4643fc4.jpg', nombreReal: 'Jordy Stick Renteria Reyes', edad: 25, anteriorTemporada: '2do puesto'},
        {nombre: 'STRIKE',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f554d24ba7c305b6e130e.jpg', nombreReal: 'Diego Escobar', edad: 20, anteriorTemporada: '4to puesto'},
        {nombre: 'VIJAY',foto: 'https://origin.cronosmedia.glr.pe/large/2021/10/07/lg_615f555624ba7c305b6e130f.jpg', nombreReal: 'Richard Vijay Rajoo', edad: 21, anteriorTemporada: '7mo puesto'},
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

    const [modalNombre, setModalNombre] = useState('')
    const [modalIMG, setModalIMG] = useState('')
    const [modalNombreReal, setModalNombreReal] = useState('')
    const [modalEdad, setModalEdad] = useState()
    const [modalTemporadaPasada, setModalTemporadaPasada] = useState('')
    const [modalActive, setModalActive] = useState(false)

    const modal = (nombreModal, imgModal, nombreRealModal, edadModal, temporadaPasadaModal) => {
        setModalNombre(nombreModal) 
        setModalIMG(imgModal)
        setModalNombreReal(nombreRealModal)
        setModalEdad(edadModal)
        setModalTemporadaPasada(temporadaPasadaModal)
        setModalActive(true)
    }
    const cerrarModal = () => {
        setModalActive(false)
    }

    return (
        <>
            <ul>
                {
                    paisParticipante(pais).map(item => (
                        <Item 
                            key={item.id}
                            nombre={item.nombre}
                            foto={item.foto}
                            onclick={() => modal(item.nombre, item.foto, item.nombreReal, item.edad, item.anteriorTemporada)}
                        />
                    ))
                }
               
            </ul>
            <div className={`modal-container ${modalActive? 'modal-open' : 'modal-close'}`}>
                <div>
                    <span onClick={cerrarModal} className='cerrar-modal'>X</span>
                    <img src={modalIMG} alt="img" />
                    <p>{modalNombre}</p>
                    <span className='modal-nombre-real'>{`Nombre: ${modalNombreReal}`}</span>
                    <span className='modal-edad'>{`Edad: ${modalEdad} años`}</span>
                    <span className='modal-nombre-temporada-pasada'>{`Resultado de la última temporada: ${modalTemporadaPasada}`}</span>
                </div>
            </div>
        </>
    )
}

export default DisplayParticipantes;
