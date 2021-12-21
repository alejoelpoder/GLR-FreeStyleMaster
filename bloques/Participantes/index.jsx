import './Participantes.css'
import TituloBloque from '../../general/TituloBloque';
import DisplayParticipantes from '../../DisplayParticipantes';

const Participantes = () => {
    
    return (
        <>
            <div className="container-participantes container-b">
                <TituloBloque titulo={'PARTICIPANTES'} classBloque={'participantes'} />
                <DisplayParticipantes />
            </div>
        </>
    )
}

export default Participantes;
