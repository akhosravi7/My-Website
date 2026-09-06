import React from "react"
import { Image } from "react-bootstrap"

function Resume() {
    return (
        <Image className="resume" src={require('./AKRESUME.jpg')} fluid />
    )
}

export default Resume