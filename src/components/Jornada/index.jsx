import './Jornada.css'
import { useState } from 'react';
import JornadaNombre from './JornadaNombre';
import JornadaData from './JornadaData';
import Leyenda from '../Leyenda';
import { Switch, useParams } from "react-router";

const Jornada = () => {

    const {pais} = useParams();

    const participantesJornada_1 = [{id: 1,nombre: 'JAZE', router: 'peru'},{id: 2,nombre: 'STICK', router: 'peru'},{id: 3,nombre: 'NEKROOS', router: 'peru'},{id: 4,nombre: 'BLACK CODE', router: 'peru'},{id: 5,nombre: 'KIAN', router: 'peru'},{id: 6,nombre: 'JOTA', router: 'peru'},{id: 7,nombre: 'VIJAY', router: 'peru'},{id: 8,nombre: 'DIEGO MC', router: 'peru'},{id: 9,nombre: 'SKILL', router: 'peru'},{id: 10,nombre: 'STRIKE', router: 'peru'},{id: 11,nombre: 'JAIR WONG', router: 'peru'},{id: 12,nombre: 'GHOST', router: 'peru'},{id: 1,nombre: 'chileDANTE', router: 'chile'},{id: 2,nombre: 'chileRC', router: 'chile'},{id: 3,nombre: 'chileGARZA', router: 'chile'},{id: 4,nombre: 'chileRAPDER', router: 'chile'},{id: 5,nombre: 'chileSKIPER', router: 'chile'},{id: 6,nombre: 'chileZTICMA', router: 'chile'},{id: 7,nombre: 'chileYOIKER', router: 'chile'},{id: 8,nombre: 'chileLANCER L.', router: 'chile'},{id: 9,nombre: 'chileJONY B.', router: 'chile'},{id: 10,nombre: 'chileLOBO E.', router: 'chile'},{id: 11,nombre: 'chileLOBO11E.', router: 'chile'},{id: 12,nombre: 'chileLOBO12E.', router: 'chile'}]
    const participantesJornada_2 = [{id: 1,nombre: '2DANTE', router: 'peru'},{id: 2,nombre: '2RC', router: 'peru'},{id: 3,nombre: '2GARZA', router: 'peru'},{id: 4,nombre: '2RAPDER', router: 'peru'},{id: 5,nombre: '2SKIPER', router: 'peru'},{id: 6,nombre: '2ZTICMA', router: 'peru'},{id: 7,nombre: '2YOIKER', router: 'peru'},{id: 8,nombre: '2LANCER L.', router: 'peru'},{id: 9,nombre: '2JONY B.', router: 'peru'},{id: 10,nombre: '2LOBO E.', router: 'peru'},{id: 11,nombre: '2LOBO11E.', router: 'peru'},{id: 12,nombre: '2LOBO12E.', router: 'peru'},{id: 1,nombre: 'chile2DANTE', router: 'chile'},{id: 2,nombre: 'chile2RC', router: 'chile'},{id: 3,nombre: 'chile2GARZA', router: 'chile'},{id: 4,nombre: 'chile2RAPDER', router: 'chile'},{id: 5,nombre: 'chile2SKIPER', router: 'chile'},{id: 6,nombre: 'chile2ZTICMA', router: 'chile'},{id: 7,nombre: 'chile2YOIKER', router: 'chile'},{id: 8,nombre: 'chile2LANCER L.', router: 'chile'},{id: 9,nombre: 'chile2JONY B.', router: 'chile'},{id: 10,nombre: 'chile2LOBO E.', router: 'chile'},{id: 11,nombre: '2chileLOBO11E.', router: 'chile'},{id: 12,nombre: '2chileLOBO12E.', router: 'chile'}]

    const PTS_1 = [{id: 1, PTS: 3},{id: 2, PTS: 3},{id: 3, PTS: 3},{id: 4, PTS: 2},{id: 5, PTS: 2},{id: 6, PTS: 2},{id: 7, PTS: 1},{id: 8, PTS: 1},{id: 9, PTS: 1},{id: 10, PTS: 0},{id: 11, PTS: 0},{id: 12, PTS: 0}]
    const PTS_2 = [{id: 1, PTS: 220},{id: 2, PTS: 217},{id: 3, PTS: 214},{id: 4, PTS: 211},{id: 5, PTS: 28},{id: 6, PTS: 25},{id: 7, PTS: 23},{id: 8, PTS: 22},{id: 9, PTS: 21},{id: 10, PTS: 20},{id: 11, PTS: 21},{id: 12, PTS: 22}]

    const [participantes, setParticipantes] = useState(participantesJornada_1)
    const [PTS, setPTS] = useState(PTS_1)

    const Jornadas_participantes = (cat) => {
        switch(cat) {
            case 'j1': return participantesJornada_1;
            case 'j2': return participantesJornada_2;
            default: return participantesJornada_1;
        }
    }

    const Jornadas_PTS = (cat) => {
        switch(cat) {
            case 'j1': return PTS_1;
            case 'j2': return PTS_2;
            default: return PTS_1;
        }
    }

    const cambiarJornada = () => {
        let select = document.getElementById('jornada-select');
        let JornadaSelect = select.options[select.selectedIndex].value

        setParticipantes(Jornadas_participantes(JornadaSelect))
        setPTS(Jornadas_PTS(JornadaSelect))
    }

    return (
        <>
            <div className="jornada-container">
                <form action="">
                    <select id="jornada-select" className={`jornada-select-${pais}`} onChange={cambiarJornada}>
                    <option value="j1">JORNADA 1</option>
                    </select>
                </form>
                <div className={'fullContainer'}>
                    <div className={'elementosJornadaContainer'}>
                        <JornadaNombre participantes={participantes} />
                        <JornadaData PTS={PTS} />
                    </div>
                    <Leyenda />
                </div>
            </div>
        </>
    )
}

export default Jornada;