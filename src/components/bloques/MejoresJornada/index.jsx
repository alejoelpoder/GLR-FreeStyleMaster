import './MejoresJornada.css'
import TituloBloque from '../../general/TituloBloque';
import { useState, useEffect } from 'react';
// import { useParams } from "react-router";
import { getFirestore } from "../../../firebase";
import 'firebase/compat/firestore'

import katra from './MEJORESJORNADA/KATRA.png'
import klan from './MEJORESJORNADA/KLAN.jpg'
import larrix from './MEJORESJORNADA/LARRIX.jpg'
import mecha from './MEJORESJORNADA/MECHA.png'
import mp from './MEJORESJORNADA/MP.png'
import nacho from './MEJORESJORNADA/NACHO.png'
import naista from './MEJORESJORNADA/NAISTA.png'
import papo from './MEJORESJORNADA/PAPO.jpeg'
import stuart from './MEJORESJORNADA/STUART.jpg'
import tata from './MEJORESJORNADA/TATA.png'
import wolf from './MEJORESJORNADA/WOLF.png'
import zaina from './MEJORESJORNADA/ZAINA.jpg'
import def from './MEJORESJORNADA/def.png'


const MejoresJornada = () => {

    // const {pais} = useParams();

    const [state, setState] = useState(1)
    const [data, setData] = useState({})
    const [ptsCat, setPtsCat] = useState({})
    const [select, setSelect] = useState('easy-mode')

    const categorias1 = [{id: 1,tema: 'EASY MODE', key: 'easy-mode'},{id: 2,tema: 'TEMÁTICA', key: 'tematica'},{id: 3,tema: 'SANGRE', key: 'sangre'},{id: 4,tema: 'DELUXE', key: 'deluxe'}]
    const categorias2 = [{id: 5,tema: 'HARD MODE', key: 'hard-mode'},{id: 6,tema: 'RANDOM MODE', key: 'random-mode'},{id: 7,tema: 'A CAPELLA', key: 'a-capella'},{id: 8,tema: 'MVP', key: 'mvp'},]

    const mc = (cat) => {
        switch(cat) {
            case 'katra': return katra;
            case 'klan': return klan;
            case 'larrix': return larrix;
            case 'mecha': return mecha;
            case 'mp': return mp;
            case 'nacho': return nacho;
            case 'naista': return naista;
            case 'papo': return papo;
            case 'stuart': return stuart;
            case 'tata': return tata;
            case 'wolf': return wolf;
            case 'zaina': return zaina;
            case 'def' : return def;
            default: return ptsCat[select];
        }
    }

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
            default: return data[4];
        }
    }

    const cambiarJornadaCat = () => {
        let selectCatJor = document.getElementById('jornada-select-categoria');
        let JornadaSelectCat = selectCatJor.options[selectCatJor.selectedIndex].value
        setPtsCat(num(JornadaSelectCat))
        
    }

    const shoot = (a, b) => {
        setState(a)
        setSelect(b)
    }

    useEffect(() => {
        const dbQuery = getFirestore()
        const traer = dbQuery.collection('ARGENTINA')

        traer.get().then(({docs}) => {
            setData(docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
        
    }, [])

    useEffect(() => {
        if (data) {
            setPtsCat(num)
        }
    }, [data])

    return (
        <>
            <div className="container-b">
                <TituloBloque titulo={'MEJORES POR CATEGORIA'} classBloque={'batalla'} />
                <div className="mejores-jornada-sistema">
                    <form action="">
                        <select id="jornada-select-categoria" name='mejorCat' className={``} onChange={cambiarJornadaCat}>
                        {
                                data.length?
                                <>
                                    {
                                        data?.filter(item => item.estado !== false).map((item, i) => (
                                            <option selected value={i+1}>JORNADA {i+1}</option>
                                        ))
                                    }
                                </>:
                                <p className="cargando">Cargando...</p>
                            }
                        {/* <option value="1">JORNADA 1</option>
                        <option value="2">JORNADA 2</option> */}
                        {/* <option value="j2">JORNADA 2</option> */}
                        </select>
                    </form>
                    <div className="button-jornada-container">
                        {
                            categorias1.map((item, i) => 
                                <button key={i} className={`mejores-jornada-button ${item.id === state? 'item-cat-open' : 'item-cat-close'}`} onClick={() => shoot(item.id, item.key)} key={item.id}>{item.tema}</button>
                            )
                        }
                    </div>
                    
                    <div className="mejores-jornada-img">
                        {
                            ptsCat?
                                <img src={`.${mc(ptsCat[select])}`} alt="ganador" />
                            :
                            <p>cargando</p>
                        }
                    </div>

                    <div className="button-jornada-container">
                        {
                            categorias2.map((item) => 
                                <button className={`mejores-jornada-button ${item.id === state? 'item-cat-open' : 'item-cat-close'}`} onClick={() => shoot(item.id, item.key)} key={item.id}>{item.tema}</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MejoresJornada;