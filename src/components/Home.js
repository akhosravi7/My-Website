import React from 'react'
import { Carousel } from 'react-bootstrap'

function Home() {
    return (
        <div style={{height:'50%'}}>
            <Carousel style={{height:'50%'}}>
                <Carousel.Item style={{height:'50%'}}>
                    <img
                        className="d-block w-100"
                        src={require('./Beach.jpg')}
                        alt="First slide"
                        style={{height:'50%', objectFit:'cover'}}
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
                        style={{height:'50%', objectFit:'cover'}}
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