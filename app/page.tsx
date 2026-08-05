"use client";

import { useEffect, useState } from "react";

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

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

const urduScreens: GalleryImage[] = [
  {
    src: "/images/urdu-seekho/dashboard.png",
    alt: "UrduSeekho learner dashboard",
    caption: "Personal dashboard with daily goals, streaks, XP, and progression.",
  },
  {
    src: "/images/urdu-seekho/learn.png",
    alt: "UrduSeekho structured learning paths",
    caption: "Guided paths for reading, speaking, fluency, and Urdu grammar.",
  },
  {
    src: "/images/urdu-seekho/practice.png",
    alt: "UrduSeekho practice modes",
    caption: "Focused review for mistakes, vocabulary, sentences, and listening.",
  },
];

const logiScreens = [
  {
    src: "/images/logitruck/dashboard-demo.png",
    alt: "LogiTruck operations dashboard with fleet metrics and recent shipments",
    caption: "Operations dashboard with fleet availability and shipment activity.",
  },
  {
    src: "/images/logitruck/shipment-management-demo.png",
    alt: "LogiTruck shipment management table",
    caption: "Shipment tracking with routes, assignments, dates, and delivery status.",
  },
  {
    src: "/images/logitruck/truck-management-demo.png",
    alt: "LogiTruck fleet management table",
    caption: "Fleet records with capacity, mileage, drivers, and availability.",
  },
  {
    src: "/images/logitruck/maintenance-management-demo.png",
    alt: "LogiTruck maintenance management table",
    caption: "Scheduled maintenance records connected to the active truck fleet.",
  },
  {
    src: "/images/logitruck/driver-management-demo.png",
    alt: "LogiTruck driver management table",
    caption: "Driver records with compliance, endorsements, and assignment status.",
  },
] satisfies GalleryImage[];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" role="img">
        <defs>
          <linearGradient id="brand-a" x1="7" y1="39" x2="26" y2="8">
            <stop stopColor="#42d392" />
            <stop offset="1" stopColor="#4fc3f7" />
          </linearGradient>
        </defs>
        <path
          d="M7.5 38 18.5 9.5 29 38M12.2 28h12.6"
          fill="none"
          stroke="url(#brand-a)"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 38V11h7.2c5.3 0 8.3 2.9 8.3 7.2 0 4.4-3.2 7.2-8.5 7.2h-7M35 25.4 43 38"
          fill="none"
          stroke="#f0bd4e"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="38" r="2.3" fill="#42d392" />
        <circle cx="18.5" cy="9.5" r="2.3" fill="#4fc3f7" />
        <circle cx="43" cy="38" r="2.3" fill="#f0bd4e" />
      </svg>
    </span>
  );
}

export default function Home() {
  const [gallery, setGallery] = useState<{
    items: GalleryImage[];
    index: number;
  } | null>(null);

  useEffect(() => {
    if (!gallery) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGallery(null);
      if (event.key === "ArrowRight") {
        setGallery((current) =>
          current
            ? { ...current, index: (current.index + 1) % current.items.length }
            : null,
        );
      }
      if (event.key === "ArrowLeft") {
        setGallery((current) =>
          current
            ? {
                ...current,
                index:
                  (current.index - 1 + current.items.length) %
                  current.items.length,
              }
            : null,
        );
      }
    };

    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [gallery]);

  const openGallery = (items: GalleryImage[], index: number) => {
    setGallery({ items, index });
  };

  const moveGallery = (direction: number) => {
    setGallery((current) =>
      current
        ? {
            ...current,
            index:
              (current.index + direction + current.items.length) %
              current.items.length,
          }
        : null,
    );
  };

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abdur Rehman, home">
          <BrandMark />
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
              <a className="text-link" href="#urdu-demo">
                Watch demo ↓
              </a>
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
            <div className="project-demo" id="urdu-demo">
              <div className="video-label">
                <span>Product walkthrough</span>
                58 seconds · No audio required
              </div>
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/urdu-seekho/dashboard.png"
              >
                <source src="/videos/urdu-seekho-demo.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <p>
                Account and guest access, backend-saved progress, guided lessons,
                grammar, personal voice prompts, spoken responses, and mistake review.
              </p>
            </div>
            {urduScreens.map((screen, index) => (
              <button
                className={`gallery-trigger ${index === 0 ? "urdu-main" : ""}`}
                key={screen.src}
                type="button"
                onClick={() => openGallery(urduScreens, index)}
                aria-label={`Expand: ${screen.caption}`}
              >
                <img src={screen.src} alt={screen.alt} />
                <span>{screen.caption}</span>
                <strong aria-hidden="true">Expand ↗</strong>
              </button>
            ))}
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
              <button
                className={`gallery-trigger ${index === 0 ? "screen-featured" : ""}`}
                key={screen.src}
                type="button"
                onClick={() => openGallery(logiScreens, index)}
                aria-label={`Expand: ${screen.caption}`}
              >
                <img src={screen.src} alt={screen.alt} />
                <span>{screen.caption}</span>
                <strong aria-hidden="true">Expand ↗</strong>
              </button>
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
                href="https://github.com/rehman20052/LazyChef-App"
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
              <div className="timeline-copy">
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
              <figure className="experience-visual">
                <img
                  src="/images/experience/secure-processor-verification.jpg"
                  alt="Abstract secure processor verification with circuit routes and waveform traces"
                />
                <figcaption>
                  <span>Verification layer</span>
                  Assembly tests · execution traces · security checks
                </figcaption>
              </figure>
            </article>
            <article>
              <div className="timeline-date">Summer 2024</div>
              <div className="timeline-copy">
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
              <figure className="experience-visual">
                <img
                  src="/images/experience/cybersecurity-research.jpg"
                  alt="Abstract machine learning network anomaly detection visualization"
                />
                <figcaption>
                  <span>Research focus</span>
                  Network anomalies · machine learning · responsible AI
                </figcaption>
              </figure>
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
          <BrandMark />
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

      {gallery ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project image"
          onClick={() => setGallery(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setGallery(null)}
            aria-label="Close expanded image"
          >
            ×
          </button>
          {gallery.items.length > 1 ? (
            <>
              <button
                className="lightbox-arrow lightbox-previous"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  moveGallery(-1);
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="lightbox-arrow lightbox-next"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  moveGallery(1);
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          ) : null}
          <figure
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={gallery.items[gallery.index].src}
              alt={gallery.items[gallery.index].alt}
            />
            <figcaption>
              <span>
                {gallery.index + 1} / {gallery.items.length}
              </span>
              {gallery.items[gallery.index].caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </main>
  );
}
