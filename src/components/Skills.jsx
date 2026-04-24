import React from "react";

function Skills() {
  const skills = [
    
    { name: "Python", level: 100 },
    {name: "Java", level: 100 },
    { name: "C++", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Machine Learning", level: 80 },
    { name: "PyTorch", level: 80 },
    { name: "TensorFlow", level: 75 }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid-2">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-item">
              <div className="skill-top">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-line">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;