import './BatallaRecomendada.css'
import TituloBloque from '../../general/TituloBloque';
import { useState, useEffect } from 'react';
// import { useParams } from "react-router";
import { getFirestore } from "../../../firebase";
import 'firebase/compat/firestore'

const BatallaRecomendada = () => {

    // const { pais } = useParams();
    const [videos, setVideos] = useState([])
    const [data, setData] = useState({})

    useEffect(() => {
        const dbQuery = getFirestore()
        const traer = dbQuery.collection('ARGENTINA')

        traer.get().then(({ docs }) => {
            setData(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })

    }, [])

    useEffect(() => {

            setVideos([data[12]?.video1,data[12]?.video2])

    }, [data])
    return (
        <>
            <div className="container-b">
                <TituloBloque titulo={'BATALLAS RECOMENDADAS'} classBloque={'batalla'} />
                <div className="container-video-batalla">
                    {/* {
                        videos?.map(item => (
                            <p>{item.id}</p>
                        ))
                    } */}
                    {
                        videos?
                            <>
                                {
                                    videos?.map((item, i) => (
                                        <>
                                            <iframe key={i} className="youtube-embed-iframe" width="560" height="315" src={item} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </>
                                    ))
                                }
                            </> :
                            <p className="cargando">Cargando...</p>
                    }
                    {/* <iframe className="youtube-embed-iframe" width="560" height="315" src='https://www.youtube.com/embed/51F1v8rKKgs' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className="youtube-embed-iframe" width="560" height="315" src='https://www.youtube.com/embed/asrZwDB1j9w' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </div>
            </div>
        </>
    )
}

export default BatallaRecomendada;