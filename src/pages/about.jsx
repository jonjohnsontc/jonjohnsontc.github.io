import React from "react";

import Face from "../components/face";

import "../styles/components/container.css";
import "../styles/components/infoblock.css";
import "../styles/typeography.css";
import "../styles/about.css";

function Resume() {
  return (
    <div className="about-resume-container">
      <div className="about-resume-header">
        <h2 className="about-resume-title">JON JOHNSON</h2>
        <p>
          GitHub: www.github.com/jonjohnsontc | LinkedIn:
          www.linkedin.com/in/jonjohnsontc
        </p>
      </div>

      <h3 className="about-resume-title">CORE COMPETENCIES</h3>
      <p>
        AWS, Python, Clojure(script), PostgreSQL, Javascript, Docker, Spark,
        Git, Agile, Jira
      </p>

      <h3 className="about-resume-title">PROFESSIONAL EXPERIENCE</h3>
      <div className="about-resume-title-container">
        <p>Nielsen, Hollywood, CA</p>
        <p>2019 - Present</p>
      </div>
      <p>Software Engineer</p>
      <ul className="about-resume-job-facts">
        <li>
          Full stack contributor on single page web application designed to
          serve predictions to clients in real-time{" "}
        </li>
        <li>
          Build microservice to gather features based on user input and serve
          predictions to users of the web application{" "}
        </li>
        <li>
          Build out web UI using Reagent (a clojurescript wrapper of React),
          based on renders provided by UX team
        </li>
        <li>
          Migrate Continuous Integration (CI) infrastructure from Jenkins to
          GitLab{" "}
        </li>
        <li>
          Help build REST API to allow microservices to communicate with
          another, and users to communicate with the backend
        </li>
        <li>Manage deployments through Kubernetes’ kubectl</li>
      </ul>

      <div className="about-resume-title-container">
        <p>Nielsen, Hollywood, CA</p>
        <p>2018 - 2019</p>
      </div>
      <p>Senior Product Analyst</p>
      <ul className="about-resume-job-facts">
        <li>
          Built and maintained a dashboard designed to serve detailed viewership
          data to clients
        </li>
        <li>
          Helped build out robust ETL pipelines, primarily utilizing Spark.
        </li>
        <li>
          Conducted market share analysis of record label recordings in Spark,
          utilizing cosine similarity to match tracks between provider data.
        </li>
        <li>
          Constructed a web scraper using AWS Lambda to concurrently scrape
          thousands of webpages at any given time.
        </li>
        <li>
          Presented coding work & new technologies to co-workers through “coding
          club” discussions & AWS working group.
        </li>
      </ul>

      <div className="about-resume-title-container">
        <p>General Assembly, Los Angeles, CA</p>
        <p>2018</p>
      </div>
      <p>Remote Instruction Assistant - Python Course</p>
      <ul className="about-resume-job-facts">
        <li>
          Helped teach relative coding newcomers the basics of Python in a 40hr
          PT course. The curriculum included basic object-oriented concepts
          (classes, state, objects, etc), as well as data analysis using the
          Scipy stack (primarily NumPy and Pandas).{" "}
        </li>
        <li>
          Assisted students by answering questions during class on Slack and
          providing guidance on the course’s final project.
        </li>
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <div className="container-main">
      <article className="container-article">
        <Face />
        <h1 className="text-header">About Me</h1>
        <p>
          My name is Jon Johnson. I'm a cat father, developer, and complete and
          utter nutcase. I spent roughly 10 years working in music, mostly in
          and around music publishing, before moving into software development
          back in 2018. Now I work as a software engineer in the media space. In
          my freetime, I love working on different ways to express myself
          creatively through software or other technology.
        </p>
        <h1 className="text-header">Resume/CV</h1>
        <Resume />
      </article>
    </div>
  );
}
