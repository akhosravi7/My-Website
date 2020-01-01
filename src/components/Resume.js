import React from "react"
import Image from "react-bootstrap/Image"
import "C:/Users/Ali Khosravi/nodejstutorial/my-app/src/style.css"

function Resume() {
    return (
        <Image className = "resume" src={require('./AKRESUME.jpg')} fluid/>
    )
}

export default Resume