import React from "react"
import Card from "react-bootstrap/Card"

function Films() {
    return (
        <div>
            <Card className="bg-dark text-white">
                <iframe title = "yoyo" src= "https://www.youtube.com/embed/aymJt8kKmqM" />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '25rem' }}>
                <iframe title = "yoyo" src= "https://www.youtube.com/embed/aymJt8kKmqM" />
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