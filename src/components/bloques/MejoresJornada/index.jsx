import './MejoresJornada.css'
import TituloBloque from '../../general/TituloBloque';
import { useState } from 'react';
import { useParams } from "react-router";

const MejoresJornada = () => {

    const {pais} = useParams();

    const [state, setState] = useState(1)

    const categorias1 = [{id: 1,tema: 'EASY MODE'},{id: 2,tema: 'TEMÁTICA'},{id: 3,tema: 'SANGRE'},{id: 4,tema: 'DELUXE'}]
    const categorias2 = [{id: 5,tema: 'HARD MODE'},{id: 6,tema: 'RANDOM MODE'},{id: 7,tema: 'A CAPELLA'},{id: 8,tema: 'MVP'},]

    const ganadoresJornada1 = [
        {
            id: 1,
            tema: 'EASY MODE',
            ganador: 'STICK',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/15/lg_6169f824edccb540413eefbb.jpg',
            router: 'peru'
        },
        {
            id: 2,
            tema: 'TEMÁTICA',
            ganador: 'NEKROOS',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/15/lg_6169f8578299c02c403a60ca.jpg',
            router: 'peru'
        },
        {
            id: 3,
            tema: 'SANGRE',
            ganador: 'JAZE',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/11/lg_6164c975a44d24554268af0b.jpg',
            router: 'peru'
        },
        {
            id: 4,
            tema: 'DELUX',
            ganador: 'BLACKCODE',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/15/lg_6169f8a88bbd2a2a6971ffa8.jpg',
            router: 'peru'
        },
        {
            id: 5,
            tema: 'HARD MODE',
            ganador: 'SKILL',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/15/lg_6169f8db6be25f535f783655.jpg',
            router: 'peru'
        },
        {
            id: 6,
            tema: 'RANDOM MODE',
            ganador: 'JAZE',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/11/lg_6164c975a44d24554268af0b.jpg',
            router: 'peru'
        },
        {
            id: 7,
            tema: 'A CAPELLA',
            ganador: 'STICK',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/15/lg_6169f824edccb540413eefbb.jpg',
            router: 'peru'
        },
        {
            id: 8,
            tema: 'MVP',
            ganador: 'JAZE',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/11/lg_6164c975a44d24554268af0b.jpg',
            router: 'peru'
        },
        {
            id: 1,
            tema: 'SANGRE',
            ganador: 'JOTA',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/11/lg_6164c9672d519b204b51baa3.jpg',
            router: 'chile'
        },
        {
            id: 4,
            tema: 'DELUX',
            ganador: 'JAZE',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/11/lg_6164c975a44d24554268af0b.jpg',
            router: 'chile'
        },
    ]
    const ganadoresJornada2 = [
        {
            id: 1,
            tema: 'EASY MODE',
            ganador: 'JOTA',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/11/lg_6164c9672d519b204b51baa3.jpg',
            router: 'peru'
        },
        {
            id: 2,
            tema: 'TEMÁTICA',
            ganador: 'JAZE',
            img: 'https://origin.cronosmedia.glr.pe/large/2021/10/11/lg_6164c975a44d24554268af0b.jpg',
            router: 'peru'
        },
    ]
    const [participantes, setParticipantes] = useState(ganadoresJornada1)
    
    const Jornadas_participantes = (cat) => {
        switch(cat) {
            case 'j1': return ganadoresJornada1;
            // case 'j2': return ganadoresJornada2;
            default: return ganadoresJornada1;
        }
    }

    const shoot = (a) => {
        setState(a)
    }

    const cambiarJornada = () => {
        let select = document.getElementById('jornada-select-categoria');
        let JornadaSelect = select.options[select.selectedIndex].value
        console.log(JornadaSelect)
        setParticipantes(Jornadas_participantes(JornadaSelect))
    }


    return (
        <>
            <div className="container-b">
                <TituloBloque titulo={'MEJORES POR CATEGORIA'} classBloque={'batalla'} />
                <div className="mejores-jornada-sistema">
                    <form action="">
                        <select id="jornada-select-categoria" className={``} onChange={cambiarJornada}>
                        <option value="j1">JORNADA 1</option>
                        {/* <option value="j2">JORNADA 2</option> */}
                        </select>
                    </form>
                    <div className="button-jornada-container">
                        {
                            categorias1.map((item) => 
                                <button className={`mejores-jornada-button ${item.id === state? 'item-cat-open' : 'item-cat-close'}`} onClick={() => shoot(item.id, item.tema)} key={item.id}>{item.tema}</button>
                            )
                        }
                    </div>
                    
                    <div className="mejores-jornada-img">
                        {
                            participantes.filter(item => item.id == state).filter(item => item.router == pais).map(item => 
                                <img src={item.img} alt="ganador" />
                            )
                        }
                    </div>

                    <div className="button-jornada-container">
                        {
                            categorias2.map((item) => 
                                <button className={`mejores-jornada-button ${item.id === state? 'item-cat-open' : 'item-cat-close'}`} onClick={() => shoot(item.id, item.tema)} key={item.id}>{item.tema}</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MejoresJornada;