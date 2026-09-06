import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PageHeader from "./PageHeader";
import { films, filmsChannel } from "../data/films";

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#101828" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function FilmCard({ film }) {
  const [playing, setPlaying] = useState(false);

  return (
    <Card className="surface-card border-0 overflow-hidden h-100">
      {playing ? (
        <div className="film-embed">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${film.videoId}?autoplay=1`}
            title={film.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="film-thumb">
          <img
            src={`https://i.ytimg.com/vi/${film.videoId}/hqdefault.jpg`}
            alt={`Thumbnail for ${film.title}`}
            loading="lazy"
          />
          <button
            type="button"
            className="play-badge"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${film.title}`}
          >
            <span>{<PlayIcon />}</span>
          </button>
        </div>
      )}
      <Card.Body>
        <Card.Title className="fw-bold">
          {film.title}{" "}
          <span className="text-secondary fw-normal">· {film.year}</span>
        </Card.Title>
        <Card.Text className="text-secondary mb-0">{film.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Films() {
  return (
    <Container>
      <PageHeader
        eyebrow="Films"
        title="Films & video"
        subtitle="Short films and video work. New projects land on the ALK FILMS channel."
      />
      <Row className="g-4">
        {films.map((film) => (
          <Col sm={6} lg={4} key={film.videoId}>
            <FilmCard film={film} />
          </Col>
        ))}
      </Row>
      <div className="text-center mt-5">
        <a
          className="btn btn-ghost px-4"
          href={filmsChannel}
          target="_blank"
          rel="noreferrer"
        >
          View the ALK FILMS channel
        </a>
      </div>
    </Container>
  );
}

export default Films;
