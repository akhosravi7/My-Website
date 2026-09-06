import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

const pages = [
  { to: "/home", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/films", label: "Films" },
  { to: "/music", label: "Music" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <div className="footer-brand mb-2">
              {profile.name}
              <span className="brand-dot">.</span>
            </div>
            <p className="text-secondary mb-0">{profile.tagline}</p>
          </Col>
          <Col md={3}>
            <div className="footer-heading">Pages</div>
            {pages.map((page) => (
              <Link key={page.to} className="footer-link" to={page.to}>
                {page.label}
              </Link>
            ))}
          </Col>
          <Col md={4}>
            <div className="footer-heading">Elsewhere</div>
            <a className="footer-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="footer-link" href={profile.youtube} target="_blank" rel="noreferrer">
              YouTube — ALK FILMS
            </a>
            <a className="footer-link" href={`mailto:${profile.email}`}>
              Email
            </a>
          </Col>
        </Row>
        <div className="footer-bottom d-flex flex-wrap justify-content-between gap-2">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
