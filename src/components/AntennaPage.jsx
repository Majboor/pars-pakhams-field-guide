import React, { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Download, Play, Search, ShieldCheck } from "lucide-react";
import { assets } from "../data/content.js";
import { antennaGuidesDetailed, antennaNav, antennaSources, basics } from "../data/antennaContent.js";

function Diagram({ type }) {
  if (type === "resistor") {
    return (
      <svg viewBox="0 0 260 180" role="img" aria-label="A battery pushing current through a resistor">
        <rect x="24" y="64" width="46" height="52" fill="currentColor" opacity="0.72" />
        <text x="47" y="95" textAnchor="middle" fill="#fff" fontSize="16">V</text>
        <path d="M70 90h34l10-16 18 32 18-32 18 32 18-32 10 16h34" fill="none" stroke="#b72e35" strokeWidth="5" />
        <path d="M230 90v48H47V116" fill="none" stroke="#11180f" strokeWidth="4" />
        <path d="M88 44c24-16 56-18 86-2" fill="none" stroke="#087344" strokeWidth="4" />
        <path d="M174 42l-15 2 8 12" fill="none" stroke="#087344" strokeWidth="4" />
      </svg>
    );
  }
  if (type === "impedance") {
    return (
      <svg viewBox="0 0 260 180" role="img" aria-label="Radio, coax, and antenna matching at 50 ohms">
        <rect x="18" y="54" width="58" height="70" rx="6" fill="currentColor" opacity="0.72" />
        <text x="47" y="94" textAnchor="middle" fill="#fff" fontSize="13">radio</text>
        <path d="M76 89h110" stroke="#11180f" strokeWidth="7" />
        <path d="M76 89h110" stroke="#fff" strokeWidth="2" />
        <path d="M188 90h52M214 90V40M214 90v50" stroke="#b72e35" strokeWidth="5" />
      </svg>
    );
  }
  if (type === "transformer") {
    return (
      <svg viewBox="0 0 260 180" role="img" aria-label="Transformer matching high impedance to low impedance">
        <path d="M30 92h54M176 92h54" stroke="#11180f" strokeWidth="5" />
        <path d="M88 62c22 6 22 54 0 60M104 62c22 6 22 54 0 60" fill="none" stroke="#b72e35" strokeWidth="5" />
        <path d="M154 54c28 10 28 66 0 76M170 54c28 10 28 66 0 76" fill="none" stroke="#087344" strokeWidth="5" />
        <path d="M130 44v96" stroke="#d8d4c8" strokeWidth="4" />
      </svg>
    );
  }
  if (type === "swr") {
    return (
      <svg viewBox="0 0 260 180" role="img" aria-label="Forward and reflected wave creating SWR">
        <path d="M24 88 C54 42, 84 134, 114 88 S174 42, 204 88 S234 134, 252 88" fill="none" stroke="#087344" strokeWidth="5" />
        <path d="M24 116 C54 150, 84 82, 114 116 S174 150, 204 116 S234 82, 252 116" fill="none" stroke="#b72e35" strokeWidth="4" />
        <path d="M34 34h192" stroke="#11180f" strokeWidth="4" />
        <path d="M212 24l16 10-16 10M48 44L32 34l16-10" fill="none" stroke="#11180f" strokeWidth="4" />
      </svg>
    );
  }
  if (type === "wavelength") {
    return (
      <svg viewBox="0 0 260 180" role="img" aria-label="One wavelength and half-wave wire">
        <path d="M22 88 C54 28, 88 148, 122 88 S190 28, 238 88" fill="none" stroke="#087344" strokeWidth="5" />
        <path d="M22 124h216M22 116v16M238 116v16" stroke="#11180f" strokeWidth="3" />
        <path d="M72 48h116" stroke="#b72e35" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "omni") {
    return (
      <svg viewBox="0 0 260 180" role="img" aria-label="Omnidirectional vertical antenna coverage">
        <line x1="130" y1="38" x2="130" y2="128" stroke="#b72e35" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="130" cy="118" rx="86" ry="34" fill="none" stroke="#087344" strokeWidth="5" />
        <ellipse cx="130" cy="118" rx="52" ry="20" fill="none" stroke="#087344" strokeWidth="3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 260 180" role="img" aria-label="Center-fed dipole">
      <path d="M34 88h82M144 88h82" stroke="#b72e35" strokeWidth="6" strokeLinecap="round" />
      <circle cx="130" cy="88" r="12" fill="#087344" />
      <path d="M130 100v48" stroke="#11180f" strokeWidth="7" />
      <path d="M130 100v48" stroke="#fff" strokeWidth="2" />
      <path d="M70 52c34-22 86-22 120 0M70 124c34 22 86 22 120 0" fill="none" stroke="#087344" strokeWidth="3" />
    </svg>
  );
}

function GuideTutorial({ guide }) {
  return (
    <section id={guide.id} className="antenna-tutorial">
      <div className="antenna-video">
        <video src={guide.videoFile} poster={guide.steps[0]?.image} controls preload="metadata" aria-label={guide.videoTitle}></video>
        <div className="antenna-video-actions">
          <a href={`https://www.youtube.com/watch?v=${guide.videoId}`} target="_blank" rel="noreferrer">
            <Play size={16} />
            Open video
          </a>
          <a href={guide.videoFile} download>
            <Download size={16} />
            Download clip
          </a>
        </div>
      </div>
      <article className="antenna-tutorial-body">
        <p className="section-label">{guide.shortTitle}</p>
        <h2>{guide.title}</h2>
        <p>{guide.summary}</p>
        <div className="antenna-term-row">
          {guide.terms.map((term) => (
            <a key={term} href="#basics">{term}</a>
          ))}
        </div>
        <div className="antenna-materials">
          <h3>Materials</h3>
          <ul>
            {guide.materials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="antenna-steps">
          <h3>Build steps from the video</h3>
          {guide.steps.map((step, index) => (
            <figure key={`${guide.id}-${step.title}`}>
              <a href={step.image} target="_blank" rel="noreferrer" aria-label={`Open ${step.title} frame`}>
                <img src={step.image} alt="" />
              </a>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <small>{step.text}</small>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="antenna-formula">
          <strong>Reference note</strong>
          <p>{guide.formula}</p>
        </div>
      </article>
    </section>
  );
}

export default function AntennaPage() {
  const [query, setQuery] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("antenna");
  const activeTerm = basics.find((term) => term.key === selectedTerm) || basics[0];
  const filteredGuides = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return antennaGuidesDetailed;
    return antennaGuidesDetailed.filter((guide) => `${guide.title} ${guide.summary} ${guide.keywords} ${guide.materials.join(" ")}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <main className="antenna-page">
      <aside className="antenna-sidebar">
        <a className="guide-back" href="/">
          <ArrowLeft size={16} />
          Home
        </a>
        <img src={assets.logo} alt="PARS logo" />
        <strong>Antenna Wiki</strong>
        <span>Buildable guides, RF basics, build videos, and references.</span>
        <nav aria-label="Antenna page sections">
          {antennaNav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <div className="antenna-main">
        <section id="overview" className="antenna-hero">
          <p className="section-label">Homebrew antenna knowledge base</p>
          <h1>Build, tune, and understand first antennas.</h1>
          <p>
            The PARS antenna workshop. Start with a guide, watch the build video, follow the steps frame by frame, then open the basics library whenever a term needs explaining.
          </p>
          <div className="antenna-hero-actions">
            <a href="#guides">
              Browse guides
              <ArrowUpRight size={18} />
            </a>
            <a href="#basics">Open basics library</a>
          </div>
        </section>

        <section className="antenna-safety" aria-label="Antenna safety note">
          <ShieldCheck size={24} />
          <div>
            <strong>Before transmitting</strong>
            <span>Use only legal amateur bands and power levels for your license. Keep antennas away from power lines, people, and combustible supports. Check SWR at low power before increasing output.</span>
          </div>
        </section>

        <section id="guides" className="antenna-guide-index">
          <div className="guide-section-head">
            <p className="section-label">Guides</p>
            <h2>Pick an antenna and open the complete build.</h2>
          </div>
          <label className="guide-search antenna-search">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dipole, EFHW, J-pole, balun, SWR" />
          </label>
          <div className="antenna-card-grid">
            {filteredGuides.map((guide) => (
              <a key={guide.id} href={`#${guide.id}`}>
                <img src={`https://img.youtube.com/vi/${guide.videoId}/hqdefault.jpg`} alt="" />
                <strong>{guide.title}</strong>
                <span>{guide.summary}</span>
              </a>
            ))}
          </div>
        </section>

        {antennaGuidesDetailed.map((guide) => (
          <GuideTutorial key={guide.id} guide={guide} />
        ))}

        <section id="basics" className="antenna-basics">
          <div className="guide-section-head">
            <p className="section-label">Radio basics</p>
            <h2>Click a term to understand how the builds work.</h2>
          </div>
          <div className="antenna-basics-layout">
            <div className="antenna-term-list" aria-label="Antenna glossary terms">
              {basics.map((term) => (
                <button key={term.key} className={term.key === selectedTerm ? "active" : ""} type="button" onClick={() => setSelectedTerm(term.key)}>
                  {term.title}
                </button>
              ))}
            </div>
            <article className="antenna-term-panel">
              <div>
                <h3>{activeTerm.title}</h3>
                <p>{activeTerm.text}</p>
                <ul>
                  {activeTerm.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="antenna-used">
                  {activeTerm.used.map((item) => (
                    <a key={item} href="#guides">{item}</a>
                  ))}
                </div>
              </div>
              <div className="antenna-diagram">
                <Diagram type={activeTerm.diagram} />
              </div>
            </article>
          </div>
        </section>

        <section id="sources" className="antenna-sources">
          <div className="guide-section-head">
            <p className="section-label">Sources</p>
            <h2>Videos, plans, and written references used by the antenna wiki.</h2>
          </div>
          <div className="source-grid">
            {antennaSources.map(([title, href]) => (
              <article key={href}>
                <strong>{title}</strong>
                <a href={href} target="_blank" rel="noreferrer">
                  Open source
                  <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
