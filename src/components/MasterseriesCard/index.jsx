import './MasterseriesCard.css'

const MasterseriesCard = ({urlLink, urlIMG, altIMG, fms}) => {
    return (
        <a href={urlLink} className="MasterseriesCard">
            <div className="logo-container">
                <img src={urlIMG} alt={altIMG} />
            </div>
            <h3>{fms}</h3>
        </a>
    )
}

export default MasterseriesCard;