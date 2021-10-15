import './HostYDj.css'
import TituloBloque from '../../general/TituloBloque';
import DisplayHostYDj from '../../DisplayHostYDj';

const HostyDj = () => {
    
    return (
        <>
            <div className="container-hydj container-b">
                <TituloBloque titulo={'HOST Y DJ'} classBloque={'hostydj'} />
                <DisplayHostYDj />
            </div>
        </>
    )
}

export default HostyDj;