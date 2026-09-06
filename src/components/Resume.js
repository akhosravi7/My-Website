import React from "react"
import { Image, Container, Row, Col } from "react-bootstrap"

function Resume() {
    return (
        <Container fluid className="p-3">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <Image 
                        className="resume img-fluid" 
                        src={require('./AKRESUME.jpg')} 
                        alt="Professional resume"
                        fluid
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Resume