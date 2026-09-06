import React from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

function NavigationMenu() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/home">-Ali Khosravi-</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    <Nav.Link href="/films">Films</Nav.Link>
                    <Nav.Link href="/music">Music</Nav.Link>
                    <Nav.Link href="/contact">Contact Me</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationMenu