import './Jornada.css'
import { useState } from 'react';
import JornadaNombre from './JornadaNombre';
import JornadaData from './JornadaData';
import Leyenda from '../Leyenda';

const Jornada = () => {

    const participantesJornada_1 = [{id: 1,nombre: 'DANTE', router: 'peru'},{id: 2,nombre: 'RC', router: 'peru'},{id: 3,nombre: 'GARZA', router: 'peru'},{id: 4,nombre: 'RAPDER', router: 'peru'},{id: 5,nombre: 'SKIPER', router: 'peru'},{id: 6,nombre: 'ZTICMA', router: 'peru'},{id: 7,nombre: 'YOIKER', router: 'peru'},{id: 8,nombre: 'LANCER L.', router: 'peru'},{id: 9,nombre: 'JONY B.', router: 'peru'},{id: 10,nombre: 'LOBO E.', router: 'peru'},{id: 1,nombre: 'chileDANTE', router: 'chile'},{id: 2,nombre: 'chileRC', router: 'chile'},{id: 3,nombre: 'chileGARZA', router: 'chile'},{id: 4,nombre: 'chileRAPDER', router: 'chile'},{id: 5,nombre: 'chileSKIPER', router: 'chile'},{id: 6,nombre: 'chileZTICMA', router: 'chile'},{id: 7,nombre: 'chileYOIKER', router: 'chile'},{id: 8,nombre: 'chileLANCER L.', router: 'chile'},{id: 9,nombre: 'chileJONY B.', router: 'chile'},{id: 10,nombre: 'chileLOBO E.', router: 'chile'}]
    const participantesJornada_2 = [{id: 1,nombre: '2DANTE', router: 'peru'},{id: 2,nombre: '2RC', router: 'peru'},{id: 3,nombre: '2GARZA', router: 'peru'},{id: 4,nombre: '2RAPDER', router: 'peru'},{id: 5,nombre: '2SKIPER', router: 'peru'},{id: 6,nombre: '2ZTICMA', router: 'peru'},{id: 7,nombre: '2YOIKER', router: 'peru'},{id: 8,nombre: '2LANCER L.', router: 'peru'},{id: 9,nombre: '2JONY B.', router: 'peru'},{id: 10,nombre: '2LOBO E.', router: 'peru'},{id: 1,nombre: 'chile2DANTE', router: 'chile'},{id: 2,nombre: 'chile2RC', router: 'chile'},{id: 3,nombre: 'chile2GARZA', router: 'chile'},{id: 4,nombre: 'chile2RAPDER', router: 'chile'},{id: 5,nombre: 'chile2SKIPER', router: 'chile'},{id: 6,nombre: 'chile2ZTICMA', router: 'chile'},{id: 7,nombre: 'chile2YOIKER', router: 'chile'},{id: 8,nombre: 'chile2LANCER L.', router: 'chile'},{id: 9,nombre: 'chile2JONY B.', router: 'chile'},{id: 10,nombre: 'chile2LOBO E.', router: 'chile'}]

    const PTS_1 = [{id: 1, PTS: 20},{id: 2, PTS: 17},{id: 3, PTS: 14},{id: 4, PTS: 11},{id: 5, PTS: 8},{id: 6, PTS: 5},{id: 7, PTS: 3},{id: 8, PTS: 2},{id: 9, PTS: 1},{id: 10, PTS: 0}]
    const PTS_2 = [{id: 1, PTS: 220},{id: 2, PTS: 217},{id: 3, PTS: 214},{id: 4, PTS: 211},{id: 5, PTS: 28},{id: 6, PTS: 25},{id: 7, PTS: 23},{id: 8, PTS: 22},{id: 9, PTS: 21},{id: 10, PTS: 20}]

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
                    <select id="jornada-select" onChange={cambiarJornada}>
                    <option value="j1">Jornada 1</option>
                    <option value="j2">Jornada 2</option>
                    </select>
                </form>
                <JornadaNombre participantes={participantes} />
                <JornadaData PTS={PTS} />
                <Leyenda />
            </div>
        </>
    )
}

export default Jornada;