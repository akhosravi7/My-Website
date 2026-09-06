import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import portrait from "../assets/portrait.jpg";
import aboutImg from "../assets/about.jpg";
import { profile } from "../data/profile";
import { filmsChannel } from "../data/films";

function DocIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function FilmIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M2 8h5M2 16h5M17 8h5M17 16h5" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

const explore = [
  {
    to: "/resume",
    title: "Resume & Profile",
    text: "Experience, education, and certifications — live on LinkedIn.",
    icon: <DocIcon />,
  },
  {
    to: "/films",
    title: "Films",
    text: "Short films and video work from ALK FILMS.",
    icon: <FilmIcon />,
  },
  {
    to: "/music",
    title: "Music",
    text: "Original music and audio projects.",
    icon: <MusicIcon />,
  },
];

function Home() {
  return (
    <Container>
      <section className="hero pt-4">
        <Row className="align-items-center gy-5">
          <Col md={6} className="text-center text-md-start">
            <div className="eyebrow mb-3">{profile.headline}</div>
            <h1 className="hero-title mb-3">{profile.name}</h1>
            <p className="hero-sub mb-4">{profile.intro}</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <Link className="btn btn-primary btn-lg px-4" to="/resume">
                View my resume
              </Link>
              <Link className="btn btn-ghost btn-lg px-4" to="/films">
                See my films
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src={portrait}
                alt="Portrait of Ali Khosravi"
              />
            </div>
          </Col>
        </Row>
      </section>

      <section className="section">
        <Row className="align-items-center gy-4">
          <Col md={5}>
            <img
              className="about-photo"
              src={aboutImg}
              alt="Ali Khosravi on the beach"
              loading="lazy"
            />
          </Col>
          <Col md={7}>
            <div className="eyebrow mb-2">About</div>
            <h2 className="section-title">Developer by day, creator by night</h2>
            <p className="text-secondary mb-4">
              I build and run Kubernetes-based AI infrastructure — the
              pipelines, clusters, and model serving that keep AI products in
              production. Off the clock I make short films and music, with one
              film honored at the Cannes Film Festival.
            </p>
            <div className="d-flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </section>

      <section className="section">
        <div className="eyebrow mb-2">Explore</div>
        <h2 className="section-title">What I do</h2>
        <Row className="g-4">
          {explore.map((item) => (
            <Col md={4} key={item.to}>
              <Link to={item.to} className="surface-card p-4 h-100 text-decoration-none d-block explore-card">
                <div className="icon-circle mb-3">{item.icon}</div>
                <h3 className="h5 fw-bold mb-2 text-body">{item.title}</h3>
                <p className="text-secondary mb-0">{item.text}</p>
              </Link>
            </Col>
          ))}
        </Row>
        <div className="mt-4">
          <a
            className="text-secondary small"
            href={filmsChannel}
            target="_blank"
            rel="noreferrer"
          >
            More work on the ALK FILMS YouTube channel →
          </a>
        </div>
      </section>
    </Container>
  );
}

export default Home;
