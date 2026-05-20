import React, { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink, FileText, Search } from "lucide-react";
import { assets, officials, regionalContacts } from "../data/content.js";
import {
  guideDownloads,
  guideNav,
  legalTable,
  licenseStepsDetailed,
  sourceSnapshots,
  syllabusCards,
  termCards,
  whoCards
} from "../data/guideContent.js";

function DownloadCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <details className="guide-resource" open={open} onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary>
        <span>
          <strong>{item.title}</strong>
          <small>{item.note}</small>
        </span>
        <span className="file-type">{item.type}</span>
      </summary>
      <div className="guide-resource-body">
        <div className="guide-resource-actions">
          <a href={item.href} target="_blank" rel="noreferrer">
            <ExternalLink size={16} />
            Open
          </a>
          <a href={item.href} download>
            <Download size={16} />
            Download
          </a>
        </div>
        {item.embed && open ? <object data={item.href} type="application/pdf" aria-label={item.title}></object> : null}
      </div>
    </details>
  );
}

export default function GuidePage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    if (!normalizedQuery) return guideDownloads;
    return guideDownloads
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => `${group.group} ${item.title} ${item.note} ${item.type}`.toLowerCase().includes(normalizedQuery))
      }))
      .filter((group) => group.items.length > 0);
  }, [normalizedQuery]);

  return (
    <main className="guide-page">
      <aside className="guide-sidebar">
        <a className="guide-back" href="/">
          <ArrowLeft size={16} />
          Home
        </a>
        <img src={assets.logo} alt="PARS logo" />
        <strong>PAKHAMS Guide</strong>
        <span>Who we are, what we do, and how the license path works.</span>
        <nav aria-label="Guide page sections">
          {guideNav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <div className="guide-main">
        <section id="overview" className="guide-hero">
          <p className="section-label">PARS / PAKHAMS</p>
          <h1>Who we are, what we do, and how to become licensed.</h1>
          <p>
            Your complete guide from PARS — who we are, how to start as an SWL, the full PTA licence path, the legal
            limits, our official forms, and how to reach us.
          </p>
          <div className="guide-hero-actions">
            <a href="#forms">
              <FileText size={18} />
              Open forms
            </a>
            <a href="#path">
              Follow the license path
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="who-grid" aria-label="Who we are and what we do">
          {whoCards.map((card) => (
            <a key={card.title} href={card.href}>
              <strong>{card.title}</strong>
              <span>{card.text}</span>
            </a>
          ))}
        </section>

        <section id="terms" className="guide-section">
          <div className="guide-section-head">
            <p className="section-label">Key Terms</p>
            <h2>SWL, HAM, PTA, and QSL in plain language.</h2>
          </div>
          <div className="term-card-grid">
            {termCards.map((term) => (
              <article key={term.title}>
                <span>{term.title}</span>
                <h3>{term.subtitle}</h3>
                <p>{term.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="path" className="guide-section">
          <div className="guide-section-head">
            <p className="section-label">License Path</p>
            <h2>From listener to licensed amateur operator.</h2>
          </div>
          <div className="detailed-path">
            {licenseStepsDetailed.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <small>{step.meta}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="legal" className="guide-section">
          <div className="guide-section-head">
            <p className="section-label">Legal Rules</p>
            <h2>What the station may and may not do.</h2>
          </div>
          <div className="legal-table" role="table" aria-label="Legal operating rules">
            {legalTable.map(([area, rule]) => (
              <div role="row" key={area}>
                <strong role="cell">{area}</strong>
                <span role="cell">{rule}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="syllabus" className="guide-section">
          <div className="guide-section-head">
            <p className="section-label">Test Syllabus</p>
            <h2>The PTA written test has technical and operational sides.</h2>
          </div>
          <div className="syllabus-grid">
            {syllabusCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="forms" className="guide-section">
          <div className="guide-section-head">
            <p className="section-label">Forms and Downloads</p>
            <h2>Open PDFs inline, download files, or search the resource archive.</h2>
          </div>
          <label className="guide-search">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter forms, PTA, SOP, syllabus, contacts, ZIPs" />
          </label>
          <div className="download-groups">
            {filteredGroups.map((group) => (
              <section key={group.group}>
                <h3>{group.group}</h3>
                <div className="guide-resource-list">
                  {group.items.map((item) => (
                    <DownloadCard key={`${group.group}-${item.title}`} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section id="resources" className="guide-section">
          <div className="guide-section-head">
            <p className="section-label">Official Links</p>
            <h2>The official PARS and PTA pages behind this guide.</h2>
          </div>
          <div className="source-grid">
            {sourceSnapshots.map((source) => (
              <article key={source.title}>
                <strong>{source.title}</strong>
                <a href={source.href} target="_blank" rel="noreferrer">
                  Open source
                  <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>
          <div className="live-links">
            <a href="https://pakhams.com/" target="_blank" rel="noreferrer">PAKHAMS homepage</a>
            <a href="https://pakhams.com/become-member/" target="_blank" rel="noreferrer">Become Member</a>
            <a href="https://pakhams.com/contact/" target="_blank" rel="noreferrer">Contact</a>
            <a href="https://pakhams.com/members/" target="_blank" rel="noreferrer">Members</a>
            <a href="https://www.pta.gov.pk/category/rbs-applications-99526444-2023-05-30" target="_blank" rel="noreferrer">PTA applications</a>
          </div>
        </section>

        <section id="contacts" className="guide-section">
          <div className="guide-section-head">
            <p className="section-label">Contacts</p>
            <h2>Reach PARS and our regional coordinators across Pakistan.</h2>
          </div>
          <p className="contact-note">
            General PARS email: <a href="mailto:info@pakhams.com">info@pakhams.com</a>. Mailing address: PARS AP2ARS,
            P.O. Box 1450, Islamabad, 44000, Pakistan.
          </p>
          <div className="guide-contact-grid">
            {[...officials, ...regionalContacts].map((person) => (
              <article key={`${person.callsign}-${person.role || person.region}`}>
                <span>{person.callsign}</span>
                <strong>{person.name}</strong>
                <small>{person.role || `${person.region} coordinator`}</small>
                {person.phone ? <a href={`tel:${person.phone.replaceAll(" ", "")}`}>{person.phone}</a> : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
