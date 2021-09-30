import './Jurado.css'
import TituloBloque from '../../general/TituloBloque';
import DisplayJurado from '../../DisplayJurado';

const Jurado = () => {
    
    return (
        <>
            <div className="container-jurado container-b">
                <TituloBloque titulo={'JURADO'} classBloque={'jurado'} />
                <DisplayJurado />
            </div>
        </>
    )
}

export default Jurado;