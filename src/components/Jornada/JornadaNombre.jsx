import './JornadaNombre.css'
import { Switch, useParams } from "react-router";
import JornadaItem from '../general/JornadaItem'

const JornadaNombre = ({participantes}) => {

    const {pais} = useParams();

    return (
        <>
            <div className="nombreContainer">
                {
                    participantes?
                    <>
                        {
                            participantes.filter(item => item.router == pais).map((item, i) => (
                                <JornadaItem
                                    key={i}
                                    info={item.nombre}
                                    puesto={`${item.id}${item.id >= 10? '' : '.'} `}
                                    last={`${item.id >= 10? 'last-tree' : '.'}`}
                                />
                            ))
                        }
                    </>:
                    <p className="cargando">Cargando...</p>
                }
            </div>
        </>
    )
}

export default JornadaNombre;