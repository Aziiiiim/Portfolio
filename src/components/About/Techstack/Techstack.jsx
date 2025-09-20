import React from "react";
import { Row, Col } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
  DiGit,
} from "react-icons/di";
import {
  SiC,
  SiRust,
  SiR,
  SiScala,
  SiHaskell,
  SiOcaml,
  SiGnubash,
  SiPostgresql,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";

import "./Techstack.css";

export default function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiC title="C" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRust title="Rust" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR title="R" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScala title="Scala" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHaskell title="Haskell" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOcaml title="OCaml" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash title="Shell / Bash" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React (Frontend)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot title="Spring Boot (Backend)" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL (SQL)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL (SQL)" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
    </Row>
  );
}