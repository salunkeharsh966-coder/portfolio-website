import { projects } from "../data";

function Projects() {
  return (
    <main className="page">
      <section className="section">
        <h1>Projects</h1>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} loading="lazy" />

              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link}>View Project</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;