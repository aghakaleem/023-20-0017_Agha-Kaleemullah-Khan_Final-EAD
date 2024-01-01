import { Card, Button, Col, Row } from 'react-bootstrap';

function BlackBoxes() {
    return (
        <Row className="justify-content-around">
            <Col lg={7} md={6} className="mb-4">
                <Card className="bg-dark text-white text-center p-5 h-200">
                    <Card.Body>
                        <Card.Title><h1>PEACE OF MIND</h1></Card.Title>
                        <Card.Text><p>A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p></Card.Text>
                        <Button variant="light">Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={5} md={6} className="mb-4">
                <Card className="bg-dark text-white text-center p-5 pt-6 pb-6 h-200">
                    <Card.Body>
                        <Card.Title><h1>BUY 2 GET 1 FREE</h1></Card.Title>
                        <Card.Text><p>End of season sale. Buy any 2 items of your choice and get 1 free.</p></Card.Text>
                        <Button variant="light">Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default BlackBoxes;