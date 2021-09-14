import './Item.css'

const Item = ({nombre, foto}) => {

    return (
        <>
            <h3>{nombre}</h3>
            <img src={foto} alt="foto" />
        </>
    )
}

export default Item;