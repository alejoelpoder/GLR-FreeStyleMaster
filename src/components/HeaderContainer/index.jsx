import './HeaderContainer.css'
import Title from '../Title';
import Descripcion from '../Descripcion';
import MasterseriesContainer from '../MasterseriesContainer';
import Podcast from '../PodcastContainer';

const HeaderContainer = () => {
    return (
        <>
            <div className="container">
                <div className="subcontainer">
                    <div className="text-container">
                        <Title title_1={"FREESTYLE MASTER"} title_2={"SERIES NEWS"} />
                        <Descripcion
                            d1={'La más completa información de todas las ligas de FMS actualizada en tiempo real.'} 
                            d2={'Estadísticas, entrevistas, resúmenes y análisis de cada jornada en un solo sitio.'}
                        />
                    </div>
                    <MasterseriesContainer />
                    <Podcast />
                </div>
            </div>
        </>
    )
}

export default HeaderContainer;

