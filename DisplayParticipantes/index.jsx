import './DisplayParticipantes.css'
import Item from '../general/Item'
// import { useParams } from "react-router";
// import Modal from '../Modal';
import { useState } from 'react';
import katra from './PARTICIPANTES/KATRA.png'
import klan from './PARTICIPANTES/KLAN.png'
import larrix from './PARTICIPANTES/LARRIX.png'
import mecha from './PARTICIPANTES/MECHA.png'
import mp from './PARTICIPANTES/MP.png'
import nacho from './PARTICIPANTES/NACHO.png'
import naista from './PARTICIPANTES/NAISTA.png'
import papo from './PARTICIPANTES/PAPO.png'
import stuart from './PARTICIPANTES/STUART.png'
import tata from './PARTICIPANTES/TATA.png'
import wolf from './PARTICIPANTES/WOLF.png'
import zaina from './PARTICIPANTES/ZAINA.png'


const DisplayParticipantes = () => {

    const participantesArgentina = [
        {nombre: 'KATRA',foto: katra, nombreReal: 'Gonzalo Joaquin Tarillo', edad: 23, anteriorTemporada: 'Clasificado 2021'},
        {nombre: 'KLAN',foto: klan, nombreReal: 'Lucas Matías Santo', edad: 27, anteriorTemporada: '4to puesto'},
        {nombre: 'LARRIX',foto: larrix, nombreReal: 'Lucas Larrazabal', edad: 21, anteriorTemporada: '2do puesto ascenso'},
        {nombre: 'MECHA',foto: mecha, nombreReal: 'Thomas Nahuel Antonelli', edad: 20, anteriorTemporada: '3er puesto'},
        {nombre: 'MP',foto: mp, nombreReal: 'Miguel Alfredo Pérez', edad: 21, anteriorTemporada: 'Clasificado 2021'},
        {nombre: 'NACHO',foto: nacho, nombreReal: 'Ignacio Agustín Castro', edad: 22, anteriorTemporada: '5to puesto'},
        {nombre: 'NAISTA',foto: naista, nombreReal: 'Yamil Durán', edad: 21, anteriorTemporada: '1er puesto ascenso'},
        {nombre: 'PAPO',foto: papo, nombreReal: 'Alejandro Andrés Lococo', edad: 29, anteriorTemporada: '2do puesto'},
        {nombre: 'STUART',foto: stuart, nombreReal: 'Ramiro José Verdoljak', edad: 26, anteriorTemporada: '1er puesto'},
        {nombre: 'TATA',foto: tata, nombreReal: 'Cristian Javier Sosa ', edad: 33, anteriorTemporada: 'Clasificado 2021'},
        {nombre: 'WOLF',foto: wolf, nombreReal: 'Carlos Damian Mansilla', edad: 26, anteriorTemporada: '6to puesto'},
        {nombre: 'ZAINA',foto: zaina, nombreReal: 'Lautaro Saina', edad: 18, anteriorTemporada: '3er puesto ascenso'},
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
