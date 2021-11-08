import JornadaItem from '../general/JornadaItem'

const JornadaData = ({numeros}) => {

    const Pts = numeros?.Pts
    const SCORE = numeros?.score
    const BG = numeros?.BG
    const BP = numeros?.BP
    const BGR = numeros?.BGR
    const BPR = numeros?.BPR

    return (
        <>
            <div className="dataContainer">
                {
                    Pts?
                    <div className="jornada-data-element">
                        <td className="row-name">PTS</td>
                        {
                            Pts.map((item, id) => (
                                <JornadaItem
                                    key={id}
                                    info={item}
                                />
                            ))
                        }
                    </div>:
                    <p className="cargando">Cargando...</p>
                }
                {
                    SCORE?
                    <div className="jornada-data-element">
                        <td className="row-name">SCORE</td>
                        {
                            SCORE.map((item, id) => (
                                <JornadaItem
                                    key={id}
                                    info={item}
                                />
                            ))
                        }
                    </div>:
                    <p className="cargando">Cargando...</p>
                }
                {
                    BG?
                    <div className="jornada-data-element">
                        <td className="row-name">BG</td>
                        {
                            BG.map((item, id) => (
                                <JornadaItem
                                    key={id}
                                    info={item}
                                />
                            ))
                        }
                    </div>:
                    <p className="cargando">Cargando...</p>
                }
                {
                    BP?
                    <div className="jornada-data-element">
                        <td className="row-name">BP</td>
                        {
                            BP.map((item, id) => (
                                <JornadaItem
                                    key={id}
                                    info={item}
                                />
                            ))
                        }
                    </div>:
                    <p className="cargando">Cargando...</p>
                }
                {
                    BGR?
                    <div className="jornada-data-element">
                        <td className="row-name">BGR</td>
                        {
                            BGR.map((item, id) => (
                                <JornadaItem
                                    key={id}
                                    info={item}
                                />
                            ))
                        }
                    </div>:
                    <p className="cargando">Cargando...</p>
                }
                {
                    BPR?
                    <div className="jornada-data-element">
                        <td className="row-name">BPR</td>
                        {
                            BPR.map((item, id) => (
                                <JornadaItem
                                    key={id}
                                    info={item}
                                />
                            ))
                        }
                    </div>:
                    <p className="cargando">Cargando...</p>
                }
            </div>
        </>
    )
}

export default JornadaData;