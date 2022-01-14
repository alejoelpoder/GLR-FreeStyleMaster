import './TituloBloque.css'
// import { Switch, useParams } from "react-router";

const TituloBloque = ({titulo, classBloque}) => {

    // const {pais} = useParams();
    
    return (
        <>
            <h2 className={`titulo-argentina bloque-${classBloque}`}>{titulo}</h2>
        </>
    )
}

export default TituloBloque;