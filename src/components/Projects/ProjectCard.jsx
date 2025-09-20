import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import "./Project.css";

export default function ProjectCard({
  imgPath,
  title,
  description,
  ghLink,
  keywords = [],
}) {
  return (
    <Card className="project-card-view">
      {imgPath && <Card.Img variant="top" src={imgPath} alt={`${title} screenshot`} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        {keywords.length > 0 && (
          <div className="mb-2">
            {keywords.map((kw, i) => (
              <Badge
                key={i}
                pill
                bg="secondary"
                className="me-1"
                style={{ fontSize: "0.8rem" }}
              >
                {kw}
              </Badge>
            ))}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
