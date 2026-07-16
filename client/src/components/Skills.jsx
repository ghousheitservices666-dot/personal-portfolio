function Skills() {

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "Git",
    "GitHub",
    "VS Code"
  ];

  return (
    <section className="skills">

      <h2>My Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;