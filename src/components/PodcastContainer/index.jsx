import './PodcastContainer.css'

const Podcast = () => {
    return (
        <div className="Podcast">
            <a href="https://podcast.larepublica.pe/podcast/entre-rimas-y-gallos/" target="_blank" without rel="noreferrer" >
                <div className="podcast-logo">
                    <img src="https://i.ibb.co/XzfwBhq/microfono.png" alt="micrófono" />
                </div>
                <div className="podcast-texto">
                    <p className="first-t">PODCAST</p>
                    <p className="second-t">RIMAS Y GALLOS</p>
                </div>
            </a>
        </div>
    )
}

export default Podcast;