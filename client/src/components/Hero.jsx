import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">

        <h1>Hello, I'm</h1>

        <h2>Ghoushenisha Begam J</h2>

        <h3>Aspiring Full-Stack Java Developer</h3>

        <p>
          I am a passionate B.Tech Information Technology graduate with a
          strong interest in building modern full-stack web applications.
          I specialize in React.js, Node.js, Express.js, MySQL, and Java.
          I enjoy solving real-world problems through clean, scalable, and
          user-friendly software.
        </p>

        <div className="hero-buttons">

          <a
            href="/Ghoushenisha_Begam_Resume.pdf"
            download
            className="btn-primary"
          >
            📄 Download Resume
          </a>

          <a
            href="#contact"
            className="btn-secondary"
          >
            📩 Contact Me
          </a>

        </div>

      </div>

      <div className="hero-image">
        <img
          src={profile}
          alt="Ghoushenisha Begam J"
        />
      </div>

    </section>
  );
}

export default Hero;