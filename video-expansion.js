/* Publisher and title metadata checked against the publishers' public video listings. */
const NEW_VIDEOS = [
  {
    id: 'tODZ18MuPwM', title: 'Single Rescuer Bystander Child CPR',
    by: 'United Hatzalah', year: 2025, topic: 'Resuscitation', chapters: [7, 14],
    format: 'Skills demonstration · 2:40',
    note: 'Child CPR demonstration for a single bystander rescuer. Published January 2025. Compare with your current course and pediatric BLS guidance.',
    guidance: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support'
  },
  {
    id: '5MA6XcS4hpA', title: 'How to Treat a Choking Adult / Child',
    by: 'United Hatzalah', year: 2025, topic: 'Resuscitation', chapters: [7, 11, 14],
    format: 'Skills demonstration · 1:55',
    note: 'Adult and child choking demonstration. Published January 2025, before the AHA 2025 update. Compare the sequence with your current course.',
    guidance: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support'
  },
  {
    id: 'u-oCjgJl11g', title: 'How to Treat a Choking Infant',
    by: 'United Hatzalah', year: 2025, topic: 'Resuscitation', chapters: [7, 11, 14],
    format: 'Skills demonstration · 1:03',
    note: 'Infant choking demonstration. Published January 2025. Review alongside your current pediatric training.',
    guidance: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support'
  },
  {
    id: 'Bt7IFMzJ_Tc', title: 'Single rescuer bystander Adult CPR',
    by: 'United Hatzalah', year: 2024, topic: 'Resuscitation', chapters: [14],
    format: 'Skills demonstration · 2:26',
    note: 'Single-rescuer bystander adult CPR demonstration. Published in May 2024. Compare with your current course and AHA guidance.',
    guidance: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support'
  },
  {
    id: 'S5H_a3lzgUg', title: 'How to Identify a heart attack: Eli Beer and Ari Deutsch',
    by: 'United Hatzalah', presenter: 'Eli Beer and Ari Deutsch', year: 2022,
    topic: 'Assessment', chapters: [10, 15],
    note: 'Recognizing a possible heart attack. A public first-aid lesson featuring Ari Deutsch.'
  },
  {
    id: 'J36Bbr1MGpA', title: 'How to perform CPR: step by step',
    by: 'United Hatzalah', year: 2021, topic: 'Resuscitation', chapters: [14],
    note: 'Cardiac arrest recognition and CPR demonstration. Published before the AHA 2025 update.'
  },
  {
    id: '4L1gzbg_is0', title: 'How to save a person who is choking: step by step',
    by: 'United Hatzalah', year: 2021, topic: 'Resuscitation', chapters: [11, 14],
    note: 'Older choking demonstration. Compare the sequence with the current AHA 2025 adult choking algorithm and your course.',
    guidance: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support'
  },
  {
    id: 'wy-Uxl8i6rk', title: 'Vital Signs: Blood Pressure',
    by: 'San Diego Miramar EMT Program', year: 2020, topic: 'Assessment', chapters: [10],
    note: 'Demonstrates palpated and auscultated blood pressure measurement.'
  },
  {
    id: 'HIxS-LRAja8', title: 'How to Take a Full Set of Vital Signs (EMT)',
    by: 'Chicago EMT Training', year: 2020, topic: 'Assessment', chapters: [10, 15],
    note: 'Blood pressure, pulse, respiratory rate, lung sounds, oxygen saturation, and pupils.'
  },
  {
    id: 'jUBnMax5amc', title: 'Basic Airway Techniques',
    by: 'San Diego Miramar EMT Program', year: 2020, topic: 'Airway', chapters: [11],
    note: 'Head-tilt chin-lift airway-opening demonstration.'
  },
  {
    id: '1DX5mdLMTIc', title: 'Blood Glucose Skill',
    by: 'San Diego Miramar EMT Program', year: 2020, topic: 'Assessment', chapters: [10, 15],
    note: 'Finger-stick glucose testing demonstration for EMT students.'
  },
  {
    id: 'u-sCMeqhyk0', title: 'EMT Skills: Long Bone Immobilization',
    by: 'EMTprep', year: 2014, topic: 'Movement', chapters: [6, 8],
    note: 'Older skills-station demonstration of long-bone splinting. Compare with your current course requirements.'
  },
  {
    id: 'E0U4xIBQE50', title: 'EMT Skills: Joint Immobilization',
    by: 'EMTprep', year: 2014, topic: 'Movement', chapters: [6, 8],
    note: 'Older joint-splinting station demonstration. Use your current course and local protocol.'
  },
  {
    id: 'gRcayk_aYro', title: 'BLS Airway Management — EMTprep Pulse Check',
    by: 'EMTprep', year: 2025, topic: 'Airway', chapters: [11, 16], format: 'Discussion',
    note: 'Practical discussion of airway patency, maneuvers, OPA/NPA, suction, and oxygen devices.'
  },
  {
    id: '1qsu0tnFRlU', title: 'Adult epinephrine administration demonstration',
    by: 'San Diego Miramar EMT Program', year: 2020, topic: 'Medications', chapters: [12, 13, 15],
    note: 'College EMT demonstration for anaphylaxis. Device, dose, and authorization must match your local protocol.'
  },
  {
    id: 'FJQxriDWkMs', title: 'How The Oxygen You Breathe Gets Delivered to the Cells of Your Body',
    by: 'Nucleus Medical Media', year: 2024, topic: 'Anatomy', chapters: [6, 11, 13, 16],
    format: 'Medical animation', note: 'Follows oxygen from alveoli to hemoglobin and tissues, with carbon dioxide transport back to the lungs.'
  },
  {
    id: '3oWspN_SvVM', title: 'What Causes a Stroke?',
    by: 'Nucleus Medical Media', year: 2019, topic: 'Anatomy', chapters: [6, 10, 15],
    format: 'Medical animation', note: 'Explains interrupted brain blood flow and the underlying causes of stroke.'
  },
  {
    id: '1lSJ61nwxuk', title: 'Vital Signs: Respirations',
    by: 'San Diego Miramar EMT Program', year: 2020, topic: 'Assessment', chapters: [10, 11, 16],
    note: 'Demonstrates assessment of a patient’s respirations.'
  },
  {
    id: 'rofk1tiuSss', title: 'Vital Signs: Pulse',
    by: 'San Diego Miramar EMT Program', year: 2020, topic: 'Assessment', chapters: [10, 13],
    note: 'How to assess and document a patient’s pulse.'
  },
  {
    id: 'rkQW29EjHg8', title: 'Check for Response Pulse and Breathing',
    by: 'San Diego Miramar EMT Program', year: 2020, topic: 'Resuscitation', chapters: [10, 14],
    note: 'Initial responsiveness, pulse, and breathing check demonstration. Compare with the current BLS algorithm.'
  },
  {
    id: 'vZEF1xhqiz8', title: 'Narcan Administration',
    by: 'San Diego Miramar EMT Program', year: 2020, topic: 'Medications', chapters: [11, 12, 15],
    note: 'Naloxone administration demonstration. Review airway and ventilation support alongside the medication skill.'
  },
  {
    id: 'C9JzDQoQncw', title: 'Allergic Reactions or Immediate Hypersensitivity',
    by: 'Nucleus Medical Media', year: 2024, topic: 'Anatomy', chapters: [6, 12, 13, 15],
    format: 'Medical animation', note: 'Explains immune activation and how a severe allergic response can affect breathing and circulation.'
  },
  {
    id: 'AW3PvguYoM0', title: 'Asthma Symptoms and Treatment',
    by: 'Nucleus Medical Media', year: 2025, topic: 'Anatomy', chapters: [6, 11, 16],
    format: 'Medical animation', note: 'Airway inflammation, bronchospasm, mucus, and the mechanisms of asthma medicines.'
  }
];
const existingVideoIds = new Set(DATA.videos.map(video => video.id));
DATA.videos.push(...NEW_VIDEOS.filter(video => !existingVideoIds.has(video.id)));
