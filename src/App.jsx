import React from "react";

// Single-file React component for a clean academic / research personal website.
// Uses Tailwind CSS utility classes (assumes Tailwind is available in the project).
// Default export: AyaSpiraSite

export default function AyaSpiraSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Aya Spira</h1>
            <div className="text-sm text-gray-500">MSc Computer Science, Tel Aviv University · AI Security Researcher</div>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#cv" className="hover:underline">CV</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-3 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold">Hi — I'm Aya Spira.</h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              MSc Computer Science student at Tel Aviv University researching AI security under Dr. Ben Nassi and Prof. Avishai Wool. I work at the intersection of AI and security,
              focusing on the safety, privacy and robustness of modern AI systems, with experience building experiments and prototypes that evaluate
              model security and defenses.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:aya16816@gmail.com" className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white text-sm">Email</a>
              <a href="https://www.linkedin.com/in/aya-spira" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-md border text-sm">LinkedIn</a>
              <a href="#projects" className="inline-block px-4 py-2 rounded-md border text-sm">Projects</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Top skills:</strong> Transformers · PostgreSQL · Vector databases
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="w-full bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-medium">Current</h4>
              <div className="text-sm text-gray-600">AI Security Researcher at Tel Aviv University (under Dr. Ben Nassi & Prof. Avishai Wool)</div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-medium">Education</h4>
              <div className="text-sm text-gray-600">MSc Computer Science, Tel Aviv University (2025–2027)</div>
              <div className="text-sm text-gray-600">BSc Computer Science, Technion (magna cum laude)</div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-12">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I focus on AI security — analyzing vulnerabilities in modern LLM-powered applications, studying model misuse pathways, and developing
            principled defenses. My work spans adversarial attacks, privacy leakage, model behavior auditing, and secure ML deployment.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h5 className="font-medium">Honors & Awards</h5>
              <ul className="mt-2 text-sm text-gray-600 list-disc ml-5">
                <li>President's List Award</li>
                <li>2nd place — CS Doing Good Hackathon</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h5 className="font-medium">Background</h5>
              <p className="mt-2 text-sm text-gray-600">Former intelligence analyst in the IDF. Experience in software engineering and applied ML research. BSc from Technion; semester abroad at TUM.</p>
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="mt-12">
          <h3 className="text-2xl font-semibold">Research</h3>
          <p className="mt-4 text-gray-700">
            My research centers on AI security: attacks, defenses, privacy risks, and the reliability of LLM-based systems. I am particularly
            interested in practical vulnerabilities of deployed models and methods for preventing adversarial misuse.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h6 className="font-medium">Core Areas</h6>
              <ul className="mt-2 text-sm text-gray-600 list-disc ml-5">
                <li>LLM safety & misuse detection</li>
                <li>Adversarial attacks on generative models</li>
                <li>Privacy & data leakage in ML systems</li>
                <li>Model robustness and secure deployment</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h6 className="font-medium">Advisors</h6>
              <p className="mt-2 text-sm text-gray-600">Dr. Ben Nassi — AI Security, Tel Aviv University.</p>
              <p className="mt-1 text-sm text-gray-600">Prof. Avishai Wool — Cybersecurity, Tel Aviv University.</p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h6 className="font-medium">Publications (coming soon)</h6>
              <p className="mt-2 text-sm text-gray-600">A formal list of publications and manuscripts will appear here.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Projects & selected work</h3>
          <p className="mt-3 text-gray-600 text-sm">(Add short writeups + links to code / PDFs for each project.)</p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <article className="bg-white rounded-md shadow-sm p-4">
              <h4 className="font-medium">Project Title — short description</h4>
              <p className="mt-2 text-sm text-gray-600">One-line summary of research outcome, dataset or model used, and a link to code.</p>
              <div className="mt-3 flex gap-2">
                <a className="text-sm underline" href="#">Code</a>
                <a className="text-sm underline" href="#">Paper</a>
              </div>
            </article>

            <article className="bg-white rounded-md shadow-sm p-4">
              <h4 className="font-medium">Project Title — short description</h4>
              <p className="mt-2 text-sm text-gray-600">Another short summary. Replace with your real projects and add thumbnails if you like.</p>
            </article>
          </div>
        </section>

        {/* CV */}
        <section id="cv" className="mt-12">
          <h3 className="text-2xl font-semibold">CV & links</h3>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="/Profile.pdf" className="inline-block px-4 py-2 rounded-md border text-sm">Download resume (PDF)</a>
            <a href="https://www.linkedin.com/in/aya-spira" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-md border text-sm">LinkedIn profile</a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 mb-24">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-3 text-gray-700">Email: <a className="underline" href="mailto:aya16816@gmail.com">aya16816@gmail.com</a></p>

          <div className="mt-6 bg-white p-4 rounded-md shadow-sm">
            <h6 className="font-medium">Quick message</h6>
            <form action={`mailto:aya16816@gmail.com`} method="GET" className="mt-3 flex flex-col gap-3">
              <input name="subject" placeholder="Subject" className="border rounded-md px-3 py-2 text-sm" />
              <textarea name="body" rows={4} placeholder="Message" className="border rounded-md px-3 py-2 text-sm" />
              <div>
                <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm">Send (opens mail client)</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center">
          <div>© Aya Spira</div>
          <div className="mt-3 sm:mt-0">Built with React · Tailwind</div>
        </div>
      </footer>
    </div>
  );
}
