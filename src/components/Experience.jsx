import React from "react";

function Experience() {
  const experiences = [
    {
      company: "AI Club",
      role: "Founder",
      year: "Jul 2025 - Present",
      desc: "Leading AI projects and workshops.",
    },
    {
      company: "KFUPM Google Developer Student Club",
      role: "Leader",
      year: "Aug 2025 - Present",
      desc: "Guiding students through development projects and technical events.",
    },
    {
      company: "GSR",
      role: "Tech Committee Member",
      year: "Jul 2025 - Present",
      desc: "Contributed to building a mobile transportation app for students.",
    },
    {
      company: "KAUST",
      role: "AI Specialization Trainee",
      year: "Oct 2024 - Feb 2025",
      desc: "Completed intensive AI training focused on machine learning and deep learning.",
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="card-grid">
          {experiences.map((exp, idx) => (
            <div key={idx} className="card cardH">
              <h3 className="card__heading">{exp.company}</h3>
              <h4 className="card__subheading">{exp.role}</h4>
              <p className="card__year">{exp.year}</p>
              <p className="card__text">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;