import React from "react";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="page-header">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1>{title}</h1>
      {subtitle && <p className="lead mb-0">{subtitle}</p>}
    </header>
  );
}
