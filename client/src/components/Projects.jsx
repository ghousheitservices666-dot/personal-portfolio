import { useEffect, useState } from "react";
import api from "../api/portfolioApi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="projects" className="projects">

      <h2>My Projects</h2>

      <p className="project-subtitle">
        Here are some projects I've built while learning Full-Stack Development.
      </p>

      <div className="projects-container">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <div className="project-top">
              <h3>{project.title}</h3>
            </div>

            <p className="project-description">
              {project.description}
            </p>

            <div className="tech-stack">

              {project.technologies
                .split(",")
                .map((tech, index) => (
                  <span key={index}>{tech.trim()}</span>
                ))}

            </div>

            <div className="project-buttons">

              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub />
                GitHub
              </a>

              {project.live_demo && (
                <a
                  href={project.live_demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;