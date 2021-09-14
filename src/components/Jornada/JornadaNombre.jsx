import './JornadaNombre.css'
import JornadaItem from '../general/JornadaItem'

const JornadaNombre = () => {

    const participantes = [
        {id: 1,nombre: 'DANTE'},
        {id: 2,nombre: 'RC'},
        {id: 3,nombre: 'GARZA'},
        {id: 4,nombre: 'RAPDER'},
        {id: 5,nombre: 'SKIPER'},
        {id: 6,nombre: 'ZTICMA'},
        {id: 7,nombre: 'YOIKER'},
        {id: 8,nombre: 'LANCER L.'},
        {id: 9,nombre: 'JONY B.'},
        {id: 10,nombre: 'LOBO E.'}
    ]

    return (
        <>
            <div className="nombreContainer">
                {
                    participantes?
                    <>
                        {
                            participantes.map(item => (
                                <JornadaItem
                                    key={item.id}
                                    puesto={item.id}
                                    nombre={item.nombre}
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