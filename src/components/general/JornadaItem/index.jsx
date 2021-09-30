import './JornadaItem.css'

const JornadaItem = ({info, puesto}) => {

    return (
        <>
            <td className={'jornadaItem'}><span className={'jornadaItem-puesto'}>{puesto}</span><span>{info}</span></td>
        </>
    )
}

export default JornadaItem;