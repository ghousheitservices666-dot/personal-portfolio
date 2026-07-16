import { useState } from "react";
import API from "../services/api";

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
      const response = await API.post("/contact", formData);

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.message || "Server Error");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

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
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;