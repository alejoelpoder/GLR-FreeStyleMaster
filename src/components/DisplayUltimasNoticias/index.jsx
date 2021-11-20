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
                'token_id': process.env.REACT_APP_TOKEN_ID
            }
        }
    
        const posts = await axios.get(`https://cronosservices.glr.pe/api/content/article/list?site_id=larepublica&status=1&order_field=updated_at&limit=3&category_slug=/freestyle`, object_fetch_p);
        const dataNoticias = posts.data?.data?.articles?.data
        setPeople(dataNoticias)
    }
    useEffect(() => {
        getPeople();
    }, [])

    return (
        <div className='noticias-container'>
            {
                people?
                people.map(person => (
                    <article>
                        <a href={`https://larepublica.pe${person?.slug}`} target='_blank' rel="noreferrer">
                            {
                                person?.data?.multimedia[0]?.path?
                                <img src={person?.data?.multimedia[0]?.path} alt="noticia" />
                                :
                                <img src="https://pbs.twimg.com/media/D3wB6IBW4AMQYsq.png" alt="" />
                            }
                            
                            <p>{person?.title}</p>
                        </a>
                    </article>
                )) :
                <p>Cargando noticias...</p>
            }
        </div>
    )
}

export default DisplayUltimasNoticias;