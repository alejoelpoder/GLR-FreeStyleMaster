import './MejoresJornada.css'
import TituloBloque from '../../general/TituloBloque';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { getFirestore } from "../../../firebase";
import 'firebase/compat/firestore'

import blackcode from './MEJORESJORNADA/BLACKCODE.png'
import diegomc from './MEJORESJORNADA/DIEGOMC.png'
import ghost from './MEJORESJORNADA/GHOST.png'
import jairwong from './MEJORESJORNADA/JAIRWONG.png'
import jaze from './MEJORESJORNADA/JAZE.png'
import jota from './MEJORESJORNADA/JOTA.png'
import kian from './MEJORESJORNADA/KIAN.png'
import nekroos from './MEJORESJORNADA/NEKROOS.png'
import skill from './MEJORESJORNADA/SKILL.png'
import stick from './MEJORESJORNADA/STICK.png'
import strike from './MEJORESJORNADA/STRIKE.png'
import vijay from './MEJORESJORNADA/VIJAY.png'


const MejoresJornada = () => {

    const {pais} = useParams();

    const [state, setState] = useState(1)
    const [data, setData] = useState({})
    const [ptsCat, setPtsCat] = useState({})
    const [select, setSelect] = useState('easy-mode')
    console.log('mejoresJornada')
    console.log(data)

    const categorias1 = [{id: 1,tema: 'EASY MODE', key: 'easy-mode'},{id: 2,tema: 'TEMÁTICA', key: 'tematica'},{id: 3,tema: 'SANGRE', key: 'sangre'},{id: 4,tema: 'DELUXE', key: 'deluxe'}]
    const categorias2 = [{id: 5,tema: 'HARD MODE', key: 'hard-mode'},{id: 6,tema: 'RANDOM MODE', key: 'random-mode'},{id: 7,tema: 'A CAPELLA', key: 'a-capella'},{id: 8,tema: 'MVP', key: 'mvp'},]

    const mc = (cat) => {
        switch(cat) {
            case 'blackcode': return blackcode;
            case 'diegomc': return diegomc;
            case 'ghost': return ghost;
            case 'jairwong': return jairwong;
            case 'jaze': return jaze;
            case 'jota': return jota;
            case 'kian': return kian;
            case 'nekroos': return nekroos;
            case 'skill': return skill;
            case 'stick': return stick;
            case 'strike': return strike;
            case 'vijay': return vijay;
            default: return ptsCat[select];
        }
    }

    const num = (cat) => {
        switch(cat) {
            case '1': return data[0];
            case '2': return data[1];
            case '3': return data[2];
            default: return data[0];
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
        const traer = dbQuery.collection(pais.toUpperCase())

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
                        <option value="1">JORNADA 1</option>
                        <option value="2">JORNADA 2</option>
                        {/* <option value="j2">JORNADA 2</option> */}
                        </select>
                    </form>
                    <div className="button-jornada-container">
                        {
                            categorias1.map((item) => 
                                <button className={`mejores-jornada-button ${item.id === state? 'item-cat-open' : 'item-cat-close'}`} onClick={() => shoot(item.id, item.key)} key={item.id}>{item.tema}</button>
                            )
                        }
                    </div>
                    
                    <div className="mejores-jornada-img">
                        {
                            ptsCat?
                                <img src={mc(ptsCat[select])} alt="ganador" />
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