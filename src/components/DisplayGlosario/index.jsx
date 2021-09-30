import TextGlosario from "../general/TextGlosario";
import './DisplayGlosario.css'

const DisplayGlosario = ({GlosarioContent}) => {

    return (
        <>
            <ul>
                {
                    GlosarioContent.map(item => (
                        <li className="display-glosario-li" key={item.id}>
                            <TextGlosario
                                titElement={item.tit}
                                contentElement={item.cont}
                            />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default DisplayGlosario;