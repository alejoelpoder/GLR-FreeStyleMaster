// import './JornadaData.css'
import JornadaItem from '../general/JornadaItem'

const JornadaData = ({PTS}) => {

    const SCORE = [{id: 1,SCORE: 2436.5},{id: 2,SCORE: 1867},{id: 3,SCORE: 1101.5},{id: 4,SCORE: 945},{id: 5,SCORE: 875.5},{id: 6,SCORE: 600},{id: 7,SCORE: 422.5},{id: 8,SCORE: 150},{id: 9,SCORE: 85.5},{id: 10,SCORE: 10},]
    const BG = [{id: 1,BG: 5},{id: 2,BG: 4},{id: 3,BG: 3},{id: 4,BG: 4},{id: 5,BG: 2},{id: 6,BG: 2},{id: 7,BG: 1},{id: 8,BG: 1},{id: 9,BG: 1},{id: 10,BG: 0},]
    const BP = [{id: 1,BP: 0},{id: 2,BP: 1},{id: 3,BP: 1},{id: 4,BP: 1},{id: 5,BP: 2},{id: 6,BP: 2},{id: 7,BP: 4},{id: 8,BP: 3},{id: 9,BP: 4},{id: 10,BP: 5},]
    const BGR = [{id: 1,BGR: 0},{id: 2,BGR: 1},{id: 3,BGR: 1},{id: 4,BGR: 1},{id: 5,BGR: 2},{id: 6,BGR: 2},{id: 7,BGR: 4},{id: 8,BGR: 3},{id: 9,BGR: 4},{id: 10,BGR: 5},]
    const BPR = [{id: 1,BPR: 0},{id: 2,BPR: 1},{id: 3,BPR: 1},{id: 4,BPR: 1},{id: 5,BPR: 2},{id: 6,BPR: 2},{id: 7,BPR: 4},{id: 8,BPR: 3},{id: 9,BPR: 4},{id: 10,BPR: 5},]

    return (
        <>
            <div className="dataContainer">
                {
                    PTS?
                    <div className="jornada-data-element">
                        <td className="row-name">PTS</td>
                        {
                            PTS.map(item => (
                                <JornadaItem
                                    key={item.id}
                                    info={item.PTS}
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
                            SCORE.map(item => (
                                <JornadaItem
                                    key={item.id}
                                    info={item.SCORE}
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
                            BG.map(item => (
                                <JornadaItem
                                    key={item.id}
                                    info={item.BG}
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
                            BP.map(item => (
                                <JornadaItem
                                    key={item.id}
                                    info={item.BP}
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
                            BGR.map(item => (
                                <JornadaItem
                                    key={item.id}
                                    info={item.BGR}
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
                            BPR.map(item => (
                                <JornadaItem
                                    key={item.id}
                                    info={item.BPR}
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