import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import "./Project.css";

export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked either for academic or personal purpose.
        </p>
        {<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="images/example.jpeg"
              title="My Awesome App"
              description="A web application for …"
              ghLink="https://github.com/Aziiiiim"
              keywords={["React", "Node.js", "PostgreSQL"]}
            /> 
          </Col>
        </Row>}
      </Container>
    </Container>
  );
}
