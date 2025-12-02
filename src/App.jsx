import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800 antialiased font-sans">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700">Aya Spira</h1>
            <div className="text-sm text-gray-600 mt-1">MSc Computer Science, Tel Aviv University · AI Security Researcher</div>
          </div>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#research" className="hover:text-blue-600 transition-colors">Research</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#cv" className="hover:text-blue-600 transition-colors">CV</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-3 items-center">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Hi — I'm Aya Spira.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MSc Computer Science student at Tel Aviv University researching AI security under Dr. Ben Nassi and Prof. Avishai Wool. I work at the intersection of AI and security,
              focusing on safety, privacy and robustness of modern AI systems, building experiments and prototypes to evaluate security and defenses.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="mailto:aya16816@gmail.com" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-md hover:scale-105 transform transition">Email</a>
              <a href="https://www.linkedin.com/in/aya-spira" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition">LinkedIn</a>
              <a href="#projects" className="px-5 py-2.5 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition">Projects</a>
            </div>

            <div className="text-sm text-gray-600 mt-3">
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200 p-5 hover:shadow-xl transition-shadow">
              <h4 className="font-medium text-blue-700">Current</h4>
              <div className="text-sm text-gray-600 mt-1">AI Security Researcher at Tel Aviv University (under Dr. Ben Nassi & Prof. Avishai Wool)</div>
            </div>

            <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200 p-5 hover:shadow-xl transition-shadow">
              <h4 className="font-medium text-blue-700">Education</h4>
              <div className="text-sm text-gray-600 mt-1">MSc Computer Science, Tel Aviv University (2025–2027)</div>
              <div className="text-sm text-gray-600">BSc Computer Science, Technion (2021-2024, Magna Cum Laude)</div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-700">About</h3>
          <p className="text-gray-700 leading-relaxed">
            I focus on AI security: analyzing vulnerabilities in LLM-powered applications, studying model misuse pathways, and developing
            principled defenses. My work spans adversarial attacks, privacy leakage, model behavior auditing, and secure ML deployment.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow">
              <h5 className="font-medium text-blue-600">Honors & Awards</h5>
              <ul className="mt-2 text-sm text-gray-600 list-disc ml-5">
                <li>President's List Award</li>
                <li>2nd place — CS Doing Good Hackathon</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow">
              <h5 className="font-medium text-blue-600">Background</h5>
              <p className="mt-2 text-sm text-gray-600">Experience in software engineering (ptc) and applied ML research (IBM Research).</p>
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-700">Research</h3>
          <p className="text-gray-700">
            My research centers on AI security: attacks, defenses, privacy risks, and the reliability of LLM-based systems. I focus on practical vulnerabilities and methods to prevent adversarial misuse.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow">
              <h6 className="font-medium text-blue-600">Core Areas</h6>
              <ul className="mt-2 text-sm text-gray-600 list-disc ml-5">
                <li>LLM safety & misuse detection</li>
                <li>Adversarial attacks on generative models</li>
                <li>Privacy & data leakage in ML systems</li>
                <li>Model robustness and secure deployment</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow">
              <h6 className="font-medium text-blue-600">Advisors</h6>
              <p className="mt-2 text-sm text-gray-600">
                <a href="https://www.tau.ac.il/~bnassi" target="_blank" rel="noreferrer" className="underline text-blue-600">
                  Dr. Ben Nassi
                </a> - AI Security, Tel Aviv University.
              </p>
                            <p className="mt-2 text-sm text-gray-600">
                 <a href="https://www.cs.tau.ac.il/~wool/" target="_blank" rel="noreferrer" className="underline text-blue-600">
                  Prof. Avishai Wool
                </a> - Cybersecurity, Tel Aviv University.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow">
              <h6 className="font-medium text-blue-600">Publications</h6>
              <p className="mt-2 text-sm text-gray-600">A formal list of publications and manuscripts will appear here.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-700">Projects & Selected Work</h3>
          <p className="text-gray-600 text-sm">(Add short writeups + links to code / PDFs for each project.)</p>

          <div className="grid md:grid-cols-2 gap-4">
            <article className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow">
              <h4 className="font-medium text-blue-600">Project Title — short description</h4>
              <p className="mt-2 text-sm text-gray-600">One-line summary of research outcome, dataset or model used, and a link to code.</p>
              <div className="mt-3 flex gap-2">
                <a className="text-sm underline text-blue-600" href="#">Code</a>
                <a className="text-sm underline text-blue-600" href="#">Paper</a>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow">
              <h4 className="font-medium text-blue-600">Project Title — short description</h4>
              <p className="mt-2 text-sm text-gray-600">Another short summary. Replace with your real projects and add thumbnails if you like.</p>
            </article>
          </div>
        </section>

        {/* CV */}
        <section id="cv" className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-700">CV & Links</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/Profile.pdf" className="px-5 py-2 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition">Download Resume (PDF)</a>
            <a href="https://www.linkedin.com/in/aya-spira" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition">LinkedIn Profile</a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="space-y-4 mb-24">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-700">Contact</h3>
          <p className="text-gray-700">Email: <a className="underline text-blue-600" href="mailto:aya16816@gmail.com">aya16816@gmail.com</a></p>

          <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow">
            <h6 className="font-medium text-blue-600">Quick Message</h6>
            <form action={`mailto:aya16816@gmail.com`} method="GET" className="mt-3 flex flex-col gap-3">
              <input name="subject" placeholder="Subject" className="border rounded-md px-3 py-2 text-sm" />
              <textarea name="body" rows={4} placeholder="Message" className="border rounded-md px-3 py-2 text-sm" />
              <button type="submit" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-md hover:scale-105 transform transition">Send</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center">
          <div>© Aya Spira</div>
        </div>
      </footer>
    </div>
  );
}
