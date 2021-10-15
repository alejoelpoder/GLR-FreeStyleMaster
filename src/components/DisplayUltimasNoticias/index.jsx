import './DisplayUltimasNoticias.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayUltimasNoticias = () => {

    const [people, setPeople] = useState([]);

    const getPeople = async () => {

        const object_fetch_p = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/menu',
                'token_id': 'eac355Be7AEhhj222E18JChIE7j972573BAj2B1Eg4'
            }
        }
    
        const posts = await axios.get(`https://cronosservices.glr.pe/api/content/article/list?site_id=larepublica&status=1&order_field=updated_at&limit=3&category_slug=/freestyle`, object_fetch_p);
        const dataNoticias = posts.data?.data?.articles?.data
        setPeople(dataNoticias)
        console.log(dataNoticias[0].data.multimedia[0].path)
    }

    useEffect(() => {
        getPeople();
    }, [])

    return (
        <div className='noticias-container'>
            {
                people.length ?
                people.map(person => (
                    <article>
                        <a href={`https://larepublica.pe${person.slug}`} target='_blank' rel="noreferrer">
                            <img src={person.data.multimedia[0].path} alt="noticia" />
                            <p>{person.title}</p>
                        </a>
                    </article>
                )) :
                <p>Cargando noticias...</p>
            }
        </div>
    )
}

export default DisplayUltimasNoticias;