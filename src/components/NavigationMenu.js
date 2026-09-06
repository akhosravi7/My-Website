import React from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import { useTheme } from "../hooks/useTheme"

function NavigationMenu() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" role="navigation" className="shadow-sm">
            <Navbar.Brand href="/home" aria-label="Home page" className="fw-bold d-flex align-items-center">
                <span className="me-2">👨‍💻</span> Ali Khosravi
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" role="menubar">
                    <Nav.Link href="/home" role="menuitem" className="px-3">Home</Nav.Link>
                    <Nav.Link href="/resume" role="menuitem" className="px-3">Resume</Nav.Link>
                    <Nav.Link href="/films" role="menuitem" className="px-3">Films</Nav.Link>
                    <Nav.Link href="/music" role="menuitem" className="px-3">Music</Nav.Link>
                    <Nav.Link href="/contact" role="menuitem" className="px-3">Contact Me</Nav.Link>
                </Nav>
                <Form inline className="d-flex">
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" 
                        aria-label="Search" 
                    />
                    <Button variant="outline-info" aria-label="Submit search" className="mx-2">Search</Button>
                    <Button 
                        variant="outline-light" 
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        className="rounded-circle mx-1"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationMenu