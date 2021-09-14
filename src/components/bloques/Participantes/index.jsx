import './Participantes.css'
import TituloBloque from '../../general/TituloBloque';
import DisplayParticipantes from '../../DisplayParticipantes';

const Participantes = () => {
    
    return (
        <>
            <div className="container-b">
                <TituloBloque titulo={'PARTICIPANTES'} />
                <DisplayParticipantes />
            </div>
        </>
    )
}

export default Participantes;
