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
import MejoresJornada from '../bloques/MejoresJornada';
import UltimasNoticias from '../bloques/UltimasNoticias';
import Footer from '../bloques/Footer';

const FSM = () => {

    return (
        <>
            <body>
                <Header />
                <Participantes />
                <TablaPosiciones />
                <Evolutivo />
                <MejoresJornada />
                <Jurado />
                <HostyDj />
                <UltimasNoticias />
                <Podcast />
                <BatallaRecomendada />
                <Glosario />
                <Footer />
            </body>
        </>
    )
}

export default FSM;