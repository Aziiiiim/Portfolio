import { Container, Row, Col } from "react-bootstrap";
import Github from "./GithubPart/Github";
import Techstack from "./Techstack/Techstack";
import AboutPart from "./AboutPart/AboutPart";
import Toolstack from "./Toolstack/Toolstack";

export default function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "5.4em", paddingBottom: "20px" }}>
              Know Who <strong className="blue">I am</strong>
            </h1>
            <AboutPart />
          </Col>
          <Col
            md={7}
            style={{ paddingTop: "0px", paddingBottom: "100px" }}
            className="about-img"
          >
          </Col>
        </Row>
        <h1 style={{ fontSize: "5.4em", paddingBottom: "20px" }}>
          Professional <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />

        <h1 style={{ fontSize: "5.4em", paddingBottom: "20px" }}>
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}