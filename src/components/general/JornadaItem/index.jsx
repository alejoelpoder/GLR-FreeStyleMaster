import './JornadaItem.css'

const JornadaItem = ({info, puesto, last, aster}) => {

    return (
        <>
            <td className={'jornadaItem'}><span className={`jornadaItem-puesto ${last}`}>{puesto}</span><span className={aster}>{info}</span></td>
        </>
    )
}

export default JornadaItem;