const skills = {
  "Software Engineering": [
    "Java",
    "Python",
    "C / C++",
    "TypeScript",
    "SQL",
    "React Native",
    "JavaFX",
    "REST APIs",
  ],
  "Secure Systems": [
    "Assembly",
    "MIPS",
    "FPGA",
    "Processor Verification",
    "Cadence Xcelium",
    "Waveform Analysis",
    "Linux",
  ],
  "Cloud & Tools": [
    "Expo",
    "Supabase",
    "Firestore",
    "Git",
    "GitHub",
    "GitLab",
    "Azure Data Studio",
  ],
};

const logiScreens = [
  {
    src: "/images/logitruck/dashboard-demo.png",
    alt: "LogiTruck operations dashboard with fleet metrics and recent shipments",
  },
  {
    src: "/images/logitruck/shipment-management-demo.png",
    alt: "LogiTruck shipment management table",
  },
  {
    src: "/images/logitruck/truck-management-demo.png",
    alt: "LogiTruck fleet management table",
  },
  {
    src: "/images/logitruck/maintenance-management-demo.png",
    alt: "LogiTruck maintenance management table",
  },
  {
    src: "/images/logitruck/driver-management-demo.png",
    alt: "LogiTruck driver management table",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abdur Rehman, home">
          <span className="brand-mark">AR</span>
          <span>Abdur Rehman</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/files/abdur-rehman-resume.pdf" download>
          Résumé
        </a>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="availability">
            <span aria-hidden="true" />
            Open to 2026 opportunities
          </div>
          <p className="eyebrow">Software · Security · Systems</p>
          <h1 id="hero-heading">
            I build software that connects the{" "}
            <span>interface to the architecture.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Abdur Rehman, a Computer Science student and secure-systems
            intern working across processor verification, cross-platform
            applications, and cloud-integrated software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work
            </a>
            <a className="button button-secondary" href="mailto:rabdur2005@gmail.com">
              Start a conversation
            </a>
          </div>
          <div className="hero-links" aria-label="Social profiles">
            <a href="https://github.com/rehman20052" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/abdurrehman2005"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <span>Deer Park, New York</span>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Portrait of Abdur Rehman">
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-card">
            <img
              src="/images/profile/abdur-rehman.png"
              alt="Abdur Rehman"
              width="800"
              height="800"
            />
            <div className="portrait-label">
              <span>Currently</span>
              Secure Processor Verification
            </div>
          </div>
          <div className="signal-card signal-top">
            <span>Focus</span>
            Security-first engineering
          </div>
          <div className="signal-card signal-bottom">
            <strong>3.71</strong>
            <span>GPA · Dean&apos;s List</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Highlights">
        <div>
          <strong>2 terms</strong>
          <span>AFRL secure processor verification</span>
        </div>
        <div>
          <strong>3 projects</strong>
          <span>Mobile, desktop, and cloud systems</span>
        </div>
        <div>
          <strong>2026</strong>
          <span>B.S. Computer Science candidate</span>
        </div>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Built to solve real problems.</h2>
          </div>
          <p>
            Each project is a different view of how I think: adaptive learning,
            operational systems, and fast product experimentation.
          </p>
        </div>

        <article className="project project-featured">
          <div className="project-number">01</div>
          <div className="project-copy">
            <div className="project-kicker">
              <span>Flagship project</span>
              2026 — Present
            </div>
            <h3>UrduSeekho</h3>
            <p className="project-lead">
              A cross-platform learning system that helps people read Urdu
              through structured lessons, deliberate practice, and adaptive
              review.
            </p>
            <ul className="project-points">
              <li>
                Implemented SM-2 spaced repetition with automatically derived
                review quality scores.
              </li>
              <li>
                Built a custom audio pipeline that segments original voice
                recordings into lesson-ready clips.
              </li>
              <li>
                Added Supabase-backed audio resolution with Web Speech API
                fallback for missing recordings.
              </li>
            </ul>
            <div className="tag-list">
              <span>React Native</span>
              <span>Expo 56</span>
              <span>TypeScript</span>
              <span>Supabase</span>
              <span>Python</span>
            </div>
            <div className="project-links">
              <a
                className="text-link"
                href="https://github.com/rehman20052/UrduSeekho"
                target="_blank"
                rel="noreferrer"
              >
                View source ↗
              </a>
            </div>
          </div>
          <div className="urdu-gallery">
            <figure className="urdu-main">
              <img
                src="/images/urdu-seekho/dashboard.png"
                alt="UrduSeekho learner dashboard"
              />
            </figure>
            <figure>
              <img
                src="/images/urdu-seekho/learn.png"
                alt="UrduSeekho structured learning paths"
              />
            </figure>
            <figure>
              <img
                src="/images/urdu-seekho/practice.png"
                alt="UrduSeekho practice modes"
              />
            </figure>
          </div>
        </article>

        <article className="project logitruck-project">
          <div className="project-number">02</div>
          <div className="project-copy">
            <div className="project-kicker">
              <span>Team lead · 4 developers</span>
              Sep — Dec 2025
            </div>
            <h3>LogiTruck</h3>
            <p className="project-lead">
              A desktop fleet operations platform for managing trucks, drivers,
              shipments, and maintenance from one synchronized system.
            </p>
            <ul className="project-points">
              <li>
                Led planning, task delegation, GitHub workflow, and integration
                testing.
              </li>
              <li>
                Designed a layered MVC architecture separating the interface,
                business logic, and data access.
              </li>
              <li>
                Integrated Firestore for cloud persistence and real-time
                synchronization.
              </li>
            </ul>
            <div className="tag-list">
              <span>Java</span>
              <span>JavaFX</span>
              <span>Firestore</span>
              <span>MVC</span>
              <span>JSON</span>
            </div>
            <a
              className="text-link"
              href="https://github.com/rehman20052/truck-logistics-app"
              target="_blank"
              rel="noreferrer"
            >
              View source ↗
            </a>
          </div>
          <div className="logitruck-gallery">
            {logiScreens.map((screen, index) => (
              <figure className={index === 0 ? "screen-featured" : ""} key={screen.src}>
                <img src={screen.src} alt={screen.alt} />
              </figure>
            ))}
          </div>
        </article>

        <article className="project lazychef-project">
          <div className="project-number">03</div>
          <div className="project-copy">
            <div className="project-kicker">
              <span>48-hour hackathon build</span>
              April 2025
            </div>
            <h3>Lazy Chef</h3>
            <p className="project-lead">
              A mobile assistant that turns a photo of the ingredients you have
              into recipes you can actually make.
            </p>
            <ul className="project-points">
              <li>
                Used Google Vision to identify ingredients from kitchen photos.
              </li>
              <li>
                Filtered visual clutter before sending structured ingredients
                to the recipe service.
              </li>
              <li>
                Let users add or remove ingredients to regenerate more useful
                suggestions.
              </li>
            </ul>
            <div className="tag-list">
              <span>Mobile</span>
              <span>Google Vision</span>
              <span>Spoonacular API</span>
              <span>AI</span>
            </div>
            <div className="project-links">
              <a
                className="text-link"
                href="https://github.com/rehman20052/LazyChef"
                target="_blank"
                rel="noreferrer"
              >
                View source ↗
              </a>
              <a
                className="text-link"
                href="https://youtube.com/shorts/uGnbKYTWSSM"
                target="_blank"
                rel="noreferrer"
              >
                Watch demo ↗
              </a>
            </div>
          </div>
          <div className="video-shell">
            <div className="video-label">
              <span>Product demo</span>
              RAM Hacks · 2025
            </div>
            <iframe
              src="https://www.youtube.com/embed/uGnbKYTWSSM"
              title="Lazy Chef mobile application demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Experience & research</p>
              <h2>From transistors to interfaces.</h2>
            </div>
            <p>
              My work sits at the intersection of hardware assurance,
              cybersecurity research, and software engineering.
            </p>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-date">2025 · 2026</div>
              <div>
                <p className="timeline-org">Air Force Research Laboratory</p>
                <h3>RI Intern · Secure Processor Verification</h3>
                <p>
                  Developed assembly-level regression tests for a custom secure
                  processor, traced execution in Cadence Xcelium and ViVa, and
                  worked with hardware engineers to verify security-feature
                  fixes against design specifications.
                </p>
                <div className="tag-list">
                  <span>Assembly</span>
                  <span>Processor Security</span>
                  <span>Cadence Xcelium</span>
                  <span>Waveform Analysis</span>
                </div>
              </div>
            </article>
            <article>
              <div className="timeline-date">Summer 2024</div>
              <div>
                <p className="timeline-org">Farmingdale State College · SURI</p>
                <h3>Undergraduate Cybersecurity Researcher</h3>
                <p>
                  Researched machine learning and NLP techniques for detecting
                  network anomalies, examined bias and privacy in AI security
                  systems, and presented the work at the SURI and IGNITE
                  symposia.
                </p>
                <div className="tag-list">
                  <span>Cybersecurity</span>
                  <span>Machine Learning</span>
                  <span>NLP</span>
                  <span>Research</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell skills-section" id="skills">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technical toolkit</p>
            <h2>Depth across the stack.</h2>
          </div>
          <p>
            Comfortable moving between low-level execution, application
            architecture, and the systems that connect them.
          </p>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <article key={group}>
              <span className="skills-index">0{Object.keys(skills).indexOf(group) + 1}</span>
              <h3>{group}</h3>
              <div className="skill-cloud">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="education-card">
          <div>
            <p className="eyebrow">Education</p>
            <h3>Farmingdale State College, SUNY</h3>
            <p>Bachelor of Science in Computer Science · Expected Fall 2026</p>
          </div>
          <div className="education-stat">
            <strong>3.71</strong>
            <span>Cumulative GPA</span>
          </div>
          <div className="education-stat">
            <strong>2023—Now</strong>
            <span>Dean&apos;s List</span>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>
            Building something where <span>security and software</span> meet?
          </h2>
          <p>
            I&apos;m exploring internships and new-grad opportunities across
            cybersecurity, secure systems, and software engineering.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:rabdur2005@gmail.com">
              rabdur2005@gmail.com
            </a>
            <a className="button button-secondary" href="/files/abdur-rehman-resume.pdf">
              View résumé
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">AR</span>
          <div>
            <strong>Abdur Rehman</strong>
            <span>Software · Security · Systems</span>
          </div>
        </div>
        <div className="footer-links">
          <a href="https://github.com/rehman20052" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdurrehman2005"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p>© 2026 Abdur Rehman</p>
      </footer>
    </main>
  );
}
