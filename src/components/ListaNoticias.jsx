import { Row, Container, Spinner } from "react-bootstrap";
import Noticia from "./Noticia";
import { useEffect, useState } from "react";


const ListaNoticias = () => {
    const [noticias,setNoticias]= useState([])
    const [mostrarSpinner, setMostrarSpinner] = useState(true);

    const APIkey= "pub_2420662465ebc1a70595767e75a4fe5382b1a"

    useEffect(()=>{
        consultarAPI();
    },[])

    const consultarAPI = async () =>{
        try {
            setMostrarSpinner(true);
            const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=${APIkey}&country=ar&language=es`)
            const dato =  await respuesta.json();
            setNoticias(dato.results);
            setMostrarSpinner(false);
        } catch (error) {
            console.log(error)
        }
    }

    const componenteRenderizado = mostrarSpinner ? (
        <Container className="my-5 text-center">
          <Spinner animation="border" variante="primary"></Spinner>
        </Container>
      ) : (
        <Container className='py-3'>
        <Row className="g-3">
        {noticias.map((noticia, index) => (
              <Noticia
                key={index}
                title={noticia.title}
                category={noticia.category}
                description={noticia.description}
                image_url={noticia.image_url}
                link={noticia.link}
              />
            ))}
        </Row>
        </Container>
      );
    return (
        (componenteRenderizado)
    );
};

export default ListaNoticias;