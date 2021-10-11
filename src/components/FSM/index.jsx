import './FSM.css'
import { Switch, useParams } from "react-router";
import Header from '../bloques/Header';
import Participantes from '../bloques/Participantes';
import TablaPosiciones from '../bloques/TablaPosiciones';
import MVPJornadas from '../MVPxJornadas';

const FSM = () => {

    const {pais} = useParams();

    const paisSelect = (cat) => {
        switch(cat) {
            case 'peru': return <Header titulo={'Perú'} />;
            case 'chile': return <Header titulo={'Chile'} />;
            case 'españa': return <Header titulo={'España'} />;
            case 'mexico': return <Header titulo={'México'} />;
            case 'argentina': return <Header titulo={'Argentina'} />;
            default: return <p className="hola">La categoría no existe</p>;
        }
    }

    return (
        <>
            <body>
                {paisSelect(pais)}
                <Participantes />
                <TablaPosiciones />
                <MVPJornadas />
            </body>
        </>
    )
}

export default FSM;