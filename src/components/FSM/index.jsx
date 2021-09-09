import './FSM.css'
import { Switch, useParams } from "react-router";
import Header from '../bloques/Header';

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
                <h2>lol</h2>
            </body>
        </>
    )
}

export default FSM;