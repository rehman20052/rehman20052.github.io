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
    "Expo Router",
    "JavaFX",
    "RESTful APIs",
  ],
  "Secure Systems": [
    "Assembly",
    "MIPS",
    "FPGA",
    "Processor Verification",
    "Cadence Xcelium",
    "Cadence Virtuoso ViVa",
    "Waveform Analysis",
    "Linux",
  ],
  "Cloud & Tools": [
    "Supabase",
    "Firestore",
    "Git",
    "GitHub",
    "GitLab",
    "Vim",
    "IntelliJ IDEA",
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
          <span>Abdur Rehman</span>
          <small>Portfolio</small>
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
          <p className="eyebrow">Hi, I&apos;m Abdur</p>
          <h1 id="hero-heading">
            I&apos;m interested in how software works{" "}
            <span>at every level.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m a Computer Science student who enjoys moving between low-level
            processor verification and software people use directly. Most of my
            work starts with a problem I genuinely want to understand or solve.
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
            <p className="eyebrow">Projects</p>
            <h2>Things I&apos;ve built.</h2>
          </div>
          <p>
            These projects taught me how to design around real users, work with
            a team, and turn an idea into something functional.
          </p>
        </div>

        <article className="project project-featured">
          <div className="project-copy">
            <div className="project-kicker">
              <span>Independent project</span>
              2026 — Present
            </div>
            <h3>UrduSeekho</h3>
            <p className="project-lead">
              A language-learning app for people who understand some Urdu but
              want to become confident reading, speaking, and using it correctly.
            </p>
            <div className="project-story">
              <span>Why I built it</span>
              <p>
                I grew up knowing how to read Urdu, but after moving to the
                United States I gradually lost touch with the script. I built
                UrduSeekho to teach myself again—and to help other people in the
                same position. Many South Asian learners already understand a
                lot of spoken Urdu through family or Bollywood, yet still get
                stuck on the script and grammar. The app focuses on that gap,
                especially sentence structure, masculine and feminine forms,
                and past and present tense. Duolingo offers Hindi but not Urdu,
                so I wanted to build the kind of Urdu course I could not find.
              </p>
            </div>
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
          <div className="project-copy">
            <div className="project-kicker">
              <span>Team lead · 4 developers</span>
              Sep — Dec 2025
            </div>
            <h3>LogiTruck</h3>
            <p className="project-lead">
              My first experience leading a four-person development team: a
              desktop system for managing trucks, drivers, shipments, and
              maintenance in one place.
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
              <h2>What I&apos;ve worked on.</h2>
            </div>
            <p>
              I&apos;ve had the chance to work on secure hardware verification and
              research how machine learning can be used in cybersecurity.
            </p>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-date">2025 · 2026</div>
              <div className="timeline-copy">
                <p className="timeline-org">Air Force Research Laboratory</p>
                <h3>Secure Processor Intern</h3>
                <p>
                  Restructured a monolithic assembly test suite into seven
                  standalone regression tests, identified two critical hardware
                  bugs, and fixed a silent test-harness failure that had been
                  masking false passes. Traced a cache-controller lockup through
                  Xcelium and ViVa waveforms to give design engineers a precise
                  starting point for the fix.
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
              <div className="timeline-copy">
                <p className="timeline-org">Farmingdale State College · SURI</p>
                <h3>AI Security Researcher</h3>
                <p>
                  Applied machine learning and NLP models to network-traffic
                  datasets to detect anomalies and classify malicious activity,
                  evaluated bias and data-privacy risks, and presented the work
                  at the SURI and IGNITE symposia. Earned a Microcredential in
                  Research.
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
            <h2>What I work with.</h2>
          </div>
          <p>
            Tools I&apos;ve used in internships, coursework, research, and the
            projects above—not a list of everything I have ever tried.
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
            <p>
              Bachelor of Science in Computer Science · Expected December 2026
            </p>
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
          <p className="eyebrow">Get in touch</p>
          <h2>
            Want to talk about <span>security or software?</span>
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
