import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Radio,
  Search,
  ShieldCheck,
  Signal,
  Users
} from "lucide-react";
import AntennaPage from "./components/AntennaPage.jsx";
import GuidePage from "./components/GuidePage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import RadioModel, { radioMotion } from "./components/RadioModel.jsx";
import StorePage from "./components/StorePage.jsx";
import {
  antennaGuides,
  assets,
  eventMemories,
  forms,
  glossary,
  heroStats,
  legalRules,
  licensePath,
  officials,
  regionalContacts,
  storySections
} from "./data/content.js";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Header({ guide = false, antenna = false, store = false }) {
  const homeHref = guide || antenna || store ? "/" : "#top";

  return (
    <header className="site-header">
      <a className="brand" href={homeHref} aria-label="PARS PAKHAMS home">
        <img src={assets.logo} alt="" />
        <span>
          <strong>PARS / PAKHAMS</strong>
          <small>Pakistan Amateur Radio Society</small>
        </span>
      </a>
      <nav aria-label="Main sections">
        {guide ? (
          <>
            <a href="/">Home</a>
            <a href="/antennas">Antenna Wiki</a>
            <a href="/store">Store</a>
            <a href="#forms">Downloads</a>
            <a href="#contacts">Contacts</a>
          </>
        ) : antenna ? (
          <>
            <a href="/">Home</a>
            <a href="/guide">Full Guide</a>
            <a href="/store">Store</a>
            <a href="#guides">Build Guides</a>
            <a href="#basics">Basics</a>
          </>
        ) : store ? (
          <>
            <a href="/">Home</a>
            <a href="/guide">Full Guide</a>
            <a href="/antennas">Antenna Wiki</a>
            <a href="/store">Store</a>
            <a href="#cart">Cart</a>
          </>
        ) : (
          <>
            <a href="#path">License Path</a>
            <a href="/antennas">Antennas</a>
            <a href="#network">Network</a>
            <a href="/store">Store</a>
            <a href="/guide">Full Guide</a>
          </>
        )}
      </nav>
    </header>
  );
}

const chapterMeta = [
  { tag: "Society", focus: "left" },
  { tag: "Membership", focus: "right" },
  { tag: "PTA License", focus: "left" },
  { tag: "On Air", focus: "right" }
];

function ExperienceStage() {
  const chapters = useMemo(
    () =>
      storySections.map((section, index) => ({
        ...section,
        focus: chapterMeta[index]?.focus || "left"
      })),
    []
  );

  return (
    <section className="experience" aria-label="PARS field guide story">
      <div className="stage">
        <div className="stage-card">
          <div className="stage-grid" aria-hidden="true" />

          {/* BACK layer — image bands + oversized numbers sit behind the model */}
          <div className="layer layer-back" aria-hidden="true">
            <div className="cback cback--hero" data-back="0">
              <span className="watermark">AP2</span>
            </div>
            {chapters.map((chapter, index) => (
              <div className={`cback focus-${chapter.focus}`} data-back={index + 1} key={chapter.number}>
                <div className="chapter-band">
                  <img src={chapter.image} alt="" loading="lazy" />
                </div>
                <span className="chapter-num">{chapter.number}</span>
              </div>
            ))}
          </div>

          {/* The model — the host of the story */}
          <div className="stage-canvas" aria-hidden="true">
            <RadioModel />
          </div>

          {/* FRONT layer — readable typography sits in front of the model */}
          <div className="layer layer-front">
            <article className="chapter chapter--hero" data-chapter="0">
              <div className="hero-block">
                <p className="eyebrow rise">Pakistan Amateur Radio Society</p>
                <h1 className="display">
                  <span className="rise-line">PARS</span>
                </h1>
                <p className="display-sub">
                  <span className="rise-line">Field Guide</span>
                </p>
                <p className="lede rise">
                  Your path from Short Wave Listener to a PTA amateur radio licence — the legal terms, the official
                  forms, and your first antennas, all from PARS in one place.
                </p>
                <div className="hero-actions rise">
                  <a className="primary-action" href="#path">
                    Start the path
                    <ArrowUpRight size={18} />
                  </a>
                  <a className="ghost-action" href="/guide">
                    Full detailed guide
                  </a>
                </div>
              </div>
              <ul className="hero-facts rise" aria-label="PARS quick facts">
                {heroStats.map((stat) => (
                  <li key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
              <p className="scroll-hint rise" aria-hidden="true">
                Scroll to follow the signal
              </p>
            </article>

            {chapters.map((chapter, index) => (
              <article
                className={`chapter chapter--story focus-${chapter.focus}`}
                data-chapter={index + 1}
                key={chapter.number}
              >
                <div className="chapter-text">
                  <p className="eyebrow rise">{chapter.label}</p>
                  <h2 className="chapter-head">
                    <span className="rise-line">{chapter.title}</span>
                  </h2>
                  <p className="chapter-copy rise">{chapter.body}</p>
                  <ul className="chapter-points rise">
                    {chapter.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="stage-hud" aria-hidden="true">
            <span className="hud-left">PARS / PAKHAMS</span>
            <div className="exp-progress">
              <span />
            </div>
            <span className="hud-right">pakhams.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Path() {
  return (
    <section id="path" className="content-band path-band">
      <div className="section-heading">
        <div>
          <p className="section-label">SWL to License</p>
          <h2>The registration route, straight from the official PAKHAMS and PTA material.</h2>
        </div>
        <p>
          Everything here comes straight from PARS and PTA — the 2026 SWL form, the earlier SWL form, the PTA
          downloads, the legal terms, syllabus notes, contacts, and our member register.
        </p>
      </div>
      <ol className="path-route">
        {licensePath.map((step, index) => (
          <li className="route-step" key={step.title}>
            <span className="route-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FormsAndRules() {
  return (
    <section id="forms" className="split-band">
      <div className="document-panel">
        <p className="section-label">Forms</p>
        <h2>Our membership forms and the official PTA links.</h2>
        <div className="form-list">
          {forms.map((form) => (
            <a key={form.title} href={form.href} target="_blank" rel="noreferrer">
              <Download size={18} />
              <span>
                <strong>{form.title}</strong>
                <small>{form.note}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="document-panel rules-panel">
        <p className="section-label">Legal Notes</p>
        <h2>Rules that should stay visible before any station goes on air.</h2>
        <ul>
          {legalRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GuideSearch() {
  const [query, setQuery] = useState("");
  const filteredGuides = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return antennaGuides;
    return antennaGuides.filter((guide) =>
      `${guide.title} ${guide.tags} ${guide.body}`.toLowerCase().includes(normalized)
    );
  }, [query]);

  return (
    <section id="guides" className="content-band guide-band">
      <div className="section-heading">
        <div>
          <p className="section-label">Build</p>
          <h2>Step-by-step antenna builds from the PARS workshop.</h2>
        </div>
        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dipole, EFHW, SWR, J-pole"
          />
        </label>
      </div>
      <div className="guide-grid">
        {filteredGuides.map((guide) => (
          <a className="guide-card" href="/antennas" key={guide.title}>
            <img src={guide.image} alt="" loading="lazy" />
            <div>
              <h3>{guide.title}</h3>
              <p>{guide.body}</p>
            </div>
          </a>
        ))}
      </div>
      <a className="band-link" href="/antennas">
        Open the antenna wiki
        <ArrowUpRight size={16} />
      </a>
    </section>
  );
}

function Glossary() {
  return (
    <section className="content-band glossary-band">
      <div className="section-heading compact">
        <div>
          <p className="section-label">Study</p>
          <h2>Quick radio terms every operator should know.</h2>
        </div>
      </div>
      <div className="glossary-grid">
        {glossary.map((item) => (
          <article key={item.term}>
            <strong>{item.term}</strong>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MemoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMemory = eventMemories[activeIndex];

  const goTo = (direction) => {
    setActiveIndex((current) => (current + direction + eventMemories.length) % eventMemories.length);
  };

  return (
    <section id="memories" className="memories-band">
      <div className="memories-head">
        <div>
          <p className="section-label">Events Archive</p>
          <h2>Moments from the PAKHAMS community.</h2>
        </div>
        <div className="memory-controls" aria-label="Memory carousel controls">
          <button type="button" onClick={() => goTo(-1)} aria-label="Previous memory">
            <ChevronLeft size={18} />
          </button>
          <output>
            {String(activeIndex + 1).padStart(2, "0")} / {String(eventMemories.length).padStart(2, "0")}
          </output>
          <button type="button" onClick={() => goTo(1)} aria-label="Next memory">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="memory-stage">
        <img src={activeMemory.image} alt="" />
        <article>
          <span>{activeMemory.date}</span>
          <h3>{activeMemory.title}</h3>
          <p>{activeMemory.text}</p>
        </article>
      </div>

      <div className="memory-grid" aria-label="Event memory thumbnails">
        {eventMemories.map((memory, index) => (
          <button
            key={memory.title}
            className={activeIndex === index ? "active" : ""}
            type="button"
            onClick={() => setActiveIndex(index)}
          >
            <img src={memory.image} alt="" loading="lazy" />
            <span>{memory.date}</span>
            <strong>{memory.title}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}

const mapPositions = {
  Lahore: { x: 66, y: 43 },
  Peshawar: { x: 46, y: 24 },
  Quetta: { x: 29, y: 58 },
  Karachi: { x: 41, y: 84 },
  Faisalabad: { x: 61, y: 39 }
};

function PakistanMap({ contacts, activeRegion, onSelect }) {
  const active = contacts.find((contact) => contact.region === activeRegion);

  return (
    <div className="pakistan-map" aria-label="Pakistan regional coordinator map">
      <svg viewBox="0 0 420 560" preserveAspectRatio="none" role="img" aria-label="Map of Pakistan">
        <defs>
          <radialGradient id="signalGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(245,211,94,0.35)" />
            <stop offset="100%" stopColor="rgba(245,211,94,0)" />
          </radialGradient>
        </defs>
        <path
          className="map-shadow"
          d="M140 100 L168 72 L210 58 L243 72 L300 52 L320 96 L276 122 L298 168 L332 222 L312 274 L272 332 L236 404 L206 470 L184 506 L120 500 L70 470 L44 442 L32 380 L40 318 L60 254 L80 200 L96 164 Z"
        />
        <path
          className="map-land"
          d="M140 100 L168 72 L210 58 L243 72 L300 52 L320 96 L276 122 L298 168 L332 222 L312 274 L272 332 L236 404 L206 470 L184 506 L120 500 L70 470 L44 442 L32 380 L40 318 L60 254 L80 200 L96 164 Z"
        />
        <path className="map-river" d="M232 120 C252 196 212 276 224 356 C232 420 196 470 180 504" />
        {active &&
          contacts
            .filter((contact) => contact.region !== active.region)
            .map((contact) => (
              <line
                key={`arc-${contact.region}`}
                className="signal-arc"
                x1={`${active.x}%`}
                y1={`${active.y}%`}
                x2={`${contact.x}%`}
                y2={`${contact.y}%`}
              />
            ))}
      </svg>
      {contacts.map((contact) => (
        <button
          key={contact.region}
          className={`map-pin ${activeRegion === contact.region ? "active" : ""}`}
          type="button"
          style={{ left: `${contact.x}%`, top: `${contact.y}%` }}
          onClick={() => onSelect(contact.region)}
          aria-label={`Show ${contact.region} coordinator`}
        >
          <span className="pin-pulse" aria-hidden="true" />
          <MapPin size={18} />
          <span className="pin-label">{contact.region}</span>
        </button>
      ))}
    </div>
  );
}

function phoneHref(value) {
  return `tel:${value.replace(/\(0\)/g, "").replace(/[^+\d]/g, "")}`;
}

function Contacts() {
  const mapContacts = useMemo(
    () => [
      {
        region: "Islamabad",
        name: "PARS AP2ARS",
        callsign: "AP2ARS",
        role: "Official mailing office",
        phone: "info@pakhams.com",
        x: 54,
        y: 30
      },
      ...regionalContacts.map((person) => ({
        ...person,
        role: "Regional coordinator",
        ...(mapPositions[person.region] || { x: 50, y: 50 })
      }))
    ],
    []
  );
  const [activeRegion, setActiveRegion] = useState("Islamabad");
  const activeContact = mapContacts.find((contact) => contact.region === activeRegion) || mapContacts[0];

  return (
    <section id="network" className="contacts-band">
      <div className="contacts-lead">
        <p className="section-label">Network</p>
        <h2>Officials, coordinators, and official channels across Pakistan.</h2>
        <p>
          General PARS email: <a href="mailto:info@pakhams.com">info@pakhams.com</a>. Mailing address: PARS AP2ARS,
          P.O. Box 1450, Islamabad, 44000, Pakistan.
        </p>
      </div>
      <div className="contact-map-panel">
        <PakistanMap contacts={mapContacts} activeRegion={activeRegion} onSelect={setActiveRegion} />
        <article className="contact-detail">
          <span>{activeContact.region}</span>
          <h3>{activeContact.name}</h3>
          <strong>{activeContact.callsign}</strong>
          <p>{activeContact.role}</p>
          <div className="contact-actions">
            <a href={activeContact.phone.includes("@") ? `mailto:${activeContact.phone}` : phoneHref(activeContact.phone)}>
              {activeContact.phone.includes("@") ? <Mail size={17} /> : <Phone size={17} />}
              {activeContact.phone}
            </a>
          </div>
        </article>
        <div className="contact-pin-list" aria-label="Regional coordinators">
          {mapContacts.map((contact) => (
            <button
              key={contact.region}
              className={activeRegion === contact.region ? "active" : ""}
              type="button"
              onClick={() => setActiveRegion(contact.region)}
            >
              <span>{contact.region}</span>
              <strong>{contact.callsign}</strong>
            </button>
          ))}
        </div>
        <div className="officials-strip">
          {officials.map((person) => (
            <article key={`${person.callsign}-${person.role}`}>
              <span>{person.callsign}</span>
              <strong>{person.name}</strong>
              <small>{person.role}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src={assets.logo} alt="" />
      <div>
        <strong>PARS / PAKHAMS Field Guide</strong>
        <span>Pakistan's national amateur radio society — membership, licensing, antennas, and community.</span>
      </div>
      <a href="https://facebook.com/pakhams" target="_blank" rel="noreferrer">
        Facebook
        <ExternalLink size={16} />
      </a>
    </footer>
  );
}

function useLandingChoreography(enabled) {
  useEffect(() => {
    if (!enabled) return undefined;

    const context = gsap.context(() => {
      const fronts = gsap.utils.toArray(".layer-front .chapter");
      const backs = gsap.utils.toArray(".layer-back .cback");
      const count = fronts.length;
      if (!count) return;

      // Model beats per chapter (index 0 is the hero / initial state).
      // Yagi antenna beats — rests on a clean broadside (rotY ~ pi/2) in the hero,
      // then yaws through ~one full revolution as you scroll. rotZ stays 0 so it
      // rotates (turns) instead of rolling/slanting.
      const modelTargets = [
        { x: 0.5, y: -0.02, rotX: 0.32, rotY: 1.5, rotZ: 0, scale: 1.5, glow: 0.34 },
        { x: 1.5, y: 0.14, rotX: 0.34, rotY: 2.9, rotZ: 0, scale: 1.32, glow: 0.5 },
        { x: -1.45, y: 0.05, rotX: 0.3, rotY: 4.3, rotZ: 0, scale: 1.28, glow: 0.44 },
        { x: 1.55, y: -0.02, rotX: 0.36, rotY: 5.7, rotZ: 0, scale: 1.36, glow: 0.62 },
        { x: -0.1, y: 0.12, rotX: 0.32, rotY: 7.1, rotZ: 0, scale: 1.46, glow: 0.52 }
      ];

      const numOf = (i) => backs[i] && backs[i].querySelector(".chapter-num");
      const bandOf = (i) => backs[i] && backs[i].querySelector(".chapter-band img");

      // Initial states.
      Object.assign(radioMotion, modelTargets[0]);
      fronts.forEach((front, index) => {
        const risers = front.querySelectorAll(".rise");
        const lines = front.querySelectorAll(".rise-line");
        const back = backs[index];
        const num = numOf(index);
        const band = bandOf(index);
        if (index === 0) {
          gsap.set([front, back], { autoAlpha: 1 });
          gsap.set([risers, lines], { autoAlpha: 1, yPercent: 0 });
        } else {
          gsap.set([front, back], { autoAlpha: 0 });
          gsap.set(risers, { autoAlpha: 0, yPercent: 70 });
          gsap.set(lines, { yPercent: 115 });
          if (num) gsap.set(num, { autoAlpha: 0, yPercent: 60 });
          if (band) gsap.set(band, { scale: 1.25, xPercent: front.classList.contains("focus-right") ? 10 : -10 });
        }
      });

      if (prefersReducedMotion) {
        // Show everything statically; stack chapters in normal flow.
        fronts.forEach((front, index) => {
          gsap.set([front, backs[index]], { autoAlpha: 1, clearProps: "transform" });
          gsap.set(front.querySelectorAll(".rise, .rise-line"), { autoAlpha: 1, yPercent: 0 });
          const num = numOf(index);
          const band = bandOf(index);
          if (num) gsap.set(num, { autoAlpha: 0.5, yPercent: 0 });
          if (band) gsap.set(band, { scale: 1, xPercent: 0 });
        });
        gsap.set(".exp-progress span", { scaleX: 1 });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: ".experience",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6
        }
      });

      for (let i = 0; i < count - 1; i += 1) {
        const cur = fronts[i];
        const nxt = fronts[i + 1];
        const curNum = numOf(i);
        const nxtNum = numOf(i + 1);
        const nxtBand = bandOf(i + 1);

        // Outgoing chapter rises and clips away.
        tl.to(cur.querySelectorAll(".rise, .rise-line"), { yPercent: -85, autoAlpha: 0, duration: 0.55 }, i);
        tl.to([cur, backs[i]], { autoAlpha: 0, duration: 0.45 }, i + 0.4);
        if (curNum) tl.to(curNum, { yPercent: -55, autoAlpha: 0, duration: 0.6 }, i);

        // Incoming chapter enters from below with clipped reveal.
        tl.to([nxt, backs[i + 1]], { autoAlpha: 1, duration: 0.4 }, i + 0.28);
        tl.to(nxt.querySelectorAll(".rise"), { yPercent: 0, autoAlpha: 1, duration: 0.6 }, i + 0.45);
        tl.to(nxt.querySelectorAll(".rise-line"), { yPercent: 0, duration: 0.65 }, i + 0.45);
        if (nxtNum) tl.to(nxtNum, { yPercent: 0, autoAlpha: 1, duration: 0.65 }, i + 0.4);
        if (nxtBand) tl.to(nxtBand, { scale: 1, xPercent: 0, duration: 1 }, i);

        // Model travels to the next beat.
        tl.to(radioMotion, { ...modelTargets[i + 1], duration: 1 }, i);
        tl.to(".exp-progress span", { scaleX: (i + 1) / (count - 1), duration: 1 }, i);
      }

      // Antenna teaser / lower content reveals.
      gsap.utils.toArray(".content-band, .split-band, .memories-band, .contacts-band").forEach((band) => {
        gsap.from(band.querySelectorAll(".section-label, h2, h3, p, .route-step, .guide-card, .glossary-grid article, .form-list a, .rules-panel li, .officials-strip article"), {
          autoAlpha: 0,
          y: 34,
          stagger: 0.04,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: band, start: "top 78%", once: true }
        });
      });
    });

    return () => context.revert();
  }, [enabled]);
}

function useInnerReveal(enabled) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion) return undefined;
    const context = gsap.context(() => {
      const selector = [
        ".guide-hero",
        ".antenna-hero",
        ".who-grid > a",
        ".guide-section",
        ".antenna-safety",
        ".antenna-guide-index",
        ".antenna-card-grid a",
        ".antenna-tutorial-body",
        ".antenna-basics",
        ".antenna-sources",
        ".store-header",
        ".store-product",
        ".product-gallery",
        ".related-products a"
      ].join(", ");
      gsap.utils.toArray(selector).forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 32,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true }
        });
      });
      ScrollTrigger.refresh();
    });
    return () => context.revert();
  }, [enabled]);
}

export default function App() {
  const isGuide = window.location.pathname === "/guide";
  const isAntenna = window.location.pathname === "/antennas";
  const isStore = window.location.pathname === "/store";
  const productMatch = window.location.pathname.match(/^\/store\/([^/]+)$/);
  const isProduct = Boolean(productMatch);
  const isLanding = !(isGuide || isAntenna || isStore || isProduct);

  useLandingChoreography(isLanding);
  useInnerReveal(!isLanding);

  if (isGuide) {
    return (
      <>
        <Header guide />
        <GuidePage />
      </>
    );
  }

  if (isAntenna) {
    return (
      <>
        <Header antenna />
        <AntennaPage />
      </>
    );
  }

  if (isStore) {
    return (
      <>
        <Header store />
        <StorePage />
      </>
    );
  }

  if (isProduct) {
    return (
      <>
        <Header store />
        <ProductPage productId={decodeURIComponent(productMatch[1])} />
      </>
    );
  }

  return (
    <div id="top">
      <Header />
      <main className="landing">
        <ExperienceStage />
        <div className="flow">
          <Path />
          <GuideSearch />
          <MemoryCarousel />
          <Contacts />
          <FormsAndRules />
          <Glossary />
        </div>
      </main>
      <Footer />
    </div>
  );
}
