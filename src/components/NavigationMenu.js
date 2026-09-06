import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { profile } from "../data/profile";

const links = [
  { to: "/home", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/films", label: "Films" },
  { to: "/music", label: "Music" },
  { to: "/contact", label: "Contact" },
];

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function NavigationMenu() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar className="site-navbar fixed-top px-3 px-lg-4" expand="lg">
      <div className="container">
        <Navbar.Brand as={NavLink} to="/home" className="navbar-brand-wordmark text-decoration-none">
          {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}
          <span className="brand-dot">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="site-nav" />
        <Navbar.Collapse id="site-nav">
          <Nav className="ms-auto d-lg-flex align-items-center">
            {links.map((link) => (
              <Nav.Item key={link.to}>
                <Nav.Link as={NavLink} to={link.to} className="nav-pill text-center">
                  {link.label}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="ms-lg-2 ms-md-3">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationMenu;
