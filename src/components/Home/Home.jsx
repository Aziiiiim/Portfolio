import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import myImg from "/assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "./Home.css";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Azim BARHOUMI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              This portfolio was built to share a quick overview of who I am, what I enjoy building,
              and how I approach software engineering. You'll find here a selection of my
              <span className="blue"> projects</span>, the
              <span className="blue"> technologies</span> I work with, and a glimpse of my
              <span className="blue"> academic and personal journey</span>.
              <br />
              <br />
              I believe that learning and creating go hand in hand — and this space is meant to reflect that
              mindset through clean design, clear communication, and meaningful code.
              <br />
              <br />
              If you'd like to learn more about my background, education, and experiences,
              feel free to visit the{" "}
              <Link to="/about" className="blue" style={{ textDecoration: "none" }}>
                About
              </Link>{" "}
              section!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              (Feel free to <span className="blue">connect </span>with me)
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aziiiiim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/azim-barhoumi-43778a291"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/azim_barhoumi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>


    </section>
  );
}

export default Home;
