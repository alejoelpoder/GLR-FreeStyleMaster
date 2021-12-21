import './Footer.css'

const Footer = () => {

    return (
        <footer>
            <div className="creditos">
                <img className="logo-lr" src="https://cdn.larepublica.pe/images/content/default/logo-lr.svg" alt="Últimas Noticias del Perú y el Mundo en larepublica.pe" title="La República" />
                <div class="credito">
                    <h3 className='footer-tit'>Créditos</h3>
                </div>
                <div className="credito">
                    <h3>Desarrollo web: </h3>
                    <p>
                        <a className='primero-f' target="_blanck" href="https://twitter.com/Ciensapiens">Alejandro Mayurí</a> 
                    </p>
                </div>
                <div class="credito">
                    <h3>Diseño: </h3>
                    <p>
                        <a target="_blanck" href="https://twitter.com/Jordanhuerta23?s=09">Jordan Huerta,</a>
                        <a className='segundo-f' target="_blanck" href="https://instagram.com/fabrizio.con?utm_medium=copy_link">Fabrizio Oviedo</a> 
                        y 
                        <a className='segundo-f' target="_blanck" href="https://www.instagram.com/jazminceras/?utm_medium=copy_link">Jazmín Ceras</a> 
                    </p>
                </div>
                <div className="credito">
                    <h3>Información: </h3>
                    <p>
                        <a target="_blanck" href="https://larepublica.pe/autor/freestyle-lr/">Freestyle LR</a> 
                        y 
                        <a className='segundo-f' target="_blanck" href="https://twitter.com/Jordanhuerta23?s=09">Jordan Huerta</a> 
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;