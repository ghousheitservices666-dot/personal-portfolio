import { useState } from "react";
import api from "../api/portfolioApi";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/contact", formData);

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong.");
      }

    }
  };

  return (
    <section id="contact" className="contact">

      <h2>Let's Connect</h2>

      <p className="contact-subtitle">
        Feel free to reach out for internships, jobs, collaborations, or
        project discussions.
      </p>

      <div className="contact-wrapper">

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope size={28}/>
            <h3>Email</h3>
            <p>ghousheitservices666@gmail.com</p>
          </div>

          <div className="info-card">
            <FaGithub size={28}/>
            <h3>GitHub</h3>
            <p>https://github.com/ghousheitservices666-dot</p>
          </div>

          <div className="info-card">
            <FaLinkedin size={28}/>
            <h3>LinkedIn</h3>
            <p>https://www.linkedin.com/in/ghoushenisha-begam-j-itservices666/</p>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;