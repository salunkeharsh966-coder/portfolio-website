function Contact() {
  return (
    <main className="page">
      <section className="section contact-section">
        <h1>Contact</h1>

        <p>Email: salunkeharsh966@gmail.com</p>
        <p>GitHub: https://github.com/salunkeharsh966-coder</p>
        <p>LinkedIn: https://linkedin.com/in/harsh-salunke-130325290</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="button">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;