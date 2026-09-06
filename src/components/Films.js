import React from "react"
import { Card } from "react-bootstrap"

function Films() {
    return (
        <div>
            <Card className="bg-dark text-white mb-3">
                <Card.Img src="https://img.youtube.com/vi/aymJt8kKmqM/maxresdefault.jpg" alt="Video thumbnail" />
                <Card.ImgOverlay>
                    <Card.Title>My Film Project</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card style={{ width: '25rem' }} className="mb-3">
                <Card.Img src="https://img.youtube.com/vi/aymJt8kKmqM/maxresdefault.jpg" alt="Video thumbnail" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Films