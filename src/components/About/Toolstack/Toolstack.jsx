import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiDebian,
  SiEclipseide,
  SiJetbrains,
  SiSublimetext,
  SiPostman,
  SiGit
} from "react-icons/si";

import "./Toolstack.css";

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDebian title="Debian 12" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide title="Eclipse" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains title="IntelliJ IDEA" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext title="Sublime Text" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit title="Git" />
      </Col>
    </Row>
  );
}