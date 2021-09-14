// import './JornadaItem.css'

const JornadaItem = ({puesto, nombre}) => {

    return (
        <>
            <td>{`${puesto}. ${nombre}`}</td>
        </>
    )
}

export default JornadaItem;