import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'

function Home() {
    return (
        <Container fluid className="p-0">
            <Row>
                <Col>
                    <Carousel controls={true} indicators={true} className="home-carousel">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('./Beach.jpg')}
                                alt="About Me"
                                style={{height:'50vh', objectFit:'cover'}}
                            />
                            <Carousel.Caption>
                                <h3>About Me</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('./Suit.JPG')}
                                alt="Looking for a position!"
                                style={{height:'50vh', objectFit:'cover'}}
                            />
                            <Carousel.Caption>
                                <h3>Looking for a position!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Home