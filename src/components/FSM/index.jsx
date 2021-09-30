import './FSM.css'
import Header from '../bloques/Header';
import Participantes from '../bloques/Participantes';
import TablaPosiciones from '../bloques/TablaPosiciones';
import Evolutivo from '../bloques/Evolutivo';
import Jurado from '../bloques/Jurado';
import HostyDj from '../bloques/HostYDj';
import Podcast from '../bloques/Podcast';
import BatallaRecomendada from '../bloques/BatallaRecomendada';
import Glosario from '../bloques/Glosario';

const FSM = () => {

    return (
        <>
            <body>
                <Header />
                <Participantes />
                <TablaPosiciones />
                <Evolutivo />
                <Jurado />
                <HostyDj />
                <Podcast />
                <BatallaRecomendada />
                <Glosario />
            </body>
        </>
    )
}

export default FSM;