/* Explanations and worked examples for rules introduced in the chapter overviews. */
const CHAPTER_REASONING = {
  8: [
    ['Why keeping the load close protects your back',
      'Gravity pulls the load down. Your hips and lower back have to resist the forward turning effect of that pull. The farther forward your hands are, the longer the lever arm and the greater that turning effect. Imagine holding the same bag 8 inches and then 16 inches in front of a pivot. The bag’s turning effect at the second position is twice as large, even though its weight stays the same. That comparison describes the load alone. Actual spinal loading also depends on posture, acceleration, and muscle activity.',
      'Before lifting a cot or device, move your feet closer and set the handle height when the equipment allows. If a bed rail or doorway forces a long reach, change the setup, use appropriate transfer equipment, or add trained help. Strong legs cannot remove the extra leverage from a long reach.'],
    ['Why you set your feet, bend at the hips and knees, and turn with your feet',
      'Your feet form the base that supports you. When the combined weight of you and the load shifts beyond that base, you must step or risk losing balance. Bending at the hips and knees lets you get to the handles while keeping your trunk controlled and using your legs and hips to rise. Twisting your trunk under load adds rotational stress. Taking small steps to turn keeps your shoulders and hips moving in the same direction. The space, handle height, and footing determine whether you can do any of this comfortably.',
      'At a narrow turn, choose the direction of travel and clear room for your feet before lifting. If you cannot turn without reaching or twisting, set the device down on a stable surface when safe and reposition the crew.'],
    ['Why the patient’s weight is only one part of the load',
      'Include the transport device and attached equipment. Where the center of mass sits determines how force is shared. If it shifts toward one end of a carry, that end bears more of the load. A patient can also shift, grab a rail, or change position without warning. Stairs, uneven ground, poor handles, and fatigue reduce the crew’s ability to control changes. An equipment rating tells you the device’s capacity. The crew’s ability to control it depends on the route, staffing, and technique.',
      'When the transfer is beyond your crew’s ability, wait for help if the scene permits. Plan every transition, including the landing and where you can put the load down. Avoid assuming two people will each carry exactly half.'],
    ['Lift, slide, or roll depending on the transfer',
      'Lifting raises the patient’s weight against gravity. A lateral transfer between compatible surfaces may use a rated transfer aid to reduce friction and the amount of vertical lifting. Rolling on a secured wheeled cot carries the patient’s weight on the frame, though thresholds, slopes, and sharp turns can still tip or accelerate the cot. The patient’s condition can rule out a particular position or device even if it fits the route.',
      'For a planned bed-to-cot transfer, assess the patient and surfaces, position and secure the equipment as trained, and select a rated transfer aid if appropriate. For stairs, check whether the patient can tolerate a seated position and whether the chair, staircase, and crew meet the device and service requirements.'],
    ['Why one leader calls the count and the stop',
      'When one person lifts before the others, the load shifts unexpectedly and the device can tip. A named leader confirms that everyone has a secure grip, knows the destination, and is ready to move. A clear stop command gives the crew a shared response to a snagged tube, slipping grip, or sudden patient change.',
      'Before the count, assign who manages the patient’s head or airway and who watches oxygen tubing and equipment. If a wheel catches or someone calls stop, stabilize the load together before changing the plan.'],
    ['Why an emergency move can justify a different approach',
      'Staying in place has a cost when there is an immediate hazard or the position blocks lifesaving care. In that case, moving promptly may reduce the greater risk. A controlled move gives you time to manage pain, maintain indicated motion precautions, protect the airway, and choose appropriate equipment. Recheck the patient afterward because position and motion can expose or worsen breathing problems, bleeding, or a neurologic change.',
      'Compare a patient in a room that is safe but cramped with a patient exposed to an immediate hazard that rescuers can approach safely. In the first case, stage equipment and get help. In the second, use the emergency move taught by your service to reach safety, then repeat the primary assessment.'],
    ['Worked case: a stair chair looks convenient',
      'A dizzy patient on an upper floor says he can walk. The stairwell is steep with a tight landing. The walk would make balance depend on a patient who could become faint midflight. Before choosing a chair, assess alertness, breathing, perfusion, and ability to tolerate sitting. Inspect the landing and verify the trained crew and equipment can negotiate it. If your plan depends on a patient remaining upright despite worsening perfusion, change the plan and request support.',
      'Before moving, agree on the route, equipment, command words, and stopping point. After the transfer, check what changed in symptoms, responsiveness, breathing, and perfusion.']
  ],
  5: [
    ['Why one missing word can send the team to the wrong place',
      'Anatomic directions describe the patient from a standard reference position. With you facing the patient, their right is on your left. Proximal and distal describe where a finding lies along a limb relative to where it joins the body. A reproducible report gives side, region, and a landmark so the receiving clinician can locate the same finding.',
      'Try “left forearm, just proximal to the wrist.” If a wrap covers the wound, the receiving clinician can still locate the injury and check the hand beyond it.'],
    ['Why you report observations alongside medical terms',
      'A medical term compresses a description. It may drop the time, the measurement, or how you know it. “Tachypnea” tells you the rate is high for context. It leaves open whether chest rise is good and whether the patient is tiring. A symptom, a measured sign, and a working impression are three different kinds of information.',
      '“Respirations fell from 30 and labored to 10 and shallow, and the patient is now drowsy” tells the next clinician why you changed support. A lower rate only looks better until you read the other findings.'],
    ['Why a word part is a clue to the concept',
      'Brady- indicates slow and tachy- indicates fast. Pair -pnea with breathing and you can decode bradypnea and tachypnea. Then identify what the word leaves open. Hypoxemia refers to low oxygen in blood, whereas tissue hypoxia can also result from poorly circulating blood or inadequate oxygen carrying capacity.',
      'Ask what variable the word actually describes. When you report a value, include the unit and time. For a medication name or dose you are unsure of, check the label and confirm it with your partner.']
  ],
  6: [
    ['Why normal saturation can coexist with poor oxygen delivery',
      'Oxygen delivery depends on the oxygen content of blood and how much blood the heart pumps. Hemoglobin carries most of that oxygen. SpO₂ estimates the percentage of hemoglobin binding sites occupied. A patient with severe blood loss can have well saturated blood moving through the sensor, but insufficient blood flow to meet tissue needs.',
      'Compare a comfortable patient with a patient who is pale, confused, and weak after bleeding. Both can display 98%. The second patient’s skin, pulse, mentation, and mechanism change the priority.'],
    ['Why the right and left sides of the heart behave differently',
      'The right ventricle sends blood through the pulmonary circuit. The left ventricle pumps through the systemic circuit, supplying the organs. Valves open and close as pressure differences reverse, directing blood forward. If the left pump cannot keep up, pressure can rise behind it in the pulmonary circulation and fluid can interfere with lung gas exchange.',
      'Chest discomfort, crackles, or breathlessness can suggest a connection between lung and heart findings. Assess chest rise, air movement, circulation, and history before deciding how to support the patient.'],
    ['Why a small breath may contribute little to gas exchange',
      'Some of each breath stays in conducting airways such as the trachea and bronchi, where there is little gas exchange. The portion reaching the alveoli contributes to gas exchange. As breaths get shallower, a larger share can be spent moving air through the conducting airways. The rate can look high while effective ventilation drops.',
      'Compare rapid deep chest rise with rapid barely visible chest rise. At the same rate they can produce very different air movement. Track depth, fatigue, and mental status with the rate.'],
    ['Why you check circulation, sensation, and movement after limb injury',
      'Bone, vessels, nerves, and muscles run close together. Trauma or swelling may interfere with blood flow and nerve function beyond the injury. A new problem can appear as swelling increases or after a position change. A pulse is one piece of the exam. Sensation and movement test other functions.',
      'Compare both sides and document your check before and after splinting or movement when feasible. Report a newly weaker pulse, cold hand or foot, numbness, or loss of movement.']
  ],
  7: [
    ['Why a small amount of swelling can matter more in a child',
      'An infant or young child starts with a smaller airway. The same thickness of swelling takes up a larger fraction of a small opening. Resistance to flow rises as the opening narrows. Increased effort can compensate for a while, then the child may tire and move less air.',
      'Pay attention to retractions, noisy breathing, position, chest rise, and interaction. The quiet child who looks tired after struggling needs immediate reassessment.'],
    ['Why pressure can stay up while perfusion worsens',
      'A child can increase heart rate and constrict blood vessels to help maintain blood pressure as circulating volume falls. That same constriction may make skin pale or mottled and peripheral pulses weaker. The pediatric assessment triangle picks up visible clues before you put a cuff on, then the primary assessment tests the impression.',
      'Compare a dehydrated child’s alertness, breathing, skin, and pulses over time. A blood pressure within the expected range does not erase a worsening trend.'],
    ['Why an older adult’s baseline changes what a finding means',
      'Chronic illness, sensory limitations, and medications shape the exam. A beta blocker can blunt the expected rise in heart rate. Hearing loss can look like poor responsiveness unless you check how the person normally communicates. New confusion can reflect illness, injury, or poor perfusion, even in someone who has dementia.',
      'Ask a reliable witness what the person could do and how they interacted earlier today or yesterday. Then describe what is different, when it changed, and what you found on the primary assessment.']
  ],
  9: [
    ['Why closed loop communication catches a real error',
      'Noise, task load, and similar words make it easy to hear the wrong instruction or assume someone else took it. A named person repeats the request, giving the sender a chance to catch a misunderstanding. A completion report tells the team that the task actually happened.',
      '“Maya, get the AED from the vehicle.” If Maya repeats “Get the oxygen bag,” the leader can correct the error before she leaves. If the AED has not arrived, say so and reassign the task.'],
    ['Why two providers can both miss the same threat',
      'Both may see a partner near the patient’s head and assume the airway was assessed. Meanwhile, the partner may be trying to obtain history. Naming an owner and communicating the finding prevents this coordination gap. Hearing new information aloud also lets the team act on the same current picture.',
      'Say “airway open, breathing shallow, I’m taking ventilation,” then name who prepares the device and who tracks the pulse. After a change, restate the new priority.'],
    ['Why a handoff includes what changed and what is pending',
      'The next team inherits decisions as well as a patient. A current pressure without an earlier value can hide a drop. A treatment without its timing can prompt an unintended repeat. An unresolved finding or pending task can disappear if no one accepts it.',
      'Give initial and current findings with times, intervention and response, and what still needs attention. Ask the receiver to confirm a critical unresolved point if the environment is noisy.']
  ],
  10: [
    ['Why the first pass is brief and treats threats as they appear',
      'Ventilation failure and major hemorrhage can reduce oxygen delivery within minutes. A full symptom interview is useful after urgent problems are addressed. The scene and general impression determine what resources you need. The primary assessment checks the systems that can fail first and answers how urgently the patient needs to move.',
      'A patient answering questions becomes quiet with poor chest rise. Break off the interview and reassess airway, ventilation, and circulation. Ask your partner to manage equipment and transport while you address the immediate change.'],
    ['Why OPQRST and SAMPLE answer different questions',
      'OPQRST builds a timeline and characterizes the symptom. Sudden onset at rest, pain spreading elsewhere, or symptoms tied to exertion may change your concern even if the severity number is modest. SAMPLE gives context that can change treatment and interpretation, including allergies, medicines, prior conditions, intake, and events.',
      'For new chest discomfort, ask what the patient was doing when it began and how it changed. Ask what medicines they took for it and when. Severity alone cannot distinguish a dangerous cause.'],
    ['Why last known well is different from discovery time',
      'Stroke care is time sensitive. If someone wakes up with weakness, the time they noticed it may be much later than the last time someone saw them at their usual neurologic baseline. The receiving team uses that history with screening findings and further evaluation. A glucose abnormality can mimic some stroke findings.',
      'Record both times when known and who supplied them. Describe specific BE FAST findings and perform a glucose check when indicated and authorized while keeping the evaluation moving.'],
    ['Why reassessment can overturn a reasonable first impression',
      'Assessments are snapshots. A patient can compensate early and become less responsive or poorly perfused later. Treatments can also fail, work briefly, or cause a new problem. Repeating the relevant observations with times lets you see the direction of change and respond.',
      'After applying oxygen, compare chest rise, effort, speech, mental status, pulse, and saturation. If saturation improves but breathing becomes shallow and the patient becomes drowsy, reevaluate ventilation immediately.']
  ],
  11: [
    ['Why airway position comes before the mask',
      'With reduced muscle tone, the tongue and soft tissues can narrow the airway. Blood, vomit, or secretions can also block airflow. An airtight mask can still fail to deliver breaths through an obstructed passage. Positioning addresses soft tissue obstruction, and suction clears fluid when indicated. An adjunct can help hold the passage open after it is cleared.',
      'If you are using a BVM and the chest does not rise, check positioning, obstruction, mask fit, and seal. A second trained rescuer can help with a two-handed seal and airway position.'],
    ['Why a nonrebreather and a BVM solve different problems',
      'A nonrebreather makes a higher concentration of oxygen available to a patient who draws adequate breaths. A BVM creates positive pressure to move air into the lungs when breathing is absent or ineffective. Ventilation also removes carbon dioxide. Pulse oximetry shows an estimate of saturation, which can stay high for a time during inadequate ventilation.',
      'A patient with a definite pulse, shallow breaths, poor chest rise, and declining alertness needs assessment and ventilation support according to training and protocol, even with a seemingly reassuring saturation.'],
    ['Why the goal is visible chest rise',
      'The bag is larger than the breath most patients need. Squeezing too quickly or forcefully can increase pressure, inflate the stomach, and increase the risk of regurgitation. With adequate airway position and seal, a controlled breath that produces visible chest rise is a practical sign that air is entering the lungs.',
      'Watch the chest, allow exhalation, and use the age and situation-specific rate taught in your course. If the chest does not rise, correct the cause before increasing force.']
  ],
  12: [
    ['Why the label concentration changes the amount you give',
      'Dose describes how much active drug is ordered. Concentration is how much active drug is contained in a given volume. Two packages can have the same generic name with different concentrations or delivery devices. Mixing up milligrams and milliliters can deliver a completely different amount.',
      'For an arithmetic exercise, a fictional order of 4 mg and a label of 2 mg per mL give 2 mL. A 1 mg per mL label gives 4 mL for the same order. In the field, verify the actual protocol, product, dose, and route with your partner when applicable.'],
    ['Why route and patient status are safety checks',
      'A person with impaired swallowing may aspirate an oral medicine. An inhaled medicine relies on delivery to the airways and may be harder to deliver effectively when air movement is poor. Intranasal delivery requires the authorized product and technique. Route affects where the medicine goes and how it is absorbed.',
      'A drowsy patient who cannot reliably swallow changes an oral medication decision, even if the underlying condition would ordinarily be an indication. Address airway and breathing and follow the authorized alternatives.'],
    ['Why medication administration starts a new assessment',
      'Treatment can improve one sign while an important threat persists. Naloxone may reverse opioid respiratory depression, but onset and duration vary, a dose may be insufficient, and another cause can coexist. Assisted ventilation supports air movement while the underlying issue is addressed.',
      'Measure what you meant to improve. Record breathing quality and alertness before and after intervention and transfer the exact dose, route, time, and response to the next clinician.']
  ],
  13: [
    ['Why blood pressure can look normal in early shock',
      'Arterial pressure depends in part on cardiac output and vascular resistance. When blood loss lowers the volume ejected per beat, faster heart rate and tighter blood vessels can help sustain pressure for a time. Skin and other tissues can already be receiving less flow. As compensation fails, pressure may drop.',
      'A patient with suspected bleeding, pale clammy skin, rising pulse, and new confusion may be deteriorating with a pressure still near baseline. Treat life threats and reassess the trend.'],
    ['Why different types of shock can look alike',
      'Hemorrhage reduces circulating volume. Pump failure lowers forward output. Widespread vasodilation changes how blood is distributed, and a mechanical obstruction can limit filling or forward flow. All can leave tissues underperfused and cause altered mentation, weakness, or a weak pulse. The setting and associated findings help identify the likely mechanism.',
      'After a fall, look for concealed or external bleeding. With hives, wheeze, and poor perfusion after a trigger, consider anaphylaxis and follow authorized care. Support the primary threats even when the cause is uncertain.'],
    ['Why bleeding control and keeping the patient warm matter together',
      'Ongoing bleeding means less circulating volume and less oxygen carrying capacity. Controlling accessible life-threatening bleeding limits that loss. Cold can impair clotting and complicate trauma care. A patient can lose heat from wind, wet clothing, a cold surface, and exposure during the exam.',
      'Expose enough to find and manage injury, then cover and insulate the patient as appropriate. Recheck bleeding after movement and report the intervention and timing. Suspected internal bleeding needs timely definitive care.']
  ],
  14: [
    ['Why recoil and short pauses matter during CPR',
      'Compressions generate some blood flow when the heart cannot pump. Letting the chest recoil relieves pressure and helps blood return for the next compression. Pauses interrupt that flow, and several compressions are needed to build pressure again after a pause. Effective coordination keeps interruptions short.',
      'Set up pad placement and compressor changes so the pause is as short as practical. Avoid leaning between compressions and resume CPR promptly after AED analysis or a shock when the algorithm directs.'],
    ['Why the AED can advise no shock during cardiac arrest',
      'Defibrillation can interrupt shockable electrical activity, including ventricular fibrillation and pulseless ventricular tachycardia. Some arrests have rhythms that will not improve with a shock. The AED evaluates electrical activity and advises based on the rhythm. It does not tell you that circulation is adequate.',
      'If the device says no shock and the patient remains in arrest, resume CPR and follow the AED and current course algorithm.'],
    ['Why a definite pulse changes the immediate action',
      'A patient with a pulse has some circulation. If breathing is absent or inadequate, assisted breaths support oxygenation and carbon dioxide removal while you monitor that circulation. Without a definite pulse in an unresponsive adult with absent or abnormal breathing after the brief trained check, compressions and an AED are urgent.',
      'Recognize gasps as abnormal breathing. Follow the current AHA pathway for the patient’s age and situation, and reassess the pulse during rescue ventilation.']
  ],
  15: [
    ['Why a symptom can have several urgent causes',
      'Confusion can result when the brain receives too little oxygen, blood flow, or glucose. Trauma, infection, seizures, stroke, and drugs can also alter function. A finding such as alcohol odor may be true and still fail to explain the change. The primary assessment checks for immediate threats across all those possibilities.',
      'Assess airway, ventilation, and perfusion. Obtain a baseline and time of change, check glucose if indicated and authorized, and look for injuries or focal deficits while arranging care.'],
    ['Why a seizure timeline matters after the shaking stops',
      'After a seizure, a patient may be sleepy or confused while brain function recovers. Continued poor ventilation, persistent altered status, or another episode before recovery changes the urgency. Witnesses can describe findings you could not see, including the start time, duration, and recovery between events.',
      'Ask what happened first and whether the patient returned to baseline. Recheck breathing and perfusion and document the trend instead of recording only “postictal.”'],
    ['Why anaphylaxis can threaten several systems at once',
      'A severe systemic reaction can swell upper airway tissues, tighten lower airways, and dilate vessels or cause fluid to shift out of the circulation. That combination can impair both breathing and perfusion. Skin findings are common but may be absent.',
      'New hoarseness, wheezing, or weak pulses after a likely exposure changes urgency. Follow the local anaphylaxis pathway and check for a response after every intervention.']
  ],
  16: [
    ['Why a patient can sound quieter as breathing worsens',
      'Wheezing requires air to move through narrowed airways. If airflow becomes very low, wheezing may become faint. A tiring patient may also breathe more slowly and shallowly after working hard. Less noise and less effort can mean either recovery or deterioration, depending on air movement and alertness.',
      'Check chest rise, air entry, speech, and mental status together. A falling rate with poor rise and drowsiness calls for prompt evaluation of ventilation support.'],
    ['Why different lung problems need different thinking',
      'Asthma can narrow lower airways through smooth muscle constriction, inflammation, and mucus. Fluid in or around the gas exchange surface can make oxygen transfer harder, even when the patient is moving air. An upper airway obstruction instead limits air getting in. Symptoms overlap, so sounds alone cannot prove which mechanism is present.',
      'Compare voice, position, breath sounds, chest rise, perfusion, and history. Support the immediate breathing problem and use disease-specific treatment only when authorized and indicated.'],
    ['Why pulse oximetry is one part of the trend',
      'A pulse oximeter estimates saturation using a pulsating signal at the sensor. Poor circulation, cold, movement, and device limitations can interfere. Supplemental oxygen can hold saturation up for a time while shallow breathing still allows carbon dioxide to rise. The patient can deteriorate before the number flags the change.',
      'If the number conflicts with what you see, check signal quality and sensor placement while reassessing breathing and perfusion. Do not delay support when clinical findings show inadequate ventilation.']
  ]
};

const REASONING_REFERENCES = {
  ems: ['National EMS Education Standards', 'https://www.ems.gov/assets/EMS_Education_Standards_2021_Updated2_24_25forEO.pdf'],
  lifting: ['NIOSH lifting risk factors', 'https://www.cdc.gov/niosh/ergonomics/about/rnle.html'],
  handling: ['NIOSH safe patient handling', 'https://www.cdc.gov/niosh/healthcare/sphm/'],
  breathing: ['OpenStax breathing physiology', 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing'],
  circulation: ['OpenStax blood flow and resistance', 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-blood-flow-blood-pressure-and-resistance'],
  team: ['AHRQ TeamSTEPPS check-back', 'https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/checkback.html'],
  stroke: ['CDC stroke signs and symptoms', 'https://www.cdc.gov/stroke/signs-symptoms/'],
  bls: ['AHA adult BLS guidelines', 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support'],
  saturation: ['FDA pulse oximeter limitations', 'https://www.fda.gov/medical-devices/products-and-medical-procedures/pulse-oximeters']
};

const REFERENCES_BY_CHAPTER = {
  5: ['ems'], 6: ['breathing', 'circulation'], 7: ['ems', 'circulation'],
  8: ['handling', 'lifting'], 9: ['team', 'ems'], 10: ['ems', 'stroke'],
  11: ['bls', 'breathing', 'saturation'], 12: ['ems', 'bls'],
  13: ['ems', 'circulation'], 14: ['bls'], 15: ['ems', 'stroke'],
  16: ['breathing', 'saturation']
};
