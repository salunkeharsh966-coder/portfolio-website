import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page hero-page">
      <section className="hero">
        <p className="tagline">Frontend Developer</p>

        <h1>Hello, I am Harsh Salunke</h1>

        <p>
          I design and develop clean, responsive, and performance-focused web
          applications using React, JavaScript, HTML, and CSS, turning ideas
          into smooth and user-friendly digital experiences.
        </p>

        <Link className="primary-btn" to="/projects">
          View Projects
        </Link>
      </section>
    </main>
  );
}

export default Home;