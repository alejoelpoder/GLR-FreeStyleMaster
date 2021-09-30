import './TablaPosiciones.css'
import TituloBloque from '../../general/TituloBloque';
import Jornada from '../../Jornada';

const TablaPosiciones = () => {

    return (
        <>
            <div className="container-posiciones container-b">
                <TituloBloque titulo={'TABLA DE POSICIONES'} classBloque={'posiciones'} />
                <Jornada />
            </div>
        </>
    )
}

export default TablaPosiciones;