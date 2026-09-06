import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PageHeader from "./PageHeader";
import { tracks, musicChannel } from "../data/music";
import { profile } from "../data/profile";

function NoteIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function Music() {
  return (
    <Container>
      <PageHeader
        eyebrow="Music"
        title="Music"
        subtitle="Original tracks and audio projects from ALK FILMS."
      />
      {tracks.length > 0 ? (
        <Row className="g-4">
          {tracks.map((track) => (
            <Col sm={6} lg={4} key={track.title}>
              <a
                className="surface-card p-4 h-100 text-decoration-none d-block"
                href={track.url}
                target="_blank"
                rel="noreferrer"
              >
                <Card.Title className="fw-bold text-body">{track.title}</Card.Title>
                <Card.Text className="text-secondary mb-0">{track.description}</Card.Text>
              </a>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="surface-card empty-state">
          <div className="icon-circle mx-auto mb-4" style={{ width: 56, height: 56 }}>
            <NoteIcon />
          </div>
          <h2 className="h4 fw-bold mb-2">Tracks are on the way</h2>
          <p className="text-secondary mb-4" style={{ maxWidth: "45ch", margin: "0 auto 1.5rem" }}>
            Original music and audio work are in progress. In the meantime, you
            can hear what I'm working on on the ALK FILMS YouTube channel or my
            SoundCloud.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <a
              className="btn btn-primary px-4"
              href={musicChannel}
              target="_blank"
              rel="noreferrer"
            >
              Visit the YouTube channel
            </a>
            <a
              className="btn btn-ghost px-4"
              href={profile.soundcloud}
              target="_blank"
              rel="noreferrer"
            >
              Listen on SoundCloud
            </a>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Music;
