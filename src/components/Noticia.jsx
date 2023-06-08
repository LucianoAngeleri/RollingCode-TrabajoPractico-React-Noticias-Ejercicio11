import { Card,Button,Col } from "react-bootstrap";

const Noticia = ({title,category,description,image_url,link}) => {
    return (
        <Col xs={12} sm={12} md={6} lg={3}>
        <Card className="h-100">
            <Card.Img variant="top" src={image_url} alt={title}></Card.Img>
            <Card.Body>
                <Card.Subtitle className="pb-3">{category}</Card.Subtitle>
                <Card.Title className="pb-3">{title}</Card.Title>
                <Card.Text className="pb-3">{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-grid">
                <Button variant="primary" href={link}>Ver noticia completa</Button>
            </Card.Footer>
        </Card>
        </Col>
    );
};

export default Noticia;