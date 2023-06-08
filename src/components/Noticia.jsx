import { Card,Button,Col } from "react-bootstrap";

const Noticia = () => {
    return (
        <Col xs={12} sm={12} md={6} lg={3}>
        <Card>
            <Card.Img variant="top"></Card.Img>
            <Card.Body>
                <Card.Subtitle className="pb-3">Diario Z</Card.Subtitle>
                <Card.Title className="pb-3">Noticia 1</Card.Title>
                <Card.Text className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus atque vel tenetur pariatur modi! Necessitatibus totam distinctio accusamus, earum nemo repellat rem quae ut fugiat commodi praesentium possimus voluptates unde suscipit enim sint perspiciatis quam non quia. Debitis, facilis maiores recusandae adipisci perspiciatis animi iste obcaecati veniam vero fuga.</Card.Text>
            </Card.Body>
            <Card.Footer className="d-grid">
                <Button variant="primary">Ver noticia completa</Button>
            </Card.Footer>
        </Card>
        </Col>
    );
};

export default Noticia;