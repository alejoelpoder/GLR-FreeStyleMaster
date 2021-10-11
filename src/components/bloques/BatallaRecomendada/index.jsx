import './BatallaRecomendada.css'
import TituloBloque from '../../general/TituloBloque';

const BatallaRecomendada = () => {
    
    return (
        <>
            <div className="container-b">
                <TituloBloque titulo={'BATALLA RECOMENDADA'} classBloque={'batalla'} />
                <div className="container-video-batalla">
                    <iframe className="youtube-embed-iframe" width="560" height="315" src="https://www.youtube.com/embed/T5p0l0Fq3y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className="youtube-embed-iframe" width="560" height="315" src="https://www.youtube.com/embed/ZJH1YNtik8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default BatallaRecomendada;