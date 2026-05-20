const frame = (name) => `/antenna/assets/frames/${name}.jpg`;

export const antennaNav = [
  { id: "overview", label: "Overview" },
  { id: "guides", label: "Guides" },
  { id: "simple-dipole", label: "Simple Dipole" },
  { id: "ocf-dipole", label: "OCF Dipole" },
  { id: "efhw", label: "EFHW" },
  { id: "j-pole", label: "2m J-Pole" },
  { id: "basics", label: "Basics" },
  { id: "sources", label: "Sources" }
];

export const antennaGuidesDetailed = [
  {
    id: "simple-dipole",
    title: "Simple HF Dipole",
    shortTitle: "HF Dipole",
    summary: "Best first antenna: two equal wire legs, a center feed, and simple tuning.",
    keywords: "dipole beginner hf speaker wire coax swr 20 meter 40 meter resonance",
    videoId: "yRnlJxMWzF4",
    videoTitle: "How to build a dipole antenna for Ham Radio",
    videoFile: "/antenna/assets/video/simple-dipole.mp4",
    terms: ["dipole", "resonance", "SWR", "50 ohms"],
    materials: [
      "Speaker wire or 14-18 AWG insulated wire",
      "SO-239 connector, BNC binding post, or center insulator",
      "50 ohm coax feed line",
      "Rope, end insulators, solder, heat shrink, and weather tape",
      "SWR meter or antenna analyzer"
    ],
    steps: [
      {
        image: frame("simple-dipole-1"),
        title: "Choose the band and wire.",
        text: "Pick a target frequency, then use speaker wire or insulated antenna wire. A dipole needs two equal conductors."
      },
      {
        image: frame("simple-dipole-2"),
        title: "Calculate the two legs.",
        text: "Use 468 / frequency in MHz for total feet, divide by two, and cut each side slightly long."
      },
      {
        image: frame("simple-dipole-3"),
        title: "Measure and separate the conductors.",
        text: "Stretch the wire out straight, mark both leg lengths, and split the two conductors cleanly at the feed end."
      },
      {
        image: frame("simple-dipole-4"),
        title: "Cut long enough to tune.",
        text: "Leave a little extra on each side. Trimming shortens the antenna and raises the resonant frequency."
      },
      {
        image: frame("simple-dipole-6"),
        title: "Attach the feed point and raise it.",
        text: "Connect one leg to the coax center conductor and the other to the shield side, add strain relief, then raise and test SWR at low power."
      }
    ],
    formula:
      "40m near 7.150 MHz: about 65.5 ft total, 32.7 ft per side. 20m near 14.250 MHz: about 32.8 ft total, 16.4 ft per side."
  },
  {
    id: "ocf-dipole",
    title: "Off-Center-Fed Dipole",
    shortTitle: "OCF Dipole",
    summary: "Like a dipole, but the feed point is shifted for useful multiband behavior.",
    keywords: "ocf off center fed dipole multiband balun tuner field day hf",
    videoId: "A0Ymcs2D7ks",
    videoTitle: "Off Center Fed Dipole Antenna - Ham Radio Q&A",
    videoFile: "/antenna/assets/video/ocf-dipole.mp4",
    terms: ["OCF dipole", "4:1 current balun", "antenna tuner"],
    materials: [
      "Two wire legs cut to a one-third and two-third split",
      "4:1 current balun rated for your power",
      "Coax, support rope, end insulators, and a weatherproof feed-point box",
      "Antenna tuner for bands that are close but not naturally matched"
    ],
    steps: [
      {
        image: frame("ocf-dipole-2"),
        title: "Plan the off-center split.",
        text: "Choose the base band, calculate total dipole length, then mark the feed point near the one-third position."
      },
      {
        image: frame("ocf-dipole-3"),
        title: "Prepare the balun and wire legs.",
        text: "Cut one short leg and one long leg. Use a 4:1 current balun at the shifted feed point."
      },
      {
        image: frame("ocf-dipole-4"),
        title: "Fasten the wires mechanically.",
        text: "Attach both legs to the balun output terminals and add strain relief so the terminals do not carry the antenna weight."
      },
      {
        image: frame("ocf-dipole-5"),
        title: "Connect coax and sweep the antenna.",
        text: "Check SWR across the bands you want to use. Note which bands are naturally close to a match."
      },
      {
        image: frame("ocf-dipole-6"),
        title: "Use the tuner where needed.",
        text: "The OCF is a multiband compromise. Use an antenna tuner for bands that are close but outside the radio's direct match range."
      }
    ],
    formula:
      "One 80m OCF can often cover 80, 40, 20, 10, and 6 meters with easier matching, with a tuner helping on other bands."
  },
  {
    id: "efhw",
    title: "End-Fed Half-Wave",
    shortTitle: "EFHW",
    summary: "A compact wire antenna fed from one end through a 49:1 transformer.",
    keywords: "efhw end fed half wave unun 49:1 toroid portable qrp hf",
    videoId: "SBrc1DpMk_w",
    videoTitle: "Build Your Own End-Fed Half-Wave Antenna",
    videoFile: "/antenna/assets/video/efhw.mp4",
    terms: ["EFHW", "49:1 unun", "counterpoise"],
    materials: [
      "Half-wave antenna wire for the lowest target band",
      "FT140-43 or similar ferrite toroid, enamel wire, enclosure, and connectors",
      "High-voltage capacitor for compensation if building a broadband transformer",
      "Short counterpoise or enough coax length to provide a return path",
      "Analyzer for tuning and checking harmonic bands"
    ],
    steps: [
      {
        image: frame("efhw-2"),
        title: "Cut the half-wave wire.",
        text: "Choose the lowest band first and cut the wire a little long. Final trimming happens after the antenna is deployed."
      },
      {
        image: frame("efhw-4"),
        title: "Select the transformer parts.",
        text: "Use a suitable ferrite toroid, enamel wire, enclosure, connector, and antenna terminal for your power level."
      },
      {
        image: frame("efhw-5"),
        title: "Wind the 49:1 unun.",
        text: "A common pattern is 2 primary turns and 14 secondary turns, giving the 7:1 turns ratio needed for 49:1 impedance transformation."
      },
      {
        image: frame("efhw-3"),
        title: "Connect the wire and coax.",
        text: "Attach the antenna wire to the high-impedance side and the coax connector to the 50 ohm side of the unun."
      },
      {
        image: frame("efhw-6"),
        title: "Deploy and trim.",
        text: "Hang the wire as a sloper, inverted-L, or horizontal run. Check SWR and trim shorter only when you need to move resonance higher."
      }
    ],
    formula:
      "40m EFHW: about 66 ft 10 in. 20m EFHW: about 33 ft 5 in. These are starting points; final tuning depends on height and surroundings."
  },
  {
    id: "j-pole",
    title: "2m J-Pole",
    shortTitle: "J-Pole",
    summary: "A VHF vertical with a half-wave radiator and quarter-wave matching stub.",
    keywords: "j pole 2 meter vhf copper pipe vertical repeater omnidirectional",
    videoId: "cLqCtzqeQzI",
    videoTitle: "2 Meter J-Pole Antenna Build",
    videoFile: "/antenna/assets/video/j-pole.mp4",
    terms: ["J-pole", "omnidirectional", "feed point"],
    materials: [
      "Copper pipe or heavy wire for the radiator and matching stub",
      "Shorting bar, feed-point hardware, SO-239 connector, and solder",
      "PVC or nonconductive support, mast clamps, and weatherproofing",
      "VHF SWR meter or analyzer"
    ],
    steps: [
      {
        image: frame("j-pole-1"),
        title: "Lay out the copper parts.",
        text: "Gather the radiator, matching stub, shorting bar, connector hardware, soldering supplies, and support parts."
      },
      {
        image: frame("j-pole-2"),
        title: "Cut the radiator and stub.",
        text: "Cut the long radiator and shorter matching section to the 2m dimensions, then dry-fit before soldering."
      },
      {
        image: frame("j-pole-3"),
        title: "Install the feed point.",
        text: "Attach coax a short distance above the bottom short. Keep this point adjustable until SWR is correct."
      },
      {
        image: frame("j-pole-4"),
        title: "Solder and inspect the joints.",
        text: "Make clean, strong copper joints and confirm the shorting section is electrically solid."
      },
      {
        image: frame("j-pole-5"),
        title: "Check spacing before mounting.",
        text: "Verify the radiator, matching stub, feed point, and connector before it goes on the mast."
      },
      {
        image: frame("j-pole-6"),
        title: "Mount high and clear.",
        text: "Keep it away from metal objects, route coax away from the radiating section, then weatherproof the connector."
      }
    ],
    formula: "KB9VBR's 2m copper J-pole reference lists about 69 in overall, 58 in radiator, and 19 in matching stub."
  }
];

export const basics = [
  {
    key: "antenna",
    title: "Antenna",
    diagram: "dipole",
    text:
      "An antenna turns electrical energy into radio waves and turns received radio waves back into tiny electrical signals. If the radio is the voice, the antenna is the mouth and ears.",
    bullets: ["Transmit: RF current moves in the conductor and launches a wave.", "Receive: a passing wave creates a tiny voltage.", "Shape matters: length, height, feed point, nearby metal, and ground all change behavior."],
    used: ["Every guide"]
  },
  {
    key: "ohm",
    title: "Ohm",
    diagram: "resistor",
    text:
      "An ohm is a unit for opposition to electrical current. In radio systems you hear it while talking about impedance, coax, antennas, and the 50 ohm load a transceiver expects.",
    bullets: ["More ohms means the same voltage pushes less current.", "Most modern ham transmitters feed a 50 ohm system.", "An antenna need not be exactly 50 ohms everywhere, but the radio wants a reasonable match."],
    used: ["Simple dipole", "J-pole", "EFHW transformer"]
  },
  {
    key: "impedance",
    title: "Impedance",
    diagram: "impedance",
    text:
      "Impedance is resistance-like opposition to alternating current. Radio signals are AC, so antennas and feed lines are described in ohms of impedance.",
    bullets: ["50 ohms is common for ham coax and transceivers.", "Mismatch reflects some power back down the feed line.", "A balun, unun, or tuner can transform one impedance range into another."],
    used: ["OCF dipole", "EFHW", "J-pole feed point"]
  },
  {
    key: "dipole",
    title: "Dipole",
    diagram: "dipole",
    text:
      "A dipole has two conductive arms. In the classic ham build, each arm is about a quarter wavelength, making the whole antenna about a half wavelength.",
    bullets: ["Start with 468 / MHz for total feet, then divide by two.", "A horizontal dipole is strongest broadside to the wire.", "Shorter wire raises resonance; longer wire lowers it."],
    used: ["Simple HF Dipole", "OCF Dipole"]
  },
  {
    key: "efhw",
    title: "EFHW",
    diagram: "transformer",
    text:
      "An end-fed half-wave is a half-wave wire fed at one end. The end has high impedance, so a 49:1 unun commonly makes it usable with 50 ohm coax.",
    bullets: ["The feed point can stay near the operator.", "The 49:1 unun is the matching system.", "The return path may be a counterpoise, coax shield, or both."],
    used: ["End-Fed Half-Wave"]
  },
  {
    key: "jpole",
    title: "J-Pole",
    diagram: "omni",
    text:
      "A J-pole is a vertical antenna often used on 2 meters. It behaves like an end-fed half-wave radiator with a quarter-wave matching stub beside it.",
    bullets: ["Useful for local repeaters, simplex, packet, and APRS.", "The feed point slides until SWR is low.", "Keep it away from metal objects and route coax away from the radiating section."],
    used: ["2m J-Pole"]
  },
  {
    key: "swr",
    title: "SWR",
    diagram: "swr",
    text:
      "Standing wave ratio is a quick measurement of mismatch in the antenna system. Low SWR means less energy is reflected back toward the radio.",
    bullets: ["1:1 is a perfect match at the meter point.", "2:1 is often workable; check your radio manual.", "High SWR means reduce power and inspect the system."],
    used: ["All tuning steps"]
  },
  {
    key: "balun",
    title: "Balun / Unun",
    diagram: "transformer",
    text:
      "A balun connects balanced and unbalanced systems. An unun connects two unbalanced systems. Both are used to make antennas and feed lines behave together.",
    bullets: ["1:1 baluns often act as chokes.", "4:1 baluns are common with many OCF dipoles.", "49:1 ununs are common with EFHW antennas."],
    used: ["OCF Dipole", "EFHW", "Dipole choke option"]
  },
  {
    key: "wavelength",
    title: "Wavelength",
    diagram: "wavelength",
    text:
      "Wavelength is the physical distance one RF wave travels during one cycle. Antenna lengths are often fractions of a wavelength.",
    bullets: ["Lower frequency means longer antennas.", "Higher frequency means shorter antennas.", "468 / MHz estimates a half-wave dipole length in feet."],
    used: ["All wire-length formulas"]
  }
];

export const antennaSources = [
  ["Ham Radio Prep: How to build a dipole antenna for Ham Radio", "https://www.youtube.com/watch?v=yRnlJxMWzF4"],
  ["KB9VBR: Building an Off Center Fed Dipole Antenna", "https://www.jpole-antenna.com/2020/07/07/building-an-off-center-fed-ocf-dipole-antenna/"],
  ["KB9VBR: Off Center Fed Dipole video", "https://www.youtube.com/watch?v=A0Ymcs2D7ks"],
  ["Simple Ham Radio Antennas: Build Your Own EFHW", "https://www.simplehamradioantennas.com/2025/01/build-your-own-end-fed-half-wave-antenna.html"],
  ["W2PAK: Build Your Own End-Fed Half-Wave Antenna", "https://www.youtube.com/watch?v=SBrc1DpMk_w"],
  ["KB9VBR / W4UC: Simplified 2 meter J-Pole plans", "https://www.w4uc.org/jpole/kb9vbr_jpole_plans.pdf"],
  ["ARRL: Your First Antenna", "https://www.arrl.org/your-first-antenna"],
  ["ARRL: Feed Lines", "https://www.arrl.org/feed-lines"],
  ["ARRL: More About Antenna Tuners", "https://www.arrl.org/more-about-antenna-tuners"],
  ["ARRL: Verticals", "https://www.arrl.org/verticals"]
];
