import Item from '../general/Item'
import cno from './media/CNO.png'
import daro from './media/DARO.png'
import infranich from './media/INFRANICH.png'
import juan_ortelli from './media/JUAN-ORTELLI.png'
import obie from './media/OBIE-ONE-SHOT.png'
// import { Switch, useParams } from "react-router";

const DisplayJurado = () => {

    // const {pais} = useParams();

    // const paisJurado = (cat) => {
    //     switch(cat) {
    //         case 'peru': return juradoPeru;
    //         case 'chile': return juradoChile;
    //         case 'españa': return juradoEspaña;
    //         case 'mexico': return juradoMexico;
    //         case 'argentina': return juradoArgentina;
    //         default: return <p className="hola">La categoría no existe</p>;
    //     }
    // }

    const juradoPeru = [
        {nombre: 'CNO',foto: cno},
        {nombre: 'DARO',foto: daro},
        {nombre: 'INFRANICH',foto: infranich},
        {nombre: 'JUAN-ORTELLI',foto: juan_ortelli},
        {nombre: 'OBIE-ONE-SHOT',foto: obie},
    ]
    
    return (
        <>
            <ul>
                {
                    juradoPeru.map(item => (
                        <div key={item.id}>
                            <Item 
                                nombre={item.nombre}
                                foto={item.foto}
                            />
                        </div>
                    ))
                }
            </ul>
        </>
    )
}

export default DisplayJurado;
