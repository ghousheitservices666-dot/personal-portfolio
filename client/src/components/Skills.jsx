import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";

function Skills() {

  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={45} /> },
    { name: "CSS3", icon: <FaCss3Alt size={45} /> },
    { name: "JavaScript", icon: <FaJsSquare size={45} /> },
    { name: "React.js", icon: <FaReact size={45} /> },
    { name: "Node.js", icon: <FaNodeJs size={45} /> },
    { name: "Java", icon: <FaJava size={45} /> },
    { name: "MySQL", icon: <FaDatabase size={45} /> },
    { name: "Git", icon: <FaGitAlt size={45} /> },
    { name: "GitHub", icon: <FaGithub size={45} /> }
  ];

  return (
    <section id="skills" className="skills">

      <h2>Technical Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;