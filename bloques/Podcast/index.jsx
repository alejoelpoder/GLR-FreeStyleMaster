import './Podcast.css'
import TituloBloque from '../../general/TituloBloque';

const Podcast = () => {
    
    return (
        <>
            <div className="container-b">
                <TituloBloque titulo={'PODCAST - RIMAS Y GALLOS'} classBloque={'podcast'} />
                <div>
                    <iframe className="spotify-embed-iframe" title="podcast rimas y gallos" src="https://open.spotify.com/embed/show/1Ru47Q1VpzvJlDPflV6SIP" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
        </>
    )
}

export default Podcast;