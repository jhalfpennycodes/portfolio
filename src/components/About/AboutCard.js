import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I'm <span className="purple">Joseph Halfpenny </span>
            from <span className="purple"> South London.</span>
            <br />I am a <span className="purple">
              full stack developer
            </span>{" "}
            looking for a <span className="purple">post graduate role</span> in{" "}
            <span className="purple">software development.</span>
            <br />I have a{" "}
            <span className="purple">
              {" "}
              Bachelors Computer Science Degree
            </span>{" "}
            from the <span className="purple"> University of Leeds.</span> I
            have been working on my{" "}
            <span className="purple"> own projects </span> and{" "}
            <span className="purple"> learning new technologies </span> to
            <span className="purple"> improve my skills </span> as a developer.
            My dream is to become a{" "}
            <span className="purple">full stack web developer.</span>
            <br />
            <br />
            Apart from <span className="purple">coding</span>, here are some
            other <span className="purple"> activities </span> that I love to
            do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports such as{" "}
              <span className="purple">Football, tennis, cycling!</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Cooking</span> for
              friends and family
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Embroidering </span> and
              <span className="purple"> sewing </span> my own clothes
            </li>
            <li className="about-activity">
              <ImPointRight /> Weekly trips to the{" "}
              <span className="purple">cinema</span> with friends
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
