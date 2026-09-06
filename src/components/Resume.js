import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "./PageHeader";
import { profile } from "../data/profile";

function AwardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </svg>
  );
}

function FocusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9zM4 10H2M4 14H2M22 10h-2M22 14h-2M10 4V2M14 4V2M10 22v-2M14 22v-2" />
    </svg>
  );
}

function Resume() {
  return (
    <Container>
      <PageHeader
        eyebrow="Resume"
        title="Work & profile"
        subtitle="My full history lives on LinkedIn — the snapshot below keeps the highlights."
      />

      <Row className="gy-4">
        <Col lg={8}>
          <div className="surface-card p-4 p-md-5 h-100">
            <div className="d-flex flex-column flex-sm-row align-items-sm-start gap-4">
              <div className="linkedin-badge" aria-hidden="true">
                in
              </div>
              <div>
                <h2 className="h4 fw-bold mb-1">{profile.name}</h2>
                <div className="fw-semibold mb-1">{profile.headline}</div>
                <div className="text-secondary small mb-3">
                  {profile.location}
                </div>
                <p className="text-secondary mb-4">{profile.intro}</p>
                <a
                  className="btn btn-primary px-4"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  View full profile on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="surface-card p-4 h-100">
            <div className="icon-circle mb-3" style={{ width: 44, height: 44 }}>
              <AwardIcon />
            </div>
            <div className="eyebrow mb-2">Certification</div>
            <h3 className="h5 fw-bold mb-1">CKA</h3>
            <p className="text-secondary mb-0">
              Certified Kubernetes Administrator — The Linux Foundation
            </p>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="surface-card p-4 h-100">
            <div className="icon-circle mb-3" style={{ width: 44, height: 44 }}>
              <SchoolIcon />
            </div>
            <div className="eyebrow mb-2">Education</div>
            <h3 className="h5 fw-bold mb-1">Georgia Tech</h3>
            <p className="text-secondary mb-0">B.S. in Computer Science</p>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="surface-card p-4 h-100">
            <div className="icon-circle mb-3" style={{ width: 44, height: 44 }}>
              <FocusIcon />
            </div>
            <div className="eyebrow mb-2">Focus</div>
            <h3 className="h5 fw-bold mb-2">What I work on</h3>
            <div className="d-flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className="surface-card p-4 h-100">
            <div className="eyebrow mb-2">Elsewhere</div>
            <div className="d-flex flex-wrap gap-2">
              <a
                className="btn btn-ghost btn-sm"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-ghost btn-sm"
                href={profile.youtube}
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
              <a className="btn btn-ghost btn-sm" href={`mailto:${profile.email}`}>
                Email
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
