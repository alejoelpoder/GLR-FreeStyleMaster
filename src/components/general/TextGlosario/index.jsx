import './TextGlosario.css'
// import { Switch, useParams } from "react-router";

const TextGlosario = ({titElement, contentElement}) => {

    // const {pais} = useParams();

    return (
        <>
            <div className="glosario-container">
                <p className="glosario-text"><span className={`glosario-tit glosario-tit-mexico`}>{`${titElement}: `}</span>{contentElement}</p>
            </div>
        </>
    )
}

export default TextGlosario;