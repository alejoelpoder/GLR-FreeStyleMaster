import './DisplayParticipantes.css'
import Item from '../general/Item'
// import { useParams } from "react-router";
// import Modal from '../Modal';
import { useState } from 'react';
import blackcode from './PARTICIPANTES/BLACKCODE.jpg'
import diegomc from './PARTICIPANTES/DIEGOMC.jpg'
import ghost from './PARTICIPANTES/GHOST.jpg'
import jairwong from './PARTICIPANTES/JAIRWONG.jpg'
import jaze from './PARTICIPANTES/JAZE.jpg'
import jota from './PARTICIPANTES/JOTA.jpg'
import kian from './PARTICIPANTES/KIAN.jpg'
import nekroos from './PARTICIPANTES/NEKROOS.jpg'
import skill from './PARTICIPANTES/SKILL.jpg'
import stick from './PARTICIPANTES/STICK.jpg'
import strike from './PARTICIPANTES/STRIKE.jpg'
import vijay from './PARTICIPANTES/VIJAY.jpg'


const DisplayParticipantes = () => {

    // const {pais} = useParams();

    // const paisParticipante = (cat) => {
    //     switch(cat) {
    //         case 'peru': return participantesPeru;
    //         default: return <p className="hola">La categoría no existe</p>;
    //     }
    // }

    const participantesPeru = [
        {nombre: 'BLACKCODE',foto: blackcode, nombreReal: 'Yofran Alexander Rivero Soto', edad: 25, anteriorTemporada: '3er puesto ascenso'},
        {nombre: 'DIEGO MC',foto: diegomc, nombreReal: 'Diego Verano', edad: 22, anteriorTemporada: '2do puesto ascenso'},
        {nombre: 'GHOST',foto: ghost, nombreReal: 'Roy Roger Ávila Pérez', edad: 20, anteriorTemporada: 'Clasificado 2021'},
        {nombre: 'JAIR WONG',foto: jairwong, nombreReal: 'Jair Wong', edad: 25, anteriorTemporada: '1er puesto ascenso'},
        {nombre: 'JAZE',foto: jaze, nombreReal: 'Juan Carlos Iwasaki La Puente', edad: 21, anteriorTemporada: '1er puesto'},
        {nombre: 'JOTA',foto: jota, nombreReal: 'Juan José Leyva Serrano', edad: 26, anteriorTemporada: '3er puesto'},
        {nombre: 'KIAN',foto: kian, nombreReal: 'Enrique Chumpitaz', edad: 21, anteriorTemporada: 'Clasificado 2021'},
        {nombre: 'NEKROOS',foto: nekroos, nombreReal: 'Cristopher Johansen García Orbezo', edad: 23, anteriorTemporada: '6to puesto'},
        {nombre: 'SKILL',foto: skill, nombreReal: 'Alberth Christopher Ferro Rodríguez', edad: 19, anteriorTemporada: '5to puesto'},
        {nombre: 'STICK',foto: stick, nombreReal: 'Jordy Stick Renteria Reyes', edad: 25, anteriorTemporada: '2do puesto'},
        {nombre: 'STRIKE',foto: strike, nombreReal: 'Diego Escobar', edad: 20, anteriorTemporada: '4to puesto'},
        {nombre: 'VIJAY',foto: vijay, nombreReal: 'Richard Vijay Rajoo', edad: 21, anteriorTemporada: '7mo puesto'},
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
                    participantesPeru.map(item => (
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
