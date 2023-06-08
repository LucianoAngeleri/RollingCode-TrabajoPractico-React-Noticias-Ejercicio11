import { Card,Button,Col } from "react-bootstrap";
import { useState } from "react";
import imagenNoDisponible from "../assets/imagenNoDisponible.jpg"

const Noticia = ({title,category,description,image_url,link}) => {
    const imagenCard = (image_url)?(<Card.Img variant="top" src={image_url} />):(<Card.Img variant="top" src={imagenNoDisponible} />)
    return (
        <Col xs={12} sm={12} md={6} lg={3}>
        <Card className="h-100">
            {imagenCard}
            <Card.Body>
                <Card.Subtitle className="pb-3">{category}</Card.Subtitle>
                <Card.Title className="pb-3 text-primary">{title}</Card.Title>
                <Card.Text className="pb-3 lead fs-6">{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-grid">
                <Button variant="primary" href={link}>Ver noticia completa</Button>
            </Card.Footer>
        </Card>
        </Col>
    );
};

export default Noticia;