import React, { useEffect, useState } from "react";

function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/JwanAbdullah/repos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);

        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load repositories right now.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="section" id="github">
      <div className="container">
        <h2 className="section-title">Latest GitHub Projects</h2>

        {loading && <p className="github__message">Loading repositories...</p>}
        {error && <p className="github__message">{error}</p>}

        {!loading && !error && (
          <div className="github-list">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-item"
              >
                <div className="github-item__top">
                  <h3 className="github-item__name">{repo.name}</h3>
                  <span className="github-item__stars">★ {repo.stargazers_count}</span>
                </div>

                <p className="github-item__desc">
                  {repo.description || "No description available."}
                </p>

                <div className="github-item__meta">
                  <span>{repo.language || "Unknown"}</span>
                  <span>
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GithubRepos;