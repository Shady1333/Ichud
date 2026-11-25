const HEBREW_TERMS = {
  'Airway and breathing': [
    ['Airway', 'נתיב אוויר', 'na-TIV a-VIR', 'air passage'],
    ['Airway obstruction', 'חסימת נתיב אוויר', 'kha-si-MAT na-TIV a-VIR', 'blocked airway'],
    ['Choking', 'חנק', 'KHE-nek', 'foreign body airway obstruction FBAO'],
    ['Breathing', 'נשימה', 'ne-shi-MA', 'respiration'],
    ['Shortness of breath', 'קוצר נשימה', 'KO-tser ne-shi-MA', 'dyspnea difficulty breathing SOB'],
    ['Respiratory distress', 'מצוקה נשימתית', 'me-tsu-KA ne-shi-ma-TIT'],
    ['Respiratory failure', 'אי־ספיקה נשימתית', 'ee-sfi-KA ne-shi-ma-TIT'],
    ['Respiratory arrest', 'דום נשימה', 'dom ne-shi-MA', 'not breathing apnea'],
    ['Respiratory rate', 'קצב הנשימה', 'KE-tsev ha-ne-shi-MA', 'breathing rate RR'],
    ['Ventilation', 'אוורור ריאתי', 'iv-RUR re-a-TI', 'pulmonary ventilation'],
    ['Assisted ventilation', 'הנשמה מסייעת', 'han-sha-MA me-sa-YA-at', 'rescue breathing assisted breaths'],
    ['Oxygen', 'חמצן', 'kham-TSAN', 'O2 supplemental oxygen'],
    ['Oxygen saturation', 'ריווי חמצן (סטורציה)', 'ri-VUY kham-TSAN (sa-tu-RA-tsya)', 'oxygen sat SpO2 pulse ox sat'],
    ['Pulse oximeter', 'מד ריווי חמצן (מד סטורציה)', 'mad ri-VUY kham-TSAN (mad sa-tu-RA-tsya)', 'pulse oximetry pulse ox'],
    ['Hypoxia', 'היפוקסיה', 'hi-POK-sya', 'low tissue oxygen'],
    ['Cyanosis', 'כיחלון (ציאנוזיס)', 'ki-kha-LON (tsi-a-NO-zis)', 'blue skin bluish'],
    ['Wheezing', 'צפצופים', 'tsif-tsu-FIM', 'wheeze'],
    ['Stridor', 'סטרידור', 'stri-DOR', 'noisy inspiration'],
    ['Crackles', 'חרחורים', 'khar-khu-RIM', 'rales lung sounds'],
    ['Bag-valve mask', 'מפוח הנשמה עם מסכה (אמבו)', 'ma-PU-akh han-sha-MA im ma-se-KHA (AM-bu)', 'BVM bag valve mask ambu bag'],
    ['Non-rebreather mask', 'מסכת העשרה בחמצן עם שקית מאגר', 'ma-SE-khet ha-a-sha-RA be-kham-TSAN im sa-KIT ma-A-gar', 'NRB NRM oxygen reservoir mask nonrebreather non rebreathing'],
    ['Nasal cannula', 'משקפי חמצן', 'mish-ke-FEY kham-TSAN', 'NC oxygen nasal prongs'],
    ['Oropharyngeal airway', 'מנתב אוויר פומי', 'me-na-TEV a-VIR pu-MI', 'OPA oral airway Guedel'],
    ['Nasopharyngeal airway', 'מנתב אוויר אפי', 'me-na-TEV a-VIR a-PI', 'NPA nasal airway nasal trumpet'],
    ['Suction', 'שאיבה (סקשן)', 'she-i-VA (SAK-shen)', 'suctioning aspirator'],
    ['Head tilt–chin lift', 'הטיית הראש והרמת הסנטר', 'ha-ta-YAT ha-ROSH ve-ha-ra-MAT ha-san-TER'],
    ['Jaw thrust', 'דחיקת הלסת', 'dkhi-KAT ha-LE-set'],
  ],
  'Assessment and vital signs': [
    ['Scene size-up', 'הערכת זירת האירוע', 'ha-a-ra-KHAT zi-RAT ha-e-RU-a', 'scene assessment scene sizeup'],
    ['Primary assessment', 'סקר ראשוני', 'SE-ker ri-sho-NI', 'primary survey ABC'],
    ['Secondary assessment', 'סקר שניוני', 'SE-ker shni-yo-NI', 'secondary survey secondary exam'],
    ['Reassessment', 'הערכה חוזרת', 'ha-a-ra-KHA kho-ZE-ret', 'repeat assessment'],
    ['Chief complaint', 'תלונה עיקרית', 'tlu-NA i-ka-RIT', 'main complaint'],
    ['Medical history', 'אנמנזה (תולדות המחלה)', 'a-nam-NE-za (tol-DOT ha-ma-kha-LA)', 'patient history SAMPLE'],
    ['Vital signs', 'סימנים חיוניים', 'si-ma-NIM khi-yu-ni-YIM', 'vitals vital measurements'],
    ['Pulse', 'דופק', 'DO-fek', 'heart rate HR'],
    ['Radial pulse', 'דופק רדיאלי', 'DO-fek ra-di-A-li', 'wrist pulse'],
    ['Carotid pulse', 'דופק קרוטידי', 'DO-fek ka-ro-TI-di', 'neck pulse'],
    ['Blood pressure', 'לחץ דם', 'LA-khats dam', 'BP'],
    ['Systolic blood pressure', 'לחץ דם סיסטולי', 'LA-khats dam sis-TO-li', 'SBP systolic BP'],
    ['Diastolic blood pressure', 'לחץ דם דיאסטולי', 'LA-khats dam di-as-TO-li', 'DBP diastolic BP'],
    ['Capillary refill', 'מילוי קפילרי', 'mi-LUY ka-pi-LA-ri', 'CRT cap refill'],
    ['Blood glucose', 'רמת הסוכר בדם', 'ra-MAT ha-su-KAR ba-DAM', 'BGL blood sugar'],
    ['Body temperature', 'חום הגוף', 'khom ha-GUF', 'temp'],
    ['Level of consciousness', 'רמת הכרה', 'ra-MAT ha-ka-RA', 'LOC mental status responsiveness AVPU'],
    ['Loss of consciousness', 'אובדן הכרה', 'ov-DAN ha-ka-RA', 'LOC passed out loss of awareness'],
    ['Unresponsive', 'אינו מגיב / אינה מגיבה', 'ey-NO me-GIV / ey-NA me-gi-VA', 'no response responsiveness'],
    ['Unconscious', 'מחוסר הכרה / מחוסרת הכרה', 'me-khu-SAR ha-ka-RA / me-khu-SE-ret ha-ka-RA'],
    ['Fainting', 'עילפון', 'i-la-FON', 'syncope passing out'],
    ['Chest pain', 'כאב בחזה', 'ke-EV ba-kha-ZE', 'chest discomfort'],
    ['Abdominal pain', 'כאב בטן', 'ke-EV BE-ten', 'stomach pain belly pain'],
    ['Allergy', 'אלרגיה (רגישות יתר)', 'a-LER-gya (re-gi-SHUT YE-ter)', 'allergies hypersensitivity'],
  ],
  'CPR and circulation': [
    ['Cardiac arrest', 'דום לב', 'dom lev', 'pulseless cardiac arrest'],
    ['CPR', 'החייאה', 'hakh-ya-A', 'cardiopulmonary resuscitation'],
    ['Chest compressions', 'עיסויי חזה', 'i-su-YEY kha-ZE', 'CPR compressions'],
    ['Automated external defibrillator', 'דפיברילטור חיצוני אוטומטי', 'de-fi-bri-LA-tor khi-tso-NI o-to-MA-ti', 'AED defibrillator'],
    ['Defibrillation', 'דפיברילציה', 'de-fi-bri-LA-tsya', 'electrical shock'],
    ['Return of spontaneous circulation', 'חזרת מחזור הדם העצמוני', 'kha-za-RAT makh-ZOR ha-DAM ha-ats-mo-NI', 'ROSC pulse returned'],
    ['Heart attack', 'אוטם בשריר הלב (התקף לב)', 'O-tem be-shrir ha-LEV (het-KEF lev)', 'myocardial infarction MI myocardial infarct'],
    ['Stroke', 'שבץ מוחי (אירוע מוחי)', 'sha-VATS mo-KHI (e-RU-a mo-KHI)', 'CVA cerebrovascular accident BE FAST'],
    ['Perfusion', 'זילוח (פרפוזיה)', 'zi-LU-akh (per-FU-zya)', 'tissue blood flow'],
    ['Poor perfusion', 'זילוח ירוד (היפופרפוזיה)', 'zi-LU-akh ya-RUD (hi-po-per-FU-zya)', 'hypoperfusion'],
    ['Shock', 'הלם', 'HE-lem', 'circulatory shock'],
    ['Compensated shock', 'הלם מפוצה', 'HE-lem me-fu-TSE'],
    ['Decompensated shock', 'הלם בלתי מפוצה', 'HE-lem bil-TI me-fu-TSE'],
    ['Hypovolemic shock', 'הלם תת־נפחי (הלם היפוולמי)', 'HE-lem tat-naf-KHI (HE-lem hi-po-vo-LE-mi)', 'volume loss'],
    ['Cardiogenic shock', 'הלם קרדיוגני', 'HE-lem kar-di-yo-GE-ni'],
    ['Obstructive shock', 'הלם חסימתי', 'HE-lem kha-si-ma-TI'],
    ['Distributive shock', 'הלם פיזורי', 'HE-lem pi-zu-RI'],
    ['Hypotension', 'לחץ דם נמוך (תת־לחץ דם)', 'LA-khats dam na-MUKH (tat LA-khats dam)', 'low blood pressure low BP'],
    ['Tachycardia', 'טכיקרדיה (דופק מהיר)', 'ta-khi-KAR-dya (DO-fek ma-HIR)', 'fast heart rate rapid pulse'],
    ['Bradycardia', 'ברדיקרדיה (דופק איטי)', 'bra-di-KAR-dya (DO-fek i-TI)', 'slow heart rate slow pulse'],
  ],
  'Medical emergencies': [
    ['Asthma', 'אסתמה', 'AST-ma', 'asthma attack'],
    ['Bronchospasm', 'כיווץ הסימפונות (ברונכוספזם)', 'ki-VUTS ha-sim-po-NOT (bron-kho-SPAZ-em)', 'bronchoconstriction'],
    ['COPD', 'מחלת ריאות חסימתית כרונית', 'ma-kha-LAT re-OT kha-si-ma-TIT KHRO-nit', 'chronic obstructive pulmonary disease'],
    ['Emphysema', 'נפחת (אמפיזמה)', 'na-PA-khat (em-fi-ZE-ma)', 'COPD alveolar damage'],
    ['Pulmonary edema', 'בצקת ריאות', 'ba-TSE-ket re-OT', 'fluid in lungs'],
    ['Pulmonary embolism', 'תסחיף ריאתי', 'tas-KHIF re-a-TI', 'PE pulmonary embolus lung clot'],
    ['Pneumothorax', 'חזה אוויר (פנאומוטורקס)', 'kha-ZE a-VIR (pneu-mo-TO-raks)', 'air in pleural space collapsed lung'],
    ['Tension pneumothorax', 'חזה אוויר בלחץ', 'kha-ZE a-VIR be-LA-khats', 'tension pneumo'],
    ['Bilateral pneumothorax', 'חזה אוויר דו־צדדי', 'kha-ZE a-VIR du-tsda-DI', 'bilateral pneumo both lungs'],
    ['Hemothorax', 'חזה דם', 'kha-ZE dam', 'blood in pleural space'],
    ['Anaphylaxis', 'אנפילקסיס (תגובה אלרגית חמורה)', 'a-na-fi-LAK-sis (tgu-VA a-LER-git kha-mu-RA)', 'severe allergic reaction'],
    ['Seizure', 'פרכוס', 'pir-KUS', 'convulsion'],
    ['Hypoglycemia', 'היפוגליקמיה (סוכר נמוך בדם)', 'hi-po-gli-KE-mya (su-KAR na-MUKH ba-DAM)', 'low blood sugar low glucose'],
    ['Hyperglycemia', 'היפרגליקמיה (סוכר גבוה בדם)', 'hi-per-gli-KE-mya (su-KAR ga-VO-a ba-DAM)', 'high blood sugar high glucose'],
    ['Dehydration', 'התייבשות', 'hit-yab-SHUT'],
    ['Overdose', 'מנת יתר', 'me-NAT YE-ter', 'OD opioid overdose'],
    ['Carbon monoxide', 'פחמן חד־חמצני', 'pakh-MAN khad-kham-tsa-NI', 'CO poisoning'],
  ],
  'Trauma and transport': [
    ['Mechanism of injury', 'מנגנון הפציעה', 'mang-NON ha-ptsi-A', 'MOI'],
    ['Blunt trauma', 'חבלה קהה', 'kha-ba-LA ke-HA'],
    ['Penetrating trauma', 'חבלה חודרת', 'kha-ba-LA kho-DE-ret'],
    ['Bleeding', 'דימום', 'di-MUM', 'hemorrhage haemorrhage'],
    ['Internal bleeding', 'דימום פנימי', 'di-MUM pni-MI', 'internal hemorrhage'],
    ['Direct pressure', 'לחץ ישיר', 'LA-khats ya-SHIR', 'manual pressure'],
    ['Tourniquet', 'חסם עורקים', 'kha-SAM or-a-KIM', 'TQ bleeding control'],
    ['Pressure dressing', 'תחבושת לחץ', 'takh-BO-shet LA-khats', 'compression bandage'],
    ['Fracture', 'שבר', 'SHE-ver', 'broken bone'],
    ['Dislocation', 'פריקה', 'pri-KA', 'dislocated joint'],
    ['Splint', 'סד', 'sad', 'splinting'],
    ['Cervical collar', 'צווארון לקיבוע הצוואר', 'tsa-va-RON le-ki-BU-a ha-tsa-VAR', 'c collar neck brace'],
    ['Spinal motion restriction', 'הגבלת תנועת עמוד השדרה', 'hag-ba-LAT tnu-AT a-MUD ha-shid-RA', 'SMR spine immobilization'],
    ['Stretcher', 'אלונקה', 'a-lun-KA', 'cot gurney'],
    ['Scoop stretcher', 'אלונקת כף', 'a-lun-KAT kaf', 'scoop'],
    ['Supine', 'שכיבה על הגב', 'shkhi-VA al ha-GAV', 'face up'],
    ['Prone', 'שכיבה על הבטן', 'shkhi-VA al ha-BE-ten', 'face down'],
    ['Recovery position', 'תנוחת התאוששות', 'tnu-KHAT hit-o-she-SHUT', 'side lying'],
    ['Patient transport', 'פינוי מטופל', 'pi-NUY me-tu-PAL', 'evacuation'],
    ['Handoff', 'מסירת מטופל לצוות המקבל', 'me-si-RAT me-tu-PAL la-TSE-vet ha-me-ka-BEL', 'transfer of care handover report'],
  ],
  'Medication and EMS': [
    ['Dose', 'מנה', 'ma-NA', 'dosage medication dose'],
    ['Route of administration', 'דרך מתן התרופה', 'DE-rekh ma-TAN ha-tru-FA', 'medication route'],
    ['Contraindication', 'התוויית נגד', 'hat-va-YAT NE-ged', 'contraindications'],
    ['Adverse effect', 'תופעת לוואי', 'to-fa-AT le-VAY', 'side effect adverse reaction'],
    ['Epinephrine', 'אדרנלין (אפינפרין)', 'a-dre-na-LIN (e-pi-ne-FRIN)', 'epi EpiPen adrenaline'],
    ['Naloxone', 'נלוקסון', 'na-lok-SON', 'Narcan'],
    ['Albuterol', 'סלבוטמול (ונטולין)', 'sal-bu-ta-MOL (ven-to-LIN)', 'salbutamol Ventolin'],
    ['Nitroglycerin', 'ניטרוגליצרין', 'ni-tro-gli-tse-RIN', 'nitro GTN'],
    ['Aspirin', 'אספירין', 'as-pi-RIN', 'ASA'],
    ['Anticoagulant', 'נוגד קרישה', 'no-GED kri-SHA', 'blood thinner anticoagulation'],
    ['Antiplatelet', 'נוגד טסיות', 'no-GED ta-si-YOT', 'platelet inhibitor blood thinner'],
    ['Emergency medical technician', 'חובש רפואת חירום', 'kho-VESH re-fu-AT khe-RUM', 'EMT medic'],
    ['Paramedic', 'פרמדיק', 'pa-ra-ME-dik', 'paramedic ambulance'],
    ['Emergency department', 'מחלקה לרפואה דחופה (מיון)', 'makh-la-KA li-re-fu-A dkhu-FA (mi-YUN)', 'ED ER emergency room'],
    ['Dispatch center', 'מוקד חירום', 'mo-KED khe-RUM', 'dispatch dispatcher operations center'],
    ['Personal protective equipment', 'ציוד מגן אישי', 'tsi-YUD ma-GEN i-SHI', 'PPE gloves protection'],
  ],
  'Anatomy': [
    ['Lungs', 'ריאות', 're-OT', 'lung pulmonary'],
    ['Alveoli', 'נאדיות הריאה', 'na-a-di-YOT ha-re-A', 'alveolus air sacs'],
    ['Trachea', 'קנה הנשימה', 'kneh ha-ne-shi-MA', 'windpipe'],
    ['Bronchi', 'סימפונות', 'sim-po-NOT', 'bronchus bronchial tubes'],
    ['Diaphragm', 'סרעפת', 'sa-RE-fet'],
    ['Pleura', 'קרום הריאה (פלאורה)', 'krum ha-re-A (ple-U-ra)', 'pleural membrane'],
    ['Heart', 'לב', 'lev', 'cardiac'],
    ['Artery', 'עורק', 'O-rek', 'arteries arterial'],
    ['Vein', 'וריד', 'vrid', 'veins venous'],
    ['Capillary', 'נים', 'nim', 'capillaries small blood vessels'],
    ['Sternum', 'עצם החזה', 'E-tsem ha-kha-ZE', 'breastbone'],
    ['Spine', 'עמוד השדרה', 'a-MUD ha-shid-RA', 'spinal column vertebral column'],
    ['Spinal cord', 'חוט השדרה', 'khut ha-shid-RA'],
    ['Pelvis', 'אגן', 'a-GAN', 'pelvic'],
  ],
};

function normalizeHebrewSearch(value) {
  return value.normalize('NFKD').toLowerCase().replace(/\p{M}/gu, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ').trim()
    .replace(/(^| )אויר(?= |$)/gu, '$1אוויר');
}

function hebrewMatches(query) {
  const tokens = normalizeHebrewSearch(query).split(' ').filter(Boolean);
  return Object.entries(HEBREW_TERMS).map(([topic, terms]) => {
    const matches = terms.filter(([english, hebrew, , aliases]) => {
      const words = normalizeHebrewSearch([english, hebrew, aliases].join(' ')).split(' ');
      return tokens.every(token => words.some(word => word.startsWith(token)));
    });
    return [topic, matches];
  }).filter(([, terms]) => terms.length);
}

function hebrewSearchBar(id, query = '') {
  return `<form class="hebrew-lookup" role="search" aria-label="English to Hebrew EMT lookup">
    <label for="${id}">English to Hebrew</label>
    <div class="hebrew-search-controls">
      <input id="${id}" name="term" type="search" maxlength="100" dir="auto" value="${esc(query)}"
        placeholder="Try BVM, blood pressure, or shock" autocomplete="off">
      <button class="btn" type="submit">Look up</button>
    </div>
  </form>`;
}

function hebrewResultMarkup(groups) {
  if (!groups.length) return '<p class="empty">No matching EMT terms. Try a shorter phrase or an abbreviation.</p>';
  return groups.map(([topic, terms]) => `
    <section class="hebrew-topic">
      <h2>${esc(topic)}</h2>
      <dl class="hebrew-entries">
        ${terms.map(([english, hebrew, pronunciation]) => `
          <div class="hebrew-entry">
            <dt>${esc(english)}</dt>
            <dd>
              <span class="hebrew-spelling" lang="he" dir="rtl">${esc(hebrew)}</span>
              <span class="hebrew-pronunciation">${esc(pronunciation)}</span>
            </dd>
          </div>`).join('')}
      </dl>
    </section>`).join('');
}

function hebrewResultCount(groups) {
  const count = groups.reduce((total, [, terms]) => total + terms.length, 0);
  return `${count} ${count === 1 ? 'term' : 'terms'}`;
}

function hebrewPage(rawQuery = '') {
  let query = rawQuery;
  try { query = decodeURIComponent(rawQuery); } catch {}
  query = query.slice(0, 100);
  const groups = hebrewMatches(query);
  return head('STUDY TOOL', 'Hebrew EMT terms',
    'Look up English terms or abbreviations. Capital letters mark the stressed syllable, and kh sounds like ח.')
    + `<section class="hebrew-glossary" aria-label="Hebrew EMT glossary">
      ${hebrewSearchBar('hebrew-glossary-query', query)}
      <p id="hebrew-count" class="hebrew-count" role="status">${hebrewResultCount(groups)}</p>
      <div id="hebrew-results">${hebrewResultMarkup(groups)}</div>
      <p class="guide-sources">Terminology references
        <a href="https://www.mdais.org/Media/file_download/Refuat_Herumpdf_2024.pdf" target="_blank" rel="noopener noreferrer">Magen David Adom emergency medicine textbook</a> ·
        <a href="https://www.gov.il/BlobFolder/reports/first-aid-equipmen-public-places/he/files_publications_MISC_first_aid_equipmen_public_places.pdf" target="_blank" rel="noopener noreferrer">Israel Ministry of Health first aid equipment list</a>
      </p>
    </section>`;
}

document.addEventListener('submit', event => {
  if (!event.target.matches('.hebrew-lookup')) return;
  event.preventDefault();
  const query = event.target.elements.term.value.trim();
  const destination = query ? '#hebrew/' + encodeURIComponent(query) : '#hebrew';
  if (location.hash !== destination) location.hash = destination;
});

document.addEventListener('input', event => {
  if (event.target.id !== 'hebrew-glossary-query') return;
  const groups = hebrewMatches(event.target.value);
  document.getElementById('hebrew-count').textContent = hebrewResultCount(groups);
  document.getElementById('hebrew-results').innerHTML = hebrewResultMarkup(groups);
});
