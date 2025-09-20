import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import "./AboutPart.css";

export default function Aboutpart() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-text">
            Hi everyone, I’m <span className="blue">Azim Barhoumi</span> from
            <span className="blue"> Toulouse, France</span>. I’m in my final year
            of <span className="blue">Software Engineering</span> at
            <span className="blue"> IMT Atlantique</span>.
          </p>

          <p className="about-text">
            I earned a French scientific Baccalauréat at Lycée Stéphane Hessel
            (Maths &amp; Physics-Chemistry, with “Mathématiques expertes” and
            English European options), graduating with highest honors. I also
            obtained my driver’s license and First Aid Level 1 certification.
          </p>

          <ul className="about-timeline">
            <li>
              <b>MP2I → MPI</b>, Lycée Pierre de Fermat (Preparatory Class for Great engineering Schools);
              followed intensive Mathematics, Physics and Theoretical Computer Science courses.
              admitted to IMT Atlantique through national competitive exams.
            </li>
            <li>
              <b>Year 1:</b> Nantes campus.
            </li>
            <li>
              <b>Year 2:</b> Brest campus — option
              <span className="blue"> Collaborative Software Development</span>,
              then exchange semester at <span className="blue">Universitas Indonesia, Jakarta, Indonesia </span>
              : Data Structures, Algorithm Design &amp; Analysis,
              Advanced Programming, Statistics &amp; Probability — grades
              <b> A/A+</b> in all courses.
            </li>
            <li>
              <b>Final year:</b> Nantes campus — focus on
              <span className="blue"> Advanced Software Development</span>.
            </li>
          </ul>

          <p className="about-text">
            During my academic journey, I have worked on numerous projects—both academic and
            personal—primarily using <span className="blue">C/C++</span> and 
            <span className="blue"> Java</span>, which are the languages I master best and feel most
            comfortable with. I have also received solid training in 
            <span className="blue"> DevOps practices</span> and modern software engineering
            principles, including version control, continuous integration, and automated
            testing.  
            <br /><br />
            My curiosity has driven me to explore many other languages and technologies
            through side projects. While I wouldn’t call myself an expert in all of them,
            I am confident enough to take on substantial projects when needed, and
            <span className="blue">
                {" "}a list of these technologies can be found in my{" "}
                <a href="/resume" className="blue">Resume</a> or in my{" "}
                <a href="#techstack" className="blue">Techstack</a> &amp;{" "}
                <a href="#toolstack" className="blue">Toolstack</a>.
            </span>

        </p>

          <p className="about-text">
            I’m currently looking for a <span className="blue">6-month internship </span>
            starting in <span className="blue">April 2026</span> in software
            engineering (backend, data structures/algorithms, or software engineering). If my profile fits your needs, feel free to reach out!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing sports (Running, football, badminton, etc...)
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning things that I'm not familiar with
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
