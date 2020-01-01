import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "C:/Users/Ali Khosravi/nodejstutorial/my-app/src/style.css"

function Home() {
    return (
        <div style={{height:'50%'}}>
            <Carousel style={{height:'50%'}}>
                <Carousel.Item style={{height:'50%'}}>
                    <img
                        title="d-block w-100"
                        src={require('./Beach.jpg')}
                        alt="First slide"
                        width="100%"
                        height="50%"
                    />
                    <Carousel.Caption>
                        <h3>About Me</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./Suit.JPG')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Looking for a position!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home