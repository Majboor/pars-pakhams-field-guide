export const guideNav = [
  { id: "overview", label: "Overview" },
  { id: "terms", label: "Key Terms" },
  { id: "path", label: "License Path" },
  { id: "legal", label: "Legal Rules" },
  { id: "syllabus", label: "Test Syllabus" },
  { id: "forms", label: "Forms" },
  { id: "resources", label: "Resources" },
  { id: "contacts", label: "Contacts" }
];

export const whoCards = [
  {
    title: "What PARS / PAKHAMS is",
    text:
      "Pakistan Amateur Radio Society is Pakistan's national amateur radio society, known publicly through the PAKHAMS site and community.",
    href: "#overview"
  },
  {
    title: "What the society does",
    text:
      "PARS supports QSL activity, awards, contests, radio training, emergency communication awareness, licensing guidance, and representation for Pakistani amateurs.",
    href: "#overview"
  },
  {
    title: "How a learner starts",
    text:
      "A new applicant begins as a Short Wave Listener, learns radio practice, gathers proof, and then applies to PTA for an amateur license.",
    href: "#path"
  },
  {
    title: "What this page provides",
    text:
      "Every PARS form, PTA document, legal note, syllabus topic, contact, and reference — all in one place.",
    href: "#resources"
  }
];

export const termCards = [
  {
    title: "SWL",
    subtitle: "Short Wave Listener",
    text:
      "An SWL listens, logs reception, learns radio procedure, studies propagation, and prepares for the legal amateur license path. SWL membership does not allow transmitting."
  },
  {
    title: "HAM",
    subtitle: "Licensed Amateur Operator",
    text:
      "A HAM is a licensed amateur operator who may transmit only inside the permissions, bands, power limits, station rules, and operating conditions of the PTA license."
  },
  {
    title: "PTA",
    subtitle: "Pakistan Telecommunication Authority",
    text:
      "PTA is the licensing authority. The application is submitted to Director (RBS), PTA Headquarters, and passes through testing, interview, and clearance."
  },
  {
    title: "QSL",
    subtitle: "Contact Confirmation",
    text:
      "A QSL acknowledgement confirms a radio contact or reception report. PTA counts QSL cards as part of your operating experience."
  }
];

export const licenseStepsDetailed = [
  {
    title: "Join PARS as an SWL member",
    text:
      "Fill in our SWL membership form. The 2026 form asks for block-letter identity details, CNIC or B-form copy, attested photograph, qualification copies, affidavit, reference or character certificate, and fee receipt.",
    meta: "2026 SWL form: students PKR 3,000 for three years; other SWL cases PKR 4,500 for three years."
  },
  {
    title: "Learn, listen, and collect proof",
    text:
      "Use the SWL period to learn radio language, logs, propagation, Q codes, phonetics, and station practice. PTA asks for SWL proof and QSL acknowledgement cards.",
    meta: "The PTA citizen form asks for one year of SWL proof for applicants 18+ and two years for younger applicants."
  },
  {
    title: "Prepare the PTA application",
    text:
      "Attach the prescribed application, letter of intent, CNIC, photos, equipment list, antenna layout sketch, station location sketch, supporting certificates, police clearance, and PARS membership proof.",
    meta: "The equipment and antenna layout are part of the legal station proposal."
  },
  {
    title: "Submit complete sets to PTA",
    text:
      "PTA checks deficiencies, forwards complete cases for LEA security clearance, and informs eligible applicants about written test and interview scheduling.",
    meta: "PTA SOP says LEA response is expected within 12 weeks."
  },
  {
    title: "Pass written test and interview",
    text:
      "The written test covers technical knowledge and operational knowledge. Minimum passing marks are 50 percent. A maximum of three attempts is allowed before re-application.",
    meta: "Some electrical/electronics/communications backgrounds may receive technical-part exemption."
  },
  {
    title: "Pay fee and receive permission/license",
    text:
      "After successful testing and fee demand, PTA may issue provisional permission. Once clearance arrives, PTA prepares the amateur license card.",
    meta: "PTA SOP lists PKR 100 examination fee and PKR 1,000 initial license fee for five years."
  }
];

export const legalTable = [
  ["Purpose", "Self-training, technical study, and non-commercial amateur communication."],
  ["Commercial use", "No pecuniary interest, advertisements, business matters, or commercial third-party traffic."],
  ["Topics", "Keep transmissions mainly to wireless equipment, propagation, signal reports, family matters, and weather."],
  ["Station operation", "Only the licensed person may operate the station and only inside authorized bands and powers."],
  ["Logbook", "A station logbook is required and must be available for inspection."],
  ["Emergency support", "In emergencies, licensee equipment may be called upon by PTA or Federal Government."],
  ["Mobile/portable", "Generally not allowed without special PTA authorization for a limited period and purpose."]
];

export const syllabusCards = [
  {
    title: "Technical Knowledge",
    items: [
      "Elementary electricity and magnetism",
      "AC/DC, Ohm's law, watts, inductance, capacitance",
      "RF bands, resonance, transformers, receivers, transmitters",
      "Modulation, propagation, ionospheric layers, skip zone, fading",
      "Antenna construction, measuring instruments, elementary space communication"
    ]
  },
  {
    title: "Operational Knowledge",
    items: [
      "PTA, PARS, ITU, IARU and amateur societies",
      "Pakistan Amateur Service Regulations, 2004",
      "Frequency bands, callsigns, interference, distress traffic",
      "Q codes, phonetic alphabet, abbreviations, Morse conventions",
      "Interview with PTA representative"
    ]
  }
];

export const guideDownloads = [
  {
    group: "PARS SWL membership forms",
    items: [
      {
        title: "SWL Membership Form 2026",
        note: "Our current SWL membership form.",
        href: "/hams/forms/pakhams/SWL-Membership-Form-2026.pdf",
        type: "pdf",
        embed: true
      },
      {
        title: "SWL Form V1 2024",
        note: "Our earlier SWL membership form.",
        href: "/hams/forms/pakhams/SWL-Form-V1-2024.pdf",
        type: "pdf",
        embed: true
      }
    ]
  },
  {
    group: "PTA license PDFs",
    items: [
      {
        title: "Citizen Amateur Wireless Station Licence Application",
        note: "Application form AW-01 for Pakistani citizens.",
        href: "/hams/forms/pta/extracted/form_aw01_citizen_pak_141119.pdf",
        type: "pdf",
        embed: true
      },
      {
        title: "SOP for Issuance of Amateur Radio License",
        note: "Procedure, eligibility, examination, fees, renewal, and mobile authorization.",
        href: "/hams/forms/pta/extracted/sop_amateur_radio_lic_141119.pdf",
        type: "pdf",
        embed: true
      },
      {
        title: "Syllabus and Written Test Details",
        note: "Technical and operational exam topics.",
        href: "/hams/forms/pta/extracted/Syllabus08042016.pdf",
        type: "pdf",
        embed: true
      },
      {
        title: "Terms and Conditions",
        note: "Operating limits, prohibited content, logbook format, and station responsibilities.",
        href: "/hams/forms/pta/extracted/tac08042016.pdf",
        type: "pdf",
        embed: true
      },
      {
        title: "Clubs, Schools, Colleges and Universities Application",
        note: "PTA amateur application for institutions.",
        href: "/hams/forms/pta/extracted/form_clubs_schools_gop_071118.pdf",
        type: "pdf",
        embed: true
      },
      {
        title: "Foreigners Application",
        note: "PTA amateur application for foreign applicants.",
        href: "/hams/forms/pta/extracted/foreigners_311208.pdf",
        type: "pdf",
        embed: true
      }
    ]
  },
  {
    group: "References and data",
    items: [
      { title: "Licensing reference", note: "A plain-language summary of PARS membership and PTA licensing.", href: "/hams/pakhams-research.md", type: "md" },
      { title: "Contacts (JSON)", note: "Our officials, regional coordinators, emails, and phone numbers.", href: "/hams/contacts.json", type: "json" },
      { title: "Forms index (JSON)", note: "An index of every form with its official source.", href: "/hams/forms-index.json", type: "json" },
      { title: "Members register (CSV)", note: "The official PARS members register.", href: "/hams/members.csv", type: "csv" },
      { title: "PTA SOP (text)", note: "Searchable text of the PTA SOP.", href: "/hams/text/sop_amateur_radio_lic_141119.txt", type: "txt" },
      { title: "PTA terms (text)", note: "Searchable text of the PTA terms and conditions.", href: "/hams/text/tac08042016.txt", type: "txt" },
      { title: "PTA syllabus (text)", note: "Searchable text of the PTA syllabus.", href: "/hams/text/Syllabus08042016.txt", type: "txt" }
    ]
  },
  {
    group: "PTA application packs (ZIP)",
    items: [
      { title: "Citizen application", note: "Official PTA application pack.", href: "/hams/forms/pta/form_aw01_citizen_pak_141119.zip", type: "zip" },
      { title: "Clubs / schools application", note: "Official PTA application pack.", href: "/hams/forms/pta/form_clubs_schools_gop_071118.zip", type: "zip" },
      { title: "Foreigners application", note: "Official PTA application pack.", href: "/hams/forms/pta/foreigners_311208.zip", type: "zip" },
      { title: "SOP pack", note: "Official PTA SOP pack.", href: "/hams/forms/pta/sop_amateur_radio_lic_141119.zip", type: "zip" },
      { title: "Terms and conditions pack", note: "Official PTA terms pack.", href: "/hams/forms/pta/tac08042016.zip", type: "zip" },
      { title: "Syllabus pack", note: "Official PTA syllabus pack.", href: "/hams/forms/pta/Syllabus08042016.zip", type: "zip" }
    ]
  }
];

export const sourceSnapshots = [
  { title: "PAKHAMS official homepage", href: "https://pakhams.com/" },
  { title: "Become a Member", href: "https://pakhams.com/become-member/" },
  { title: "Contact page", href: "https://pakhams.com/contact/" },
  { title: "Executive Body", href: "https://pakhams.com/executive-body/" },
  { title: "Members directory", href: "https://pakhams.com/members/" },
  { title: "PTA amateur applications", href: "https://www.pta.gov.pk/category/rbs-applications-99526444-2023-05-30" }
];
