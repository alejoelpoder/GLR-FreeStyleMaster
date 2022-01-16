import './DisplayParticipantes.css'
import Item from '../general/Item'
// import { useParams } from "react-router";
// import Modal from '../Modal';
import { useState } from 'react';
import aczino from './PARTICIPANTES/ACZINO.png'
import dante from './PARTICIPANTES/DANTE.png'
import dominic from './PARTICIPANTES/DOMINIC.png'
import garza from './PARTICIPANTES/GARZA.png'
import jonyBeltran from './PARTICIPANTES/JONY-BELTRAN.png'
import lancerLirical from './PARTICIPANTES/LANCER-LIRICAL.png'
import loboEstepario from './PARTICIPANTES/LOBO-ESTEPARIO.png'
import rapder from './PARTICIPANTES/RAPDER.png'
import rc from './PARTICIPANTES/RC.png'
import skiper from './PARTICIPANTES/SKIPER.png'
import yoiker from './PARTICIPANTES/YOIKER.png'
import zticma from './PARTICIPANTES/ZTICMA.png'


const DisplayParticipantes = () => {

    const participantesArgentina = [
        {nombre: 'ACZINO',foto: aczino, nombreReal: 'Mauricio Hernández', edad: 30, anteriorTemporada: 'Invitado'},
        {nombre: 'DANTE',foto: dante, nombreReal: 'Jaime Domínguez', edad: 23, anteriorTemporada: 'Ascenso'},
        {nombre: 'DOMINIC',foto: dominic, nombreReal: 'Gerardo Ramírez', edad: 24, anteriorTemporada: 'Invitado'},
        {nombre: 'GARZA',foto: garza, nombreReal: 'Jorge Garza', edad: 25, anteriorTemporada: '5to puesto'},
        {nombre: 'JONY BELTRAN',foto: jonyBeltran, nombreReal: 'Jonathan Beltrán', edad: 27, anteriorTemporada: '8vo puesto'},
        {nombre: 'LANCER LIRICAL',foto: lancerLirical, nombreReal: 'Junior Gámez', edad: 28, anteriorTemporada: 'Ascenso'},
        {nombre: 'LOBO ESTEPARIO',foto: loboEstepario, nombreReal: 'Ibsan Cueva', edad: 31, anteriorTemporada: '4to puesto'},
        {nombre: 'RAPDER',foto: rapder, nombreReal: 'Eder Lozano', edad: 26, anteriorTemporada: '1er puesto'},
        {nombre: 'RC',foto: rc, nombreReal: 'Abner Cruz', edad: 28, anteriorTemporada: '2do puesto'},
        {nombre: 'SKIPER',foto: skiper, nombreReal: 'Alan Ramírez', edad: 28, anteriorTemporada: '3er puesto'},
        {nombre: 'YOIKER',foto: yoiker, nombreReal: 'José Toporek', edad: 24, anteriorTemporada: '6to puesto'},
        {nombre: 'ZTICMA',foto: zticma, nombreReal: 'Nestor Castillo', edad: 28, anteriorTemporada: '7mo puesto'},
    ]

    const [modal, setModal] = useState({})
    // const [modalNombre, setModalNombre] = useState('')
    // const [modalIMG, setModalIMG] = useState('')
    // const [modalNombreReal, setModalNombreReal] = useState('')
    // const [modalEdad, setModalEdad] = useState()
    // const [modalTemporadaPasada, setModalTemporadaPasada] = useState('')
    const [modalActive, setModalActive] = useState(false)

    const handleModal = (nombreModal, imgModal, nombreRealModal, edadModal, temporadaPasadaModal) => {
        // setModalNombre(nombreModal) 
        // setModalIMG(imgModal)
        // setModalNombreReal(nombreRealModal)
        // setModalEdad(edadModal)
        // setModalTemporadaPasada(temporadaPasadaModal)
        setModal({
            nombre: nombreModal,
            img: imgModal,
            nombreReal: nombreRealModal,
            edad: edadModal,
            ultimaTemporada: temporadaPasadaModal
        })
        setModalActive(true)
    }
    const cerrarModal = () => {
        setModalActive(false)
    }

    return (
        <>
            <ul>
                {
                    participantesArgentina.map(item => (
                        <Item 
                            key={item.id}
                            nombre={item.nombre}
                            foto={item.foto}
                            onclick={() => handleModal(item.nombre, item.foto, item.nombreReal, item.edad, item.anteriorTemporada)}
                        />
                    ))
                }
               
            </ul>
            <div className={`modal-container ${modalActive? 'modal-open' : 'modal-close'}`}>
                <div>
                    <span onClick={cerrarModal} className='cerrar-modal'>X</span>
                    <img src={`.${modal.img}`} alt="img" />
                    <p>{modal.nombre}</p>
                    <span className='modal-nombre-real'>{`Nombre: ${modal.nombreReal}`}</span>
                    <span className='modal-edad'>{`Edad: ${modal.edad} años`}</span>
                    <span className='modal-nombre-temporada-pasada'>{`Resultado de la última temporada: ${modal.ultimaTemporada}`}</span>
                </div>
            </div>
        </>
    )
}

export default DisplayParticipantes;
