import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import family from "../../Assets/Projects/family.png";
import flight from "../../Assets/Projects/flightapi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={family}
              isBlog={false}
              title="Free Family Tree"
              description="React appliaction with a flask RESTful API backend, two servers working together to provide a seemless system. The web application maps the rockerfeller family into a dynamic graph and allows the user to play around and add more family members to the tree."
              ghLink="https://github.com/jhalfpennycodes/family_tree"
              demoLink="https://family-tree-t1mv.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Airline API"
              description="A dummy Airline API providing flight information and booking actions through api requests API."
              ghLink="https://github.com/jhalfpennycodes/Airline_API"
              demoLink="https://github.com/jhalfpennycodes/Airline_API"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
