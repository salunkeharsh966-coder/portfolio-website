function About() {
  return (
    <main className="page">
      <section className="section about-section">
        <h1>About Me</h1>

        <div className="about-box">
          <img
            src={`${import.meta.env.BASE_URL}profile2.jpeg`}
            alt="Harsh profile"
            loading="lazy"
          />

          <p>
            Aspiring Java Full Stack Developer and Third-Year B.Sc. Computer
            Science student with hands-on experience in building responsive web
            applications using React.js, JavaScript, HTML5, CSS3, Bootstrap, and
            Git. Skilled in developing user-friendly interfaces, managing
            component-based architecture, and deploying projects on platforms
            such as Vercel and Render. Strong problem-solving, communication,
            and teamwork skills with leadership experience through NSS
            activities.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;