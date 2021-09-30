import './TextGlosario.css'

const TextGlosario = ({titElement, contentElement}) => {

    return (
        <>
            <div className="glosario-container">
                <span className="glosario-tit">{`${titElement}: `}</span><p className="glosario-text">{contentElement}</p>
            </div>
        </>
    )
}

export default TextGlosario;