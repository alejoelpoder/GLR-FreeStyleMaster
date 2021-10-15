import './MasterseriesCard.css'
import { Link } from "react-router-dom"

const MasterseriesCard = ({urlLink, urlIMG, altIMG, fms}) => {
    return (
        <Link to={urlLink} className="MasterseriesCard">
            <div className="logo-container">
                <img src={urlIMG} alt={altIMG} />
            </div>
            <h3>{fms}</h3>
        </Link>
    )
}

export default MasterseriesCard;