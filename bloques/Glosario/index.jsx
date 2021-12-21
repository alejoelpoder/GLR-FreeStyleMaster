import './Glosario.css'
import TituloBloque from '../../general/TituloBloque';
import DisplayGlosario from '../../DisplayGlosario';

const Glosario = () => {

    const Content_1 = [
        {tit: 'Minuto de presentación',cont: 'Entrada libre del MC por 60 segundos.'},
        {tit: 'Easy Mode',cont: 'Ronda con una palabra aleatoria cada 10 segundos.'},
        {tit: 'Hard Mode',cont: 'Ronda con una palabra aleatoria cada 5 segundos.'},
        {tit: 'Extreme Mode',cont: 'Ronda con una palabra aleatoria cada 2 segundos.'},
        {tit: 'Temáticas',cont: 'Rondas de 4 patrones improvisados sobre 2 temáticas establecidas ida y vuelta.'},
        {tit: 'Random Mode',cont: 'Cuatro rondas de 8x8 entre imás, terminaciones, personajes contrapuestos u objetos.'},
        {tit: 'Minutos libres',cont: 'Minutos clásicos sin temáticas por 60 segundos.'},
        {tit: 'Deluxe',cont: 'Ronda final de una batalla de formato FMS dividida en a capella sin beat.'},
        {tit: 'A capella',cont: 'Inicio del deluxe: tres rondas de ataque y respuesta sin beat.'},
        {tit: 'Host',cont: 'Son los encargados de la animación y el orden de las batallas.'},
        {tit: 'DJ',cont: 'Son los encargados de los beats y arreglos musicales en una batalla.'},
        {tit: 'Jurado',cont: 'En FMS son 5 jueces y se encargan de puntuar una batalla.'},
    ]

    const Content_2 = [
        {tit: 'Patrón', cont: 'También conocido como compás y entá compuesto por 4 lineas o versos.'},
        {tit: 'Punchline', cont: 'Verso final de un patrón. Por lo general es un verso agresor.'},
        {tit: 'Réplica', cont: 'Una ronda adicional de una batalla tras un empate.'},
        {tit: 'Flow', cont: 'Fluir encima de un beat. Cada MC puede desarrollar un flow propio.'},
        {tit: 'Esctructura', cont: 'Correcto orden de los versos de un patrón durante un beat.'},
        {tit: 'Métrica', cont: 'La manera de cada MC para encajar sus versos en un beat.'},
        {tit: 'One-two', cont: 'Técnica de rimar un conjunto de palabras manteniendo sus sílabas.'},
        {tit: 'Tongo', cont: 'Expresión coloquial referido al desacuerdo con las decisiones del jurado.'},
        {tit: '4x4', cont: 'Formato de batalla de ataque y respuesta a un patrón por MC'},
        {tit: 'Calambur', cont: 'Figura retórica que consiste en unir palabras diferentes para que fonéticamente suenen igual.'},
        {tit: 'Doble tempo', cont: 'Rapear de manera rápida'},
        {tit: 'Barras', cont: 'En la música, frases que encajan en un compás. En el freestyle, una frase o rima con doble sentido.'},
    ]
    
    return (
        <>
            <div className="container-glosario container-b">
                <TituloBloque titulo={'GLOSARIO'} classBloque={'glosario'} />
                <div className="container-glosarios">
                    <div>
                        <p className="glosario-titulo g-t-primero">Vocabulario de FMS:</p>
                        <DisplayGlosario GlosarioContent={Content_1}  />
                    </div>
                    <div>
                        <p className="glosario-titulo g-t-segundo">Vocabulario de freestyle en general:</p>
                        <DisplayGlosario GlosarioContent={Content_2} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Glosario;