// import './JornadaData.css'
import JornadaItem from '../general/JornadaItem'

const JornadaData = ({PTS}) => {

    const SCORE = [{id: 1,SCORE: 343},{id: 2,SCORE: 312},{id: 3,SCORE: 274.5},{id: 4,SCORE: 313},{id: 5,SCORE: 310},{id: 6,SCORE: 275},{id: 7,SCORE: 312.5},{id: 8,SCORE: 307.5},{id: 9,SCORE: 270},{id: 10,SCORE: 292.5},{id: 11,SCORE: 284},{id: 12,SCORE: 255.5}]
    const BG = [{id: 1,BG: 1},{id: 2,BG: 1},{id: 3,BG: 1},{id: 4,BG: 0},{id: 5,BG: 0},{id: 6,BG: 0},{id: 7,BG: 0},{id: 8,BG: 0},{id: 9,BG: 0},{id: 10,BG: 0},{id: 11,BG: 0},{id: 12,BG: 0}]
    const BP = [{id: 1,BP: 0},{id: 2,BP: 0},{id: 3,BP: 0},{id: 4,BP: 0},{id: 5,BP: 0},{id: 6,BP: 0},{id: 7,BP: 0},{id: 8,BP: 0},{id: 9,BP: 0},{id: 10,BP: 1},{id: 11,BP: 1},{id: 12,BP: 1}]
    const BGR = [{id: 1,BGR: 0},{id: 2,BGR: 0},{id: 3,BGR: 0},{id: 4,BGR: 1},{id: 5,BGR: 1},{id: 6,BGR: 1},{id: 7,BGR: 0},{id: 8,BGR: 0},{id: 9,BGR: 0},{id: 10,BGR: 0},{id: 11,BGR: 0},{id: 12,BGR: 0}]
    const BPR = [{id: 1,BPR: 0},{id: 2,BPR: 0},{id: 3,BPR: 0},{id: 4,BPR: 0},{id: 5,BPR: 0},{id: 6,BPR: 0},{id: 7,BPR: 1},{id: 8,BPR: 1},{id: 9,BPR: 1},{id: 10,BPR: 0},{id: 11,BPR: 0},{id: 12,BPR: 0}]

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