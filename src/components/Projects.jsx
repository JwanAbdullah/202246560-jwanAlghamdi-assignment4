import React, { useMemo, useState } from "react";
import kommute from "../assets/images/kommute.png";
import aic from "../assets/images/aic.png";
import kfupmgpt from "../assets/images/kfupm-gpt.png";
import sage from "../assets/images/sage.png";
import reserve from "../assets/images/reserve.png";

function Projects() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const projects = [
    {
      title: "Kommute",
      image: kommute,
      category: "Web",
      year: 2026,
      desc: "A smart transportation solution designed to improve student commuting efficiency.",
      link: "https://www.canva.com/design/DAG_gymoKEI/mMmAOfvqPfbOOdbuFgniWw/edit",
    },
    {
      title: "AI Club Website",
      image: aic,
      category: "Web",
      year: 2025,
      desc: "A responsive website built to manage AI Club events and showcase technical projects.",
      link: "https://aic-kfupm.github.io/AIC/",
    },
    {
      title: "KFUPM GPT",
      image: kfupmgpt,
      category: "AI",
      year: 2025,
      desc: "An AI-powered assistant built to help students access academic resources and information.",
      link: "https://github.com/HasanMajed/kfupm-chatbot.git",
    },
    {
      title: "KFUPM Reservation System",
      image: reserve,
      category: "Web",
      year: 2024,
      desc: "Room and facility booking system with role-based access and conflict prevention.",
    },
    {
      title: "Sage",
      image: sage,
      category: "AI",
      year: 2025,
      desc: "AI-based assistant that helps students summarize content and answer study questions.",
    },
    
  ];

  const filteredProjects = useMemo(() => {
    let updated = [...projects];

    if (category !== "All") {
      updated = updated.filter((p) => p.category === category);
    }

    if (sortBy === "name") {
      updated.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "year") {
      updated.sort((a, b) => b.year - a.year);
    }

    return updated;
  }, [category, sortBy]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* Controls */}
        <div className="projects__controls">
          <div className="projects__filters">
            {["All", "AI", "Web"].map((cat) => (
              <button
                key={cat}
                className={`projects__filter ${
                  category === cat ? "active" : ""
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            className="projects__sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="year">Sort by Year</option>
          </select>
        </div>

        {/* Projects */}
        <div className="card-grid">
          {filteredProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="card project-card cardH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                className="project-card__image"
                alt={project.title}
                loading="lazy"
              />
              <h3 className="card__heading">{project.title}</h3>
              <p className="card__year">
                {project.category} • {project.year}
              </p>
              <p className="card__text">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;