import './Header.css'
import { useParams } from "react-router";
import titulo_peru from './media/titulo_peru.png';
import titulo_chile from './media/titulo_chile.png';
import titulo_españa from './media/titulo_españa.png';
import titulo_mexico from './media/titulo_mexico.png';
import titulo_argentina from './media/titulo_argentina.png';

const Header = () => {

    // const {pais} = useParams();

    const navHeaderList = [
        {
            router: 'peru',
            text: 'PERÚ',
        },
        // {
        //     router: 'chile',
        //     text: 'CHILE'
        // },
        // {
        //     router: 'españa',
        //     text: 'ESPAÑA'
        // },
        // {
        //     router: 'mexico',
        //     text: 'MEXICO'
        // },
        // {
        //     router: 'argentina',
        //     text: 'ARGENTINA'
        // }
    ]

    // const imagenTitulo = (cat) => {
    //     switch(cat) {
    //         case 'peru': return <img src={titulo_peru} alt="título" />;
    //         case 'chile': return <img src={titulo_chile} alt="título" />;
    //         case 'españa': return <img src={titulo_españa} alt="título" />;
    //         case 'mexico': return <img src={titulo_mexico} alt="título" />;
    //         case 'argentina': return <img className={pais == 'argentina' ? 'arg' : 'img'} src={titulo_argentina} alt="título" />;
    //         default: return <p className="hola">La categoría no existe</p>;
    //     }
    // }

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href='https://especiales.larepublica.pe/fms-noticias-y-estadisticas-sobre-freestyle/' rel="noreferrer">HOME</a>
                        </li>
                        <li>
                            <a href='https://especiales.larepublica.pe/fms-noticias-y-estadisticas-sobre-freestyle-peru/' rel="noreferrer">FMS PERU</a>
                        </li>
                        <li>
                            <a href='https://especiales.larepublica.pe/fms-noticias-y-estadisticas-sobre-freestyle-argentina/' rel="noreferrer">FMS ARGENTINA</a>
                        </li>
                    </ul>
                </nav>
                {/* {
                    imagenTitulo(pais)
                } */}
                <img src={`.${titulo_españa}`} alt="título" />
                <p className='bajada'>Repasa toda la información jornada tras jornada de la Freestyle Master Series.</p>
                {/* <p className={`ultima-fecha-${pais}`}>ACTUALIZADO AL 19-AGOSTO-2021 - 03:17 P. M.</p> */}
            </header>
        </>
    )
}

export default Header;