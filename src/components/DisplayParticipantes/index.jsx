import './DisplayParticipantes.css'
import Item from '../general/Item'
// import { useParams } from "react-router";
// import Modal from '../Modal';
import { useState } from 'react';
import blon from './PARTICIPANTES/BLON.png'
import chuty from './PARTICIPANTES/CHUTY.png'
import elekipo from './PARTICIPANTES/ELEKIPO.png'
import gazir from './PARTICIPANTES/GAZIR.png'
import hander from './PARTICIPANTES/HANDER.png'
import misterEgo from './PARTICIPANTES/MISTER-EGO.png'
import mnak from './PARTICIPANTES/MNAK.png'
import saraSocas from './PARTICIPANTES/SARA-SOCAS.png'
import skone from './PARTICIPANTES/SKONE.png'
import sweetPain from './PARTICIPANTES/SWEET-PAIN.png'
import tirpa from './PARTICIPANTES/TIRPA.png'
import zasko from './PARTICIPANTES/ZASKO.png'


const DisplayParticipantes = () => {

    const participantesArgentina = [
        {nombre: 'BLON',foto: blon, nombreReal: 'Pablo Perez Rueda', edad: 30, anteriorTemporada: '7mo puesto'},
        {nombre: 'CHUTY',foto: chuty, nombreReal: 'Sergio Castro Gisbert', edad: 28, anteriorTemporada: 'Invitado'},
        {nombre: 'ELEKIPO',foto: elekipo, nombreReal: 'Said El Mazzouji López', edad: 27, anteriorTemporada: '2do puesto ascenso'},
        {nombre: 'GAZIR',foto: gazir, nombreReal: 'Gabriel Sánchez', edad: 20, anteriorTemporada: '2do puesto'},
        {nombre: 'HANDER',foto: hander, nombreReal: 'Andrés Gómez Toledo', edad: 27, anteriorTemporada: '3er puesto ascenso'},
        {nombre: 'MISTER EGO',foto: misterEgo, nombreReal: 'Juan Miguel Ballesteros ', edad: 29, anteriorTemporada: '8vo puesto'},
        {nombre: 'MNAK',foto: mnak, nombreReal: 'Ignacio Romero Montero', edad: 24, anteriorTemporada: '4to puesto'},
        {nombre: 'SARA SOCAS',foto: saraSocas, nombreReal: 'Sara Socas Martín', edad: 24, anteriorTemporada: '1er puesto ascenso'},
        {nombre: 'SKONE',foto: skone, nombreReal: 'José Miguel Manzano Bazalo', edad: 31, anteriorTemporada: 'Invitado'},
        {nombre: 'SWEET PAIN',foto: sweetPain, nombreReal: 'José Manuel Rejón Rodríguez', edad: 24, anteriorTemporada: '3er puesto'},
        {nombre: 'TIRPA',foto: tirpa, nombreReal: 'Damián Marín Caballero', edad: 23, anteriorTemporada: '6to puesto'},
        {nombre: 'ZASKO',foto: zasko, nombreReal: 'Ginés Miñano Bernabéu', edad: 25, anteriorTemporada: '5to puesto'},
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
