import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container className="text-center py-5">
      <div className="eyebrow mb-3">404</div>
      <h1 className="display-5 fw-bold mb-3">Page not found</h1>
      <p className="text-secondary mb-4">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link className="btn btn-primary px-4" to="/home">
        Back home
      </Link>
    </Container>
  );
}

export default NotFound;
