import React from "react";

export default function App() {
  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    background: "linear-gradient(to bottom, #e0f2ff, #f0f7ff, #e0f2ff)",
    color: "#1a202c",
    minHeight: "100vh",
    padding: "0",
    margin: "0",
  };

  const headerStyle = {
    position: "sticky",
    top: 0,
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(5px)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    zIndex: 100,
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navLinkStyle = {
    marginLeft: "1rem",
    textDecoration: "none",
    color: "#1e3a8a",
    fontWeight: "500",
  };

  const sectionStyle = {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "1rem",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "12px",
    padding: "1rem 1.5rem",
    marginBottom: "1rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const buttonStyle = {
    background: "linear-gradient(to right, #3b82f6, #1e40af)",
    color: "white",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "600",
    marginRight: "0.5rem",
    marginTop: "0.5rem",
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div>
          <h1 style={{ color: "#1e40af", fontSize: "1.75rem", margin: 0 }}>Aya Spira</h1>
          <div style={{ fontSize: "0.875rem", color: "#374151" }}>
            MSc Computer Science · AI Security Researcher
          </div>
        </div>
        <nav>
          {["About", "Research", "Projects", "CV", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} style={navLinkStyle}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section style={sectionStyle}>
          <p style={{ color: "#1f2937", fontSize: "1.1rem" }}>
            MSc Computer Science student at Tel Aviv University researching AI security under Dr. Ben Nassi & Prof. Avishai Wool.
            I focus on building experiments and tools to improve the safety, privacy, and robustness of AI systems.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a href="mailto:aya16816@gmail.com" style={buttonStyle}>Email</a>
            <a href="https://www.linkedin.com/in/aya-spira" target="_blank" rel="noreferrer" style={{ ...buttonStyle, background: "white", color: "#1e3a8a", border: "1px solid #3b82f6" }}>LinkedIn</a>
            <a href="#projects" style={{ ...buttonStyle, background: "white", color: "#1e3a8a", border: "1px solid #3b82f6" }}>Projects</a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={sectionStyle}>
          <h3 style={{ color: "#1e3a8a", fontSize: "1.75rem" }}>About</h3>
          <p style={{ color: "#1f2937" }}>
            I specialize in AI security: identifying vulnerabilities in LLM-powered systems, designing principled defenses, and auditing models for privacy and robustness.
            Previously, I gained experience in software engineering and applied ML research.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <div style={cardStyle}>
              <h5 style={{ color: "#2563eb" }}>Honors & Awards</h5>
              <ul style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                <li>President's List Award</li>
                <li>2nd place — CS Doing Good Hackathon</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" style={sectionStyle}>
          <h3 style={{ color: "#1e3a8a", fontSize: "1.75rem" }}>Research</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <div style={cardStyle}>
              <h6 style={{ color: "#2563eb" }}>Core Areas</h6>
              <ul style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                <li>LLM safety & misuse detection</li>
                <li>Adversarial attacks on generative models</li>
                <li>Privacy & data leakage in ML systems</li>
                <li>Model robustness and secure deployment</li>
              </ul>
            </div>
            <div style={cardStyle}>
              <h6 style={{ color: "#2563eb" }}>Advisors</h6>
              <ul style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                <li>
                  <a href="https://www.tau.ac.il/~bnassi" target="_blank" rel="noreferrer" style={{ color: "#1d4ed8", textDecoration: "underline" }}>
                    Dr. Ben Nassi
                  </a> — AI Security, Tel Aviv University
                </li>
                <li>
                  <a href="https://www.cs.tau.ac.il/~wool/" target="_blank" rel="noreferrer" style={{ color: "#1d4ed8", textDecoration: "underline" }}>
                    Prof. Avishai Wool
                  </a> — Cybersecurity, Tel Aviv University
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects, CV, Contact can follow the same card style */}
      </main>
    </div>
  );
}
