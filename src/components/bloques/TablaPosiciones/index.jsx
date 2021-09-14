import './TablaPosiciones.css'
import TituloBloque from '../../general/TituloBloque';
import Jornada from '../../Jornada';

const TablaPosiciones = () => {

    return (
        <>
            <div className="container-b">
                <TituloBloque titulo={'TABLA DE POSICIONES'} />
                <Jornada />
            </div>
        </>
    )
}

export default TablaPosiciones;