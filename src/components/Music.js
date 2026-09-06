import React from "react"
import { Card } from "react-bootstrap"

function Music() {
    return (
        <div>
            <Card className="bg-dark text-white mb-3">
                <Card.Img src="https://img.youtube.com/vi/aymJt8kKmqM/maxresdefault.jpg" alt="Audio thumbnail" />
                <Card.ImgOverlay>
                    <Card.Title>My Music Project</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Music