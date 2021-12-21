import './Leyenda.css'
import JornadaItem from "../general/JornadaItem";

const Leyenda = () => {

    const siglas = ['PTS', 'SCORE', 'BG', 'BP', 'BGR', 'BPR', '🟡', '🔴', '🥇', '*']
    const sintagma = [
        'Puntos ganados por batalla',
        'Puntaje total obtenido por batalla',
        'Batalla ganada',
        'Batalla perdida',
        'Batalla ganada con réplica',
        'Batalla perdida con réplica',
        'Repechaje',
        'Descenso',
        'Mejor Mc de la jornada',
        'Batalla pendiente'
    ]

    return (
        <>
            <div className="leyenda">
                <h4>LEYENDA:</h4>
                <div className="dataContainer">
                    {
                        siglas?
                        <div className="jornada-data-element leyenda-container">
                            {
                                siglas.map(item => (
                                    <JornadaItem
                                        info={item}
                                        aster={`${item === '*'? 'aster' : ''}`}
                                    />
                                ))
                            }
                        </div>:
                        <p className="cargando">Cargando...</p>
                    }
                    {
                        sintagma?
                        <div className="jornada-data-element leyenda-container">
                            {
                                sintagma.map(item => (
                                    <JornadaItem
                                        info={item}
                                    />
                                ))
                            }
                        </div>:
                        <p className="cargando">Cargando...</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Leyenda;