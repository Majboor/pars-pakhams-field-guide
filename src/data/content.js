export const assets = {
  logo: "/assets/pakhams/images/pars-logo-transparent.png",
  logoSquare: "/assets/pakhams/images/pars-logo-square.png",
  hero: "/assets/pakhams/images/ham-radio-hero.jpg",
  pageHero: "/assets/pakhams/images/pakhams-page-hero.webp",
  licenseTable: "/assets/pakhams/images/pta-license-table.png",
  application: "/assets/pakhams/images/pta-application-screenshot.png",
  introVideo: "/assets/pakhams/video-thumbnails/pars-introduction-sJklaoWq5hA.jpg",
  repeaterVideo: "/assets/pakhams/video-thumbnails/ears-vhf-repeater-ayZgVtBTtAw.jpg",
  satelliteVideo: "/assets/pakhams/video-thumbnails/qo100-satellite-0CDn6LmDe2w.jpg",
  memoriesVideo: "/assets/pakhams/video-thumbnails/pars-memories-TjtFH6Wg54w.jpg",
  agmVideo: "/assets/pakhams/video-thumbnails/pakhams-agm-2019-C46xs0GO158.jpg",
  radioDayVideo: "/assets/pakhams/video-thumbnails/smiu-world-amateur-radio-day-U3LX0BulIKo.jpg"
};

export const heroStats = [
  { value: "PARS", label: "Pakistan Amateur Radio Society" },
  { value: "165", label: "members and callsigns on record" },
  { value: "SWL", label: "required first step before PTA licensing" }
];

export const storySections = [
  {
    number: "01",
    label: "Society",
    title: "PARS is the national amateur radio society behind PAKHAMS.",
    body:
      "PARS supports Pakistani radio amateurs through membership, QSL activity, training, emergency communication awareness, awards, contests, and representation with national and international radio bodies.",
    points: ["National IARU member society", "QSL bureau and radio community", "Official site: pakhams.com"],
    image: assets.introVideo
  },
  {
    number: "02",
    label: "Membership",
    title: "Start as a Short Wave Listener before applying for a license.",
    body:
      "At PARS, every new applicant begins as an SWL member. The 2026 form asks for your identity details, CNIC or B-form copy, photograph, qualifications, affidavit, reference or character certificate, and fee receipt.",
    points: ["SWL minimum age listed as 12", "Student fee: PKR 3,000 for three years", "Other SWL fee: PKR 4,500 for three years"],
    image: assets.logoSquare
  },
  {
    number: "03",
    label: "PTA",
    title: "PTA licensing turns a listener into a legal operator.",
    body:
      "The PTA path includes application documents, antenna layout, equipment list, location sketch, police character certificate, test and interview, security clearance, fee deposit, and license card processing.",
    points: ["Application in complete sets", "Written test plus interview", "Maximum three attempts before re-applying"],
    image: assets.licenseTable
  },
  {
    number: "04",
    label: "Rules",
    title: "Operate within the license terms, station log, and band limits.",
    body:
      "The official terms restrict amateur stations to self-training and technical communication. The station logbook must be maintained, and emergency communication support can be requested by PTA or the Federal Government.",
    points: ["No transmitting as an SWL", "Keep antennas away from hazards", "Check SWR at low power before operation"],
    image: assets.repeaterVideo
  }
];

export const eventMemories = [
  {
    title: "PARS Memories",
    date: "Archive reel",
    image: assets.memoriesVideo,
    text: "A look back at our community: operators, gatherings, radios, and the years we have spent around the dial."
  },
  {
    title: "PAKHAMS AGM 2019",
    date: "2019",
    image: assets.agmVideo,
    text: "Annual meeting energy: familiar faces, society work, callsigns, and the quiet admin that keeps amateur radio alive."
  },
  {
    title: "World Amateur Radio Day",
    date: "SMIU event",
    image: assets.radioDayVideo,
    text: "A public-facing radio day moment: students, demonstrations, and a bridge between learning, service, and first curiosity."
  },
  {
    title: "QO-100 Satellite",
    date: "Satellite work",
    image: assets.satelliteVideo,
    text: "The satellite side of the hobby: patient setup, signal paths, and Pakistan’s amateur radio community reaching beyond local repeaters."
  },
  {
    title: "EARS VHF Repeater",
    date: "Repeater network",
    image: assets.repeaterVideo,
    text: "Repeater culture is where many operators first hear the room: local coverage, practical testing, and voices arriving through the noise."
  },
  {
    title: "PARS Introduction",
    date: "Community intro",
    image: assets.introVideo,
    text: "A simple starting point for newcomers: what the society is, why callsigns matter, and how the hobby becomes a shared practice."
  }
];

export const licensePath = [
  {
    title: "Join PARS as SWL",
    text:
      "Submit the SWL membership form with required identity, photo, qualification, affidavit, reference, and fee documents."
  },
  {
    title: "Prepare PTA proposal",
    text:
      "Attach application form, letter of intent, CNIC, photos, equipment list, antenna layout, station location sketch, police clearance, and PARS membership proof."
  },
  {
    title: "Test, interview, clearance",
    text:
      "PTA checks the application, schedules written test and interview, forwards the case for security clearance, and issues fee demand after approval steps."
  },
  {
    title: "Receive license card",
    text:
      "After payment, approval, and clearance, PTA prepares the amateur license card. Only then may the station transmit legally."
  }
];

export const forms = [
  {
    title: "SWL Membership Form 2026",
    href: "/assets/pakhams/SWL-Membership-Form-2026.pdf",
    note: "Our current SWL membership form."
  },
  {
    title: "SWL Form V1 2024",
    href: "/assets/pakhams/SWL-Form-V1-2024.pdf",
    note: "Our earlier SWL membership form."
  },
  {
    title: "PTA amateur applications",
    href: "https://www.pta.gov.pk/category/rbs-applications-99526444-2023-05-30",
    note: "The official PTA page for citizen, club, school, SOP, terms, and syllabus forms."
  }
];

export const legalRules = [
  "SWL membership does not authorize transmitting on any frequency without the required PTA license.",
  "Amateur stations must transmit and receive only on specified amateur bands.",
  "The licensee is responsible for equipment, antenna, instruments, and station logbook.",
  "Politics, religion, misleading signals, advertisements, music, business traffic, and offensive content are prohibited.",
  "Mobile or portable operation generally needs special PTA authorization.",
  "In emergencies and natural calamities, licensee equipment may be called upon for communication support."
];

export const officials = [
  { name: "Nasir Khan", callsign: "AP2NK", role: "President, PARS" },
  { name: "Asad Ullah Marwat", callsign: "AP2AUM", role: "Vice President, PARS" },
  { name: "Muhammad Ahmad Tariq Fani", callsign: "AP2MAT", role: "Secretary, PARS" },
  { name: "Syed Tufail Ahmed", callsign: "AP2STA", role: "Deputy Secretary, PARS" },
  { name: "Muhammad Mubeen Ajmal", callsign: "AP2AJM", role: "Liaison Officer" }
];

export const regionalContacts = [
  { region: "Lahore", name: "Sohaib Ahmed", callsign: "AP2SBA", phone: "+92321 5704046" },
  { region: "Peshawar", name: "Nadeem Akhtar Sadiqi", callsign: "AP2NAS", phone: "+92 (0)300 8591744" },
  { region: "Quetta", name: "Dr. M. Arif Mengal", callsign: "AP2MAA", phone: "+92 (0)3337835679" },
  { region: "Karachi", name: "Muhammad Salman", callsign: "AP2MS", phone: "+92 (0)3452432509" },
  { region: "Faisalabad", name: "Ghulam Hussain", callsign: "AP2GH", phone: "+92 (0)300 8666169" }
];

export const antennaGuides = [
  {
    title: "Simple HF Dipole",
    tags: "dipole beginner hf speaker wire coax swr",
    image: "https://img.youtube.com/vi/yRnlJxMWzF4/hqdefault.jpg",
    body: "Two equal wire legs, a center feed, and simple trimming make this the clearest first antenna build."
  },
  {
    title: "Off-Center-Fed Dipole",
    tags: "ocf off center fed dipole multiband balun tuner",
    image: "https://img.youtube.com/vi/A0Ymcs2D7ks/hqdefault.jpg",
    body: "A shifted feed point and matching transformer can make one long wire useful across several HF bands."
  },
  {
    title: "End-Fed Half-Wave",
    tags: "efhw end fed half wave unun 49:1 portable qrp",
    image: "https://img.youtube.com/vi/SBrc1DpMk_w/hqdefault.jpg",
    body: "A half-wave wire fed from one end through a 49:1 unun, useful for portable and compact deployments."
  },
  {
    title: "2m J-Pole",
    tags: "j pole 2 meter vhf copper pipe vertical repeater",
    image: "https://img.youtube.com/vi/cLqCtzqeQzI/hqdefault.jpg",
    body: "A vertical VHF antenna with a half-wave radiator and quarter-wave matching stub."
  }
];

export const glossary = [
  {
    term: "SWR",
    title: "Standing Wave Ratio",
    text: "A measure of how well the antenna system accepts power from the transmitter. Lower is generally better."
  },
  {
    term: "Balun",
    title: "Balanced to Unbalanced",
    text: "A transformer or choke used when a balanced antenna is connected to unbalanced coax feed line."
  },
  {
    term: "Unun",
    title: "Unbalanced to Unbalanced",
    text: "A transformer used between two unbalanced systems, commonly used in EFHW antenna matching."
  },
  {
    term: "QSL",
    title: "Confirmation Card",
    text: "A written or electronic acknowledgement that a radio contact or reception report took place."
  }
];
