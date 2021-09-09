import './MasterseriesContainer.css'
import MasterseriesCard from '../MasterseriesCard';

const MasterseriesContainer = () => {
    return (
        <div className="MasterseriesContainer">
            <MasterseriesCard 
                urlLink={'./FSM/peru'}
                urlIMG={'https://i.ibb.co/n1N31f0/peru-jpg.png'}
                altIMG={'Freestyle Masterseries Perú'}
                fms={'FMS PERÚ'}
            />
            <MasterseriesCard 
                urlLink={'./FSM/españa'}
                urlIMG={'https://i.ibb.co/5k77M2v/espa-a.png'}
                altIMG={'Freestyle Masterseries España'}
                fms={'FMS ESPAÑA'}
            />
            <MasterseriesCard
                urlLink={'./FSM/argentina'}
                urlIMG={'https://i.ibb.co/p0sgZX2/argent-jpg.png'}
                altIMG={'Freestyle Masterseries Argentina'}
                fms={'FMS ARGENTINA'}
            />
            <MasterseriesCard 
                urlLink={'./FSM/chile'}
                urlIMG={'https://i.ibb.co/vs9B3Vt/chile-jpg.png'}
                altIMG={'Freestyle Masterseries Chile'}
                fms={'FMS CHILE'}
            />
            <MasterseriesCard 
                urlLink={'./FSM/mexico'}
                urlIMG={'https://i.ibb.co/5FR40NH/mexico.png'}
                altIMG={'Freestyle Masterseries México'}
                fms={'FMS MÉXICO'}
            />
        </div>
    )
}

export default MasterseriesContainer;
