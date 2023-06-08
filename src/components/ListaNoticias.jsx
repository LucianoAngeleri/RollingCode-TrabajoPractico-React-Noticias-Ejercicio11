import { Row, Container } from "react-bootstrap";
import Noticia from "./Noticia";
const ListaNoticias = () => {
    return (
        <Container className='py-3'>
        <Row className="g-3">
            <Noticia/>
            <Noticia/>
            <Noticia/>
        </Row>
        </Container>
    );
};

export default ListaNoticias;