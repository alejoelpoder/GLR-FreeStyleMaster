import TituloBloque from '../../general/TituloBloque';
import DisplayUltimasNoticias from '../../DisplayUltimasNoticias';

const UltimasNoticias = () => {
    
    return (
        <>
            <div className="container-b">
                <TituloBloque titulo={'ULTIMAS NOTICIAS DE FMS'} classBloque={'noticias'} />
                <DisplayUltimasNoticias />
            </div>
        </>
    )
}

export default UltimasNoticias;