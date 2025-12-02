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

  const navLinkHover = {
    color: "#3b82f6",
  };

  const sectionStyle = {
    maxWidth: "900px",
    margin: "2rem auto",
    padding: "1rem",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "12px",
    padding: "1rem 1.5rem",
    marginBottom: "1rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const cardHover = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
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
    transition: "transform 0.2s",
  };

  const buttonHover = {
    transform: "scale(1.05)",
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div>
          <h1 style={{ color: "#1e40af", fontSize: "1.75rem", margin: 0 }}>Aya Spira</h1>
          <div style={{ fontSize: "0.875rem", color: "#374151" }}>
            MSc Computer Science, Tel Aviv University · AI Security Researcher
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
        <section style={{ ...sectionStyle, display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ flex: 2 }}>
            <h2 style={{ fontSize: "2.5rem", color: "#1e3a8a", marginBottom: "1rem" }}>
              Hi — I'm Aya Spira.
            </h2>
            <p style={{ color: "#1f2937" }}>
              MSc Computer Science student at Tel Aviv University researching AI security under Dr. Ben Nassi and Prof. Avishai Wool.
              I work at the intersection of AI and security, focusing on safety, privacy and robustness of modern AI systems, building experiments and prototypes to evaluate security and defenses.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <a href="mailto:aya16816@gmail.com" style={buttonStyle}>Email</a>
              <a href="https://www.linkedin.com/in/aya-spira" target="_blank" rel="noreferrer" style={{ ...buttonStyle, background: "white", color: "#1e3a8a", border: "1px solid #3b82f6" }}>LinkedIn</a>
              <a href="#projects" style={{ ...buttonStyle, background: "white", color: "#1e3a8a", border: "1px solid #3b82f6" }}>Projects</a>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={cardStyle}>
              <h4 style={{ color: "#1e40af" }}>Current</h4>
              <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>AI Security Researcher at Tel Aviv University (under Dr. Ben Nassi & Prof. Avishai Wool)</p>
            </div>
            <div style={cardStyle}>
              <h4 style={{ color: "#1e40af" }}>Education</h4>
              <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>MSc Computer Science, Tel Aviv University (2025–2027)</p>
              <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>BSc Computer Science, Technion (2021-2024, Magna Cum Laude)</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={sectionStyle}>
          <h3 style={{ color: "#1e3a8a", fontSize: "1.75rem" }}>About</h3>
          <p style={{ color: "#1f2937" }}>
            I focus on AI security: analyzing vulnerabilities in LLM-powered applications, studying model misuse pathways, and developing
            principled defenses. My work spans adversarial attacks, privacy leakage, model behavior auditing, and secure ML deployment.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <div style={cardStyle}>
              <h5 style={{ color: "#2563eb" }}>Honors & Awards</h5>
              <ul style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                <li>President's List Award</li>
                <li>2nd place — CS Doing Good Hackathon</li>
              </ul>
            </div>
            <div style={cardStyle}>
              <h5 style={{ color: "#2563eb" }}>Background</h5>
              <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>Experience in software engineering and applied ML research.</p>
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" style={sectionStyle}>
          <h3 style={{ color: "#1e3a8a", fontSize: "1.75rem" }}>Research</h3>
          <p style={{ color: "#1f2937" }}>
            My research centers on AI security: attacks, defenses, privacy risks, and the reliability of LLM-based systems. I focus on practical vulnerabilities and methods to prevent adversarial misuse.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
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
                <li><a href="https://www.tau.ac.il/~bnassi" target="_blank" rel="noreferrer" style={{ color: "#1d4ed8", textDecoration: "underline" }}>Dr. Ben Nassi</a> — AI Security, Tel Aviv University</li>
                <li><a href="https://www.cs.tau.ac.il/~wool/" target="_blank" rel="noreferrer" style={{ color: "#1d4ed8", textDecoration: "underline" }}>Prof. Avishai Wool</a> — Cybersecurity, Tel Aviv University</li>
              </ul>
            </div>
            <div style={cardStyle}>
              <h6 style={{ color: "#2563eb" }}>Publications</h6>
              <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>A formal list of publications and manuscripts will appear here.</p>
            </div>
          </div>
        </section>

        {/* Projects / CV / Contact can be styled similarly */}
      </main>
    </div>
  );
}
