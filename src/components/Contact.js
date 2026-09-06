import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "./PageHeader";
import { profile } from "../data/profile";

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  );
}

const methods = [
  {
    title: "LinkedIn",
    text: "The fastest way to reach me — open to work conversations and introductions.",
    cta: "Message on LinkedIn",
    href: profile.linkedin,
    external: true,
    icon: <LinkedinIcon />,
    primary: true,
  },
  {
    title: "Email",
    text: "For anything specific, direct email works great.",
    cta: "Send an email",
    href: `mailto:${profile.email}`,
    external: false,
    icon: <MailIcon />,
  },
  {
    title: "YouTube",
    text: "Find my films and music on the ALK FILMS channel.",
    cta: "Visit the channel",
    href: profile.youtube,
    external: true,
    icon: <YoutubeIcon />,
  },
];

function Contact() {
  return (
    <Container>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Open to DevOps and AI infrastructure conversations, collaborations, and anything creative."
      />
      <Row className="g-4">
        {methods.map((method) => (
          <Col md={4} key={method.title}>
            <div className={`surface-card p-4 h-100 d-flex flex-column ${method.primary ? "card-primary-ring" : ""}`}>
              <div className="icon-circle mb-3">{method.icon}</div>
              <h3 className="h5 fw-bold mb-2">{method.title}</h3>
              <p className="text-secondary mb-4 flex-grow-1">{method.text}</p>
              <a
                className={`btn ${method.primary ? "btn-primary" : "btn-ghost"} align-self-start`}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noreferrer" : undefined}
              >
                {method.cta}
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Contact;
