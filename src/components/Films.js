import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap"

function Films() {
    return (
        <Container fluid className="p-3">
            <Row>
                <Col xs={12} md={6} lg={4} className="mb-4">
                    <Card className="bg-dark text-white h-100">
                        <Card.Img 
                            src="https://img.youtube.com/vi/aymJt8kKmqM/maxresdefault.jpg" 
                            alt="Video thumbnail for My Film Project"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.ImgOverlay>
                            <Card.Title>My Film Project</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-4">
                    <Card style={{ width: '100%' }} className="h-100">
                        <Card.Img 
                            src="https://img.youtube.com/vi/aymJt8kKmqM/maxresdefault.jpg" 
                            alt="Video thumbnail for Card Title"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-4">
                    <Card className="bg-dark text-white h-100">
                        <Card.Img 
                            src="https://img.youtube.com/vi/aymJt8kKmqM/maxresdefault.jpg" 
                            alt="Video thumbnail for Another Project"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.ImgOverlay>
                            <Card.Title>Another Project</Card.Title>
                            <Card.Text>
                                Additional content for this project.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Films