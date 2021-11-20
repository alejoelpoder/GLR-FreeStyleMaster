import './Jornada.css'
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import JornadaNombre from './JornadaNombre';
import JornadaData from './JornadaData';
import Leyenda from '../Leyenda';
import { getFirestore } from "../../firebase";
import 'firebase/compat/firestore'

const Jornada = () => {

    const [data, setData] = useState({})
    const [pts, setPts] = useState({})
    // const {pais} = useParams();

    const num = (cat) => {
        switch(cat) {
            case '1': return data[0];
            case '2': return data[4];
            case '3': return data[5];
            case '4': return data[6];
            case '5': return data[7];
            case '6': return data[8];
            case '7': return data[9];
            case '8': return data[10];
            case '9': return data[11];
            case '10': return data[1];
            case '11': return data[2];
            case '12': return data[3];
            default: return data[0];
        }
    }

    const cambiarJornada = () => {
        let select = document.getElementById('jornada-select');
        let JornadaSelect = select.options[select.selectedIndex].value
        setPts(num(JornadaSelect))

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
                    <select id="jornada-select" className={`jornada-select-peru`} onChange={cambiarJornada}>

                            {
                                data.length?
                                <>
                                    {
                                        data?.filter(item => item.estado !== false).map((item, i) => (
                                            <option value={i+1}>JORNADA {i+1}</option>
                                        ))
                                    }
                                </>:
                                <p className="cargando">Cargando...</p>
                            }
                        
                        
                    {/* <option value="1">JORNADA 1</option>
                    <option className={``} value="2">JORNADA 2</option> */}
                    </select>
                </form>
                <div className={'fullContainer'}>
                    <div className={'elementosJornadaContainer'}>
                            <>
                                <JornadaNombre participantes={pts} />
                                <JornadaData numeros={pts} />
                            </>
                    </div>
                    <Leyenda />
                </div>
            </div>
        </>
    )
}

export default Jornada;