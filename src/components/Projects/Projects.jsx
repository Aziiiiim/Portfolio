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
              imgPath="images/entities_front.png"
              title="Entities ecosystem simulation project"
              description="A C++ simulation of an aquatic ecosystem where virtual creatures move, interact, and evolve using object-oriented design and design patterns."
              ghLink="https://github.com/Aziiiiim/Entities"
              keywords={["C++", "Object-Oriented Programming", "Design Patterns"]}
            /> 
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="images/perbaikiinaja_front.png"
              title="PerbaikiinAja – Online Repair Service Platform"
              description="A full-stack repair service web application developed collaboratively with Indonesian students during my exchange semester in Jakarta. Built with Spring Boot, PostgreSQL, and a custom HTML/JS frontend, it allows users to book and manage repair services, while technicians and admins handle orders, reports, and coupons."
              ghLink="https://github.com/AdvProg-G1/perbaikiin-aja"
              keywords={["Java", "Spring Boot", "PostgreSQL", "HTML", "CSS", "JavaScript"]}
            /> 
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="images/pong_os_front.png"
              title="Minimal x86 OS with Kernel-Level Pong"
              description="A tiny operating system written in C and x86 Assembly that boots from scratch and launches a Pong game directly from the kernel. Includes protected-mode switch, ISR/IRQ handling, VGA text/graphics, keyboard & PIT timer drivers, and a hardware-driven game loop."
              ghLink="https://github.com/Aziiiiim/myOS"
              keywords={["C", "x86", "Assembly", "OSDev", "Bootloader", "GDT/IDT", "QEMU"]}
            />
          </Col>

        </Row>}
      </Container>
    </Container>
  );
}
