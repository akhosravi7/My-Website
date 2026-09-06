import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap"

function Music() {
    return (
        <Container fluid className="p-3">
            <Row>
                <Col xs={12} md={6} lg={4} className="mb-4">
                    <Card className="bg-dark text-white h-100">
                        <Card.Img 
                            src="https://img.youtube.com/vi/aymJt8kKmqM/maxresdefault.jpg" 
                            alt="Audio thumbnail for My Music Project"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.ImgOverlay>
                            <Card.Title>My Music Project</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Music