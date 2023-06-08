import { Form, Container } from "react-bootstrap"
const Buscador = () => {
    return (
        <Container className='py-3'>
        <Form>
            <Form.Group className="mb-3" controlId="selectorCategoria">
                <Form.Label>Buscar por Categoría</Form.Label>
                <Form.Select>
                    <option>Selecciona una opcion...</option>
                    <option value="1">Internacional</option>
                    <option value="2">Nacional</option>
                    <option value="3">Economia</option>
                    <option value="3">Deportes</option>
                    <option value="3">Cultura</option>
                    <option value="3">Tecnología</option>
                </Form.Select>
            </Form.Group>
        </Form>
        </Container>
    );
};

export default Buscador;