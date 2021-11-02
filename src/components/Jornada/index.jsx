import './Jornada.css'
import { useState, useEffect } from 'react';
import JornadaNombre from './JornadaNombre';
import JornadaData from './JornadaData';
import Leyenda from '../Leyenda';
import { useParams } from "react-router";

import { getFirestore } from "../../firebase";
import firebase from "@firebase/app-compat";
import 'firebase/compat/firestore'

const Jornada = () => {

    const [data, setData] = useState({})
    const [pts, setPts] = useState({})
    const {pais} = useParams();

    const num = (cat) => {
        switch(cat) {
            case '1': return data[0];
            case '2': return data[1];
            default: return data[0];
        }
    }

    const cambiarJornada = () => {
        let select = document.getElementById('jornada-select');
        let JornadaSelect = select.options[select.selectedIndex].value
        setPts(num(JornadaSelect))
        // console.log(JornadaSelect)
    }

    useEffect(() => {
        const dbQuery = getFirestore()
        const traer = dbQuery.collection('PERU')

        traer.get().then(({docs}) => {
            setData(docs.map(doc => ({id: doc.id, ...doc.data()})))
            // setDataNum(data[0])
        })
        
    }, [])

    useEffect(() => {
        setPts(num)
    }, [data])

    return (
        <>
            <div className="jornada-container">
                <form action="">
                    <select id="jornada-select" className={`jornada-select-${pais}`} onChange={cambiarJornada}>
                    <option value="1">JORNADA 1</option>
                    <option value="2">JORNADA 2</option>
                    </select>
                </form>
                <div className={'fullContainer'}>
                    <div className={'elementosJornadaContainer'}>
                            <>
                                <JornadaNombre participantes={pts} />
                                <JornadaData numeros={data[0]} />
                            </>
                    </div>
                    <Leyenda />
                </div>
            </div>
        </>
    )
}

export default Jornada;