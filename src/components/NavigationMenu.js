import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

function NavigationMenu() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="home">-Ali Khosravi-</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="resume">Resume</Nav.Link>
                <Nav.Link href="films">Films</Nav.Link>
                <Nav.Link href="music">Music</Nav.Link>
                <Nav.Link href="contact">Contact Me</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavigationMenu