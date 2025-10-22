import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import family from "../../Assets/Projects/family.png";
import flight from "../../Assets/Projects/flightapi.png";
import world from "../../Assets/Projects/world.png";

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
              description="React appliaction with a flask RESTful API backend, hosted on a linux VPS using Nginx as a 
              reverse proxy to serve static files and retrive data from the backend. The web application maps a total of 
              120 people across 8 famous families, you can also create your own family tree for free. The app dynamically 
              generates a tree for you showing the links between your whole family no matter how complex."
              ghLink="https://github.com/jhalfpennycodes/family_tree"
              demoLink="https://free-family-tree.co.uk/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={world}
              isBlog={false}
              title="World Emissions Visualiser"
              description="A web application that uses live API data from sensors around the world to collect quantities of greenhouse gas emissions and creates visualisations with the data."
              ghLink="https://github.com/jhalfpennycodes/world_emissions"
              demoLink="https://world-emissions-ce27.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
