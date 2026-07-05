import { skills } from "../data";

function Skills() {
  return (
    <main className="page">
      <section className="section skills-section">
        <p className="section-label">Technical Skills</p>

        <h1>Skills</h1>

        <p className="section-subtitle">
          Tools and technologies I use to build clean, responsive, and
          user-friendly web applications.
        </p>

        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;