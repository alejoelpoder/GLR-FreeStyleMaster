import TextGlosario from "../general/TextGlosario";
import './DisplayGlosario.css'

const DisplayGlosario = ({GlosarioContent}) => {

    return (
        <>
            <ul>
                {
                    GlosarioContent.map(item => (
                            <TextGlosario
                                key={item.id}
                                titElement={item.tit}
                                contentElement={item.cont}
                            />
                    ))
                }
            </ul>
        </>
    )
}

export default DisplayGlosario;