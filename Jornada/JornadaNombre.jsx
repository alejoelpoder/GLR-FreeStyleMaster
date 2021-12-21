import './JornadaNombre.css'
// import { useParams } from "react-router";
import JornadaItem from '../general/JornadaItem'

const JornadaNombre = ({participantes}) => {

    // const {pais} = useParams();

    // const nombresJornada = participantes.participantes

    return (
        <>
            <div className="nombreContainer">
                {
                    participantes?
                    <>
                        {
                            // participantes.filter(item => item.router == pais).map((item, i) => (
                                participantes?.participantes?.map((item, i) => (
                                <JornadaItem
                                    key={i}
                                    info={item}
                                    puesto={`${i + 1}${i + 1 >= 10? '' : '.'} `}
                                    last={`${i + 1 >= 10? 'last-tree' : '.'}`}
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