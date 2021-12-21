import './Item.css'

const Item = ({nombre, foto, onclick}) => {
    // const modal = () => {
    //     alert('holka')
    // }
    return (
        <div onClick={onclick} className={'participante-box'}>
            <img className={'participantes-foto'} src={`.${foto}`} alt="foto" />
            <h3>{nombre}</h3>
        </div>
    )
}

export default Item;