function Resume() {
  return (
    <main className="page">
      <section className="section resume-section">
        <h1>Resume</h1>

        <p>
          Download my resume to view my education, skills, projects, and
          achievements.
        </p>
<a
  className="primary-btn"
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download="Resume.pdf"
>
  Download Resume
</a>
  
      </section>
    </main>
  );
}

export default Resume;