/* Each lesson follows a concept through to a decision. Cases use fictional patients. */
const CHAPTER_GUIDES = {
5: {
question: 'How do you turn what you see and hear into a report another EMT can act on?',
steps: [
['Separate what the patient says from what you observe',
 '“I can’t get enough air” is a symptom: dyspnea. A measured rate of 30 breaths per minute is a sign: tachypnea. A patient can feel breathless with a normal rate or breathe fast without reporting breathlessness. The impression is your interpretation of the combined findings. Record the symptom in the patient’s words, the sign with a measurement when possible, and the impression with the appropriate degree of certainty.'],
['Break an unfamiliar term into parts',
 'Take bradypnea: brady- means slow and -pnea refers to breathing. Bradycardia uses the same prefix, but -cardia points to heart rate. Hypoxemia describes low oxygen in the blood, while hypoxia describes insufficient oxygen at the tissues. Distinguishing the two matters: somebody with major blood loss can have very poor tissue oxygen delivery even if their remaining hemoglobin is well saturated.'],
['Locate the finding from the patient’s point of view',
 'Medial is toward the midline and lateral is away from it. Proximal and distal tell you where a finding is along an extremity relative to the point of attachment. On the same arm, an elbow wound is distal to the shoulder and proximal to the wrist. Chart the patient’s side, the body region, and a landmark. “Right lateral lower leg, just above the ankle” is reproducible. “Right side by the foot” leaves the next team guessing.'],
['Add time, units, method, and change',
 'Write 92/58 mmHg, pulse 118/min, and respiration 28/min with the time and relevant conditions. A second pressure taken with a cuff that is too small is not a sound comparison. If a reading is surprising, check the technique and assess the patient broadly. When two comparable readings change along with skin or alertness, report the trend.']
],
case: ['A 46-year-old fell on his right arm. He says his fingers are tingling and he is “a little lightheaded.” His speech is clear.',
 ['Identify the observation', 'Tingling is reported. A weak right radial pulse relative to the left, if found, is an observed sign. Record each separately.'],
 ['Locate it precisely', 'Specify the injured side and landmark, then report distal circulation, sensation, and movement. “Forearm injury” alone hides whether hand function changed.'],
 ['Report the trend', 'If the pulse or sensation changes after moving the arm, report the finding before and after the move and the time it changed.']]
},
6: {
question: 'What has to work for oxygen to reach a cell, and where can the chain fail?',
steps: [
['The airway supplies a route and the chest generates airflow',
 'Trace one breath through the nose or mouth, pharynx, larynx, trachea, bronchi, bronchioles, and alveoli. The diaphragm moves downward during inspiration, increasing chest volume and lowering pressure so air moves inward. In quiet expiration, relaxation and elastic recoil move air out. The airway is the passage. Ventilation is the movement of gas through it. An open airway does not guarantee that enough gas is moving.'],
['Breath depth determines how much fresh air reaches the alveoli',
 'Some air remains in the conducting airways where no gas exchange occurs. For a simplified adult example, use 150 mL of airway dead space. At 12 breaths of 500 mL, about 4.2 L of fresh air reaches the alveoli each minute. At 24 breaths of 250 mL, total air movement is still 6 L/min, but only about 2.4 L/min is fresh air reaching the alveoli. The numbers are illustrative. The point is why fast, shallow breathing can clear much less carbon dioxide.'],
['The lungs exchange gases and blood carries them',
 'At the alveolar-capillary membrane, oxygen moves into blood and carbon dioxide moves into alveolar gas. Most oxygen in blood is carried on hemoglobin. SpO₂ estimates the percentage of available hemoglobin carrying oxygen. In an example with half as much hemoglobin, a reading of 98% can still mean far less oxygen carried per volume of blood. It also tells you nothing directly about how much blood the heart is pumping.'],
['Two circuits move the blood',
 'Body → venae cavae → right atrium → tricuspid valve → right ventricle → pulmonary valve and arteries → lungs. Then lungs → pulmonary veins → left atrium → mitral valve → left ventricle → aortic valve and aorta → body. Arteries lead away from the heart and veins lead back. This is why the pulmonary arteries carry relatively low-oxygen blood and the pulmonary veins carry oxygenated blood.'],
['Cardiac output connects pulse, filling, and perfusion',
 'Cardiac output equals heart rate times stroke volume. At 80 beats/min and 65 mL/beat it is 5.2 L/min. After volume loss, 110 beats/min at 35 mL/beat gives only 3.85 L/min. A faster pulse may compensate partly while vessels constrict to maintain pressure. The skin can become cool and the radial pulse weak even before a low pressure is measured. Perfusion describes blood reaching tissues, not merely pressure in the arteries.'],
['The nervous system connects a finding to a location',
 'The central nervous system is the brain and spinal cord. Peripheral sensory nerves carry information inward and motor nerves carry commands outward. Autonomic pathways regulate functions such as heart rate and vessel tone. An arm that is weak on one side suggests a different pattern from an entire patient becoming less responsive. Check side-to-side findings and baseline function. One weak limb may reflect a local nerve or musculoskeletal injury, a spinal problem, or a brain problem depending on the rest of the exam.'],
['Bones, muscles, and vessels share tight spaces',
 'Bones provide support, joints act as pivots, and muscles pull on bones through tendons. Ligaments connect bones at joints. A force that deforms a bone or joint can also stretch nearby nerves or compromise a vessel. A distal pulse, sensation, and movement each tell you something different. Compare both sides and document relevant findings before and after a transfer or splint when feasible.'],
['Fuel and fluid balance connect several organ systems',
 'The digestive tract supplies nutrients. The liver processes and stores nutrients, and pancreatic hormones help regulate blood glucose. Insulin supports glucose uptake and storage, while glucagon helps raise glucose between meals. The kidneys regulate water and electrolytes and contribute to acid-base balance. The lungs can change carbon dioxide elimination over minutes, while renal regulation generally acts more slowly. Vomiting, diarrhea, and impaired intake can reduce volume as well as disrupt the supply of fuel.'],
['Other systems supply clues at different times',
 'The brain needs a constant supply of oxygen and glucose. A new mental status change can be a clue to a problem with either supply, a neurologic injury, or another cause. The kidneys filter blood and regulate water and salts over time. Reduced urine is a clue when there is enough history to interpret it. In a limb, pulse checks a vascular component, while movement and sensation test muscle and nerve function. A limb can have a palpable pulse and still have a neurologic deficit.']
],
case: ['After a fall, a patient has active bleeding, cool skin, a weak radial pulse, and a reliable SpO₂ reading of 98%. He is becoming restless.',
 ['Find the failing link', 'The saturation describes oxygen loading on the hemoglobin that is present. Hemorrhage can lower circulating volume, reduce the amount the heart ejects, and limit oxygen delivery despite that number.'],
 ['Check whether the picture fits', 'The weak pulse, cool skin, and changing alertness support a perfusion concern. Check breathing quality and compare vital trends while addressing bleeding.'],
 ['Predict what matters on reassessment', 'Look for continued bleeding and changes in mental status, pulse, skin, and pressure. An unchanged saturation alone does not show that delivery improved.']]
},
7: {
question: 'How do age, baseline, and reserve change the meaning of the same finding?',
steps: [
['Start with what is normal for this patient',
 'Development changes what a patient can communicate and what you can observe. A preverbal child may express illness through poor feeding, weak interaction, or inability to settle. Ask a caregiver about the change and observe the child directly. For an older adult, ask how they normally communicate, walk, and manage daily activities, and when they were last at that baseline. New confusion deserves assessment even if chronic memory problems are present.'],
['Look at appearance, work of breathing, and circulation to skin',
 'The pediatric assessment triangle is a first impression. Appearance includes tone, interaction, and consolability. Breathing clues include position, retractions, and abnormal sounds. Skin clues include pallor, mottling, or cyanosis. A concerning first impression speeds up the hands-on assessment. You still need to check whether air is moving effectively and whether perfusion is adequate.'],
['Understand why compensation can hide decline',
 'Children can preserve pressure by increasing heart rate and constricting vessels while stroke volume falls. A small airway has less room to spare when swollen. A child who changes from vigorous crying to poor interaction with shallow breaths may be tiring. In older adults, medications and reduced reserve can blunt expected responses such as tachycardia, so compare repeated findings with baseline and the mechanism.'],
['Use development to distinguish cooperation from condition',
 'A toddler can resist examination because a stranger is approaching, while an older child may explain the symptom and follow a simple direction. School-age children often cooperate better if they know exactly what the next step will feel like. Adolescents may give a more accurate sensitive history in private when practical. In each group, assess whether the response makes sense for the situation and whether it changes. A frightened patient can still be seriously ill, and quiet cooperation can turn into reduced responsiveness.'],
['Adjust communication and positioning',
 'Approach a young child with a familiar caregiver when feasible, use concrete words with school-age children, and protect adolescent privacy as the situation permits. Assess the patient rather than asking the caregiver every question. Match positioning and equipment to anatomy and tolerance. A position or device that is appropriate for an alert adult may be unsuitable for a small infant or a patient with altered responsiveness.']
],
case: ['A three-year-old with increased breathing effort was fighting the exam on arrival. Two minutes later the child is quiet, limp, and breathing with little chest rise.',
 ['Compare the change', 'Less crying and less movement would be reassuring with better interaction and airflow. Limpness and reduced chest rise point the other way.'],
 ['Recheck the primary assessment', 'Assess airway, breathing adequacy, and perfusion immediately. Support ventilation when needed using pediatric training and local protocol.'],
 ['Describe the trend', 'Tell the receiving team how tone, interaction, and breathing changed. “The child calmed down” would omit the concerning changes.']]
},
8: {
question: 'How do you move a patient while controlling the load and still treating them?',
steps: [
['Decide whether staying put is dangerous',
 'Separate safety from convenience. If an immediate hazard prevents safe care in place and the crew can approach safely, moving urgently may be necessary. If the area is safe, pause to assess the patient, choose the device and route, and get help. A narrow doorway makes a move hard. It does not by itself justify skipping the setup.'],
['Use leverage and balance to predict strain',
 'The turning force on your back increases as the weight moves farther from your trunk. In a simplified example, holding the same load twice as far out doubles its turning force. Bend at the hips and knees, bring the load close where possible, and move your feet to turn. If the setup still forces a long reach or twist, alter the setup. Good posture does not make equipment fit or make an overloaded lift safe.'],
['Plan the path and equipment before committing',
 'Check the entire route, including landing size, surface changes, doors, and where you can safely set down. Count the patient, device, and attached equipment when considering capacity. Position should allow appropriate care and suit the patient’s condition. A seated device may fit a stairwell while leaving a weak or deteriorating patient unable to tolerate the move. Use rated equipment and trained staffing.'],
['Assign one leader and reassess after motion',
 'Give each person a grip, position, and task. One leader checks readiness and calls movements. Anyone can call stop if footing, balance, or patient condition changes. After a transfer, check airway and breathing, bleeding, equipment position, and relevant limb findings again. Movement can change the patient and can pull equipment out of position.']
],
case: ['The stair chair fits the hallway, but the patient nearly faints when seated. The scene is safe.',
 ['Identify the constraint', 'The device fits the route but the patient may not tolerate its position. Reassess perfusion and position tolerance before entering the stairs.'],
 ['Revise the move', 'Plan a clinically suitable position, rated equipment, and enough help. Assign who can monitor and intervene during the move.'],
 ['Recheck after the transfer', 'Compare alertness, breathing, perfusion, and equipment with the findings before motion.']]
},
9: {
question: 'How do you coordinate a crew so urgent tasks actually get done?',
steps: [
['Give the team one initial priority',
 'Say what the immediate threat is and what you need done. “Breaths are shallow. I’m managing the airway. Leah, bring the bag-mask. Moshe, request additional help.” Named owners make parallel work possible. Without names, each person can assume someone else is doing the job, or both can do the same task while another one waits.'],
['Close the loop with a result',
 'The receiver repeats a critical instruction and the sender corrects it if needed. The receiver then reports completion or a blocker. “I’ll call” acknowledges the request. “Dispatch confirmed another unit” reports the result. This distinction matters for medication checks, AED setup, transport calls, and other tasks where silence is ambiguous.'],
['Make it easy to change the plan',
 'If a teammate detects a new threat, call it out in concrete terms. “He is less responsive and the chest is barely moving” is actionable. The leader repeats the new priority, assigns a response, and checks that it happened. During transitions, summarize what has been done, what remains unresolved, and who is watching it.'],
['Handoff findings, trends, care, and response',
 'Give the main problem, onset or mechanism, high-priority findings, care provided, and response. “After assisted ventilation the chest rises with each breath, but mentation remains below baseline” is more useful than “stable on oxygen.” State uncertainty plainly and distinguish what you observed from what a witness told you.']
],
case: ['One EMT is preparing the cot. Another notices that an alert patient has become drowsy with weak chest rise. No one has confirmed that more help is coming.',
 ['Change the team priority', 'Call out the breathing change, then assign immediate reassessment and support. Cot setup can continue only if it does not compete for the required hands.'],
 ['Confirm the resource request', 'Name someone to call and report a response. If the call fails, a completion check will expose it while it can still be corrected.'],
 ['Hand off the response', 'Report when breathing worsened, what support was provided, and what changed afterward.']]
},
10: {
question: 'How do you separate the danger that needs action now from the information you need next?',
steps: [
['Scene size-up changes the plan before you touch the patient',
 'Look for traffic, fire, violence, electrical hazards, substances, and changing conditions. Identify the number of patients, the mechanism or nature of illness, and resources you need. Mechanism predicts where to look but does not establish an injury. A safe approach may require help or staging. Keep reassessing scene safety as people and conditions change.'],
['Primary assessment is a search for immediate threats',
 'Form a general impression and assess responsiveness, airway, breathing, and circulation. Control life-threatening bleeding promptly when present, following the assessment sequence you are trained to use. Assess breathing for quality and chest rise, and circulation for major bleeding, pulse, and perfusion. Treat critical threats as you identify them. A complete history and full vital set can follow or be delegated without delaying necessary care.'],
['OPQRST turns one symptom into a usable history',
 'Onset: what were you doing and was it sudden? Provocation and palliation: what changes it? Quality: what does it feel like in your own words? Region and radiation: where is it and where does it spread? Severity: how bad is it or what can you no longer do? Time: when did it start, how long did it last, and how has it changed? “Pressure started climbing stairs twenty minutes ago, spread to the jaw, and stayed after resting” is much more useful than “chest pain, seven out of ten.”'],
['SAMPLE supplies the clinical context',
 'Signs and symptoms are what you observe and what the patient reports. Ask about allergies and reactions, medications actually taken, pertinent past history, last oral intake, and events leading up. A blood thinner matters after head trauma. Insulin and a missed meal matter with altered mental status. Prioritize the history that may change what you do now, and distinguish patient history from what a bystander thinks happened.'],
['BE FAST recognizes a pattern and establishes timing',
 'Balance and Eyes cover sudden coordination or vision changes. Face, Arm, and Speech look for facial asymmetry, arm drift or weakness, and change in speech. Time means prompt action and establishing last known well. Someone found with symptoms at 06:00 who was seen at baseline at 22:00 has a last-known-well time of 22:00, not 06:00. Record both times and the source. Apply your service’s stroke screening, glucose, notification, and transport processes.'],
['Secondary assessment and reassessment answer different questions',
 'The secondary exam looks for other findings using a focused or broader approach based on the patient and mechanism. Reassessment asks what changed since the last check or intervention. Repeat the primary assessment when something changes, reassess any intervention, and compare vital trends. If a previously talking patient stops responding during SAMPLE, stop the interview and go back to the primary assessment.']
],
case: ['A patient woke at 06:00 with slurred speech and right arm weakness. His wife last saw him at his usual baseline at 22:00. During your interview he becomes less responsive.',
 ['Order the tasks', 'Reassess airway, breathing, and circulation immediately. A teammate can obtain the witness history and notify the next team while you reassess.'],
 ['Preserve the timeline', 'Report 22:00 last known well and 06:00 discovery. Keep the times distinct even if a witness calls 06:00 the “start.”'],
 ['Reassess and communicate', 'Recheck deficits, record findings such as glucose when indicated under protocol, and communicate what changed as you follow the stroke pathway.']]
},
11: {
question: 'Is the airway open, is enough air moving, and does enough oxygen reach the blood?',
steps: [
['Check patency before choosing a device',
 'The airway runs from the mouth and nose all the way to the lungs. Snoring in an unresponsive patient suggests soft tissue narrowing, gurgling suggests fluid, and stridor suggests upper airway narrowing. No sound with no air movement can be more dangerous than a noisy airway. Use appropriate positioning and suction or obstruction care as trained. If you use an adjunct, match it to patient size, level of responsiveness, and contraindications. An adjunct can help maintain patency but will not create breaths.'],
['Estimate breathing quality from the whole patient',
 'Count rate and note depth, visible chest rise, symmetry, effort, sounds, and ability to speak. Rate times depth is total ventilation, but only the part reaching the alveoli exchanges gases. Twelve breaths with good rise can move more useful air than many shallow breaths. A falling rate is reassuring only if airflow and patient function improve. Declining alertness with small breaths is a reason to reassess immediately.'],
['Choose support based on oxygenation and ventilation separately',
 'A nasal cannula or nonrebreather supplies oxygen to a patient who is breathing. A nonrebreather cannot move gas into the lungs for a patient whose breaths are ineffective. A bag-mask device adds positive-pressure breaths to move gas. Treat an inadequate breathing pattern even if saturation is still high, and use supplemental oxygen according to the clinical situation and protocol. SpO₂ is influenced by factors such as poor circulation and cannot tell you carbon dioxide clearance.'],
['Troubleshoot a breath with no chest rise',
 'Work from outside in. If air leaks at the edge, correct the mask fit and seal. If the airway is not positioned properly, reopen it using the maneuver appropriate to the situation. Consider an obstruction or the need for suction, and use trained two-person technique when available. Watch for visible rise with each breath. Repeatedly squeezing harder before fixing a leak or obstruction can inflate the stomach and worsen the situation.'],
['Use the pulse and breathing together',
 'In adult respiratory arrest with a definite pulse, trained responders provide ventilations. The AHA adult BLS guidance describes one breath every six seconds with visible chest rise. Follow the arrest algorithm if breathing is absent or abnormal and a definite pulse cannot be found within ten seconds. Use the age-appropriate algorithm for pediatric patients. Reassess pulse, rise, and response as you provide support.']
],
case: ['An adult on a nonrebreather has a definite pulse, SpO₂ of 97%, and six barely visible breaths per minute. Alertness is declining.',
 ['Identify the failing function', 'The patient has inadequate ventilation. The nonrebreather can supply oxygen but depends on the patient drawing an effective breath.'],
 ['Support and verify', 'Open the airway and assist ventilation per protocol. If the first breath has no rise and air escapes at the cheek, recheck position and seal.'],
 ['Check for a change in priority', 'Assess breathing and pulse again. Loss of a definite pulse in an unresponsive patient with absent or abnormal breathing changes the task to CPR and AED.']]
},
12: {
question: 'How do you decide if a medication is appropriate and show whether it helped?',
steps: [
['Start with a physiologic problem and an indication',
 'Identify what the drug is intended to change. A bronchodilator can reduce airway smooth muscle constriction, so breath sounds and airflow are relevant to its response. It does not solve a blocked upper airway or create effective breaths during respiratory arrest. Confirm the patient meets the actual protocol indications. Check the history, presentation, allergies, contraindications, and scope before using or assisting with a drug.'],
['Verify product, dose, concentration, route, and time',
 'Dose is an amount of drug. Concentration tells you how much drug is in a unit of volume. Route determines how it enters the body and affects how fast it may work. In a hypothetical arithmetic example, a 3 mg order from a labeled 2 mg/mL formulation corresponds to 1.5 mL. Divide the amount ordered by the concentration and check that units cancel. Use the protocol and label for real medications and devices.'],
['Use a baseline that matches the intended effect',
 'Before giving a drug, identify which finding you expect to change and what adverse changes you should watch for. Record when it was used, drug, dose, route, and response. Improvement can support your working impression but does not prove the cause. If there is no improvement, recheck the primary assessment and consider whether the original working impression still fits.'],
['Keep essential support going while the medication takes effect',
 'In suspected opioid-associated respiratory arrest with circulation, ventilation moves gas immediately. Naloxone can reverse opioid effects, but its action is not instant and further deterioration can occur. Follow BLS and medical direction for ventilation, naloxone, and reassessment. In cardiac arrest, CPR and AED use take priority and should not be delayed to give a medication.']
],
case: ['An unresponsive adult has a definite pulse and very shallow breaths. Opioid exposure is suspected. A teammate has administered naloxone, but breathing has not improved.',
 ['Name the threat', 'The immediate threat is ineffective air movement. Continue effective assisted ventilation and confirm visible chest rise.'],
 ['Measure effect', 'Reassess spontaneous breathing quality and responsiveness rather than assuming the medication has worked because it was given.'],
 ['Document and prepare', 'Report the exact administration time and findings before and after. Continue monitoring for deterioration during transport.']]
},
13: {
question: 'How can a patient be in shock before their blood pressure drops?',
steps: [
['Perfusion is blood flow to tissue',
 'Cells depend on oxygen delivery and waste removal. Blood pressure reflects the combination of flow and vascular resistance. It is useful, but a normal pressure does not establish that tissues are receiving adequate flow. Check alertness, skin, pulse quality, vital trends, and likely causes. A single absent or weak radial pulse does not give you a reliable systolic pressure.'],
['Follow the compensation cascade',
 'With blood loss, less blood returns to the heart, reducing filling and the amount ejected with each beat. The body may speed the heart and constrict peripheral vessels. This can hold pressure up for a time while skin turns pale and cool and the pulse weakens. When compensation no longer sustains flow, hypotension or worsening mentation may follow. Do not require hypotension before taking the pattern seriously.'],
['Compare the main failure mechanisms',
 'Hypovolemic shock means the circulating volume is too low, as with hemorrhage. Cardiogenic shock means the pump cannot provide enough output. Distributive shock involves abnormal vessel tone and distribution of flow, as can happen in severe infection or anaphylaxis. Obstructive shock means a physical problem limits filling or forward flow. They can overlap. Use mechanism, signs, and changes over time to guide your impression.'],
['Treat what can be corrected and watch the trend',
 'Control life-threatening external hemorrhage promptly, assess airway and breathing, prevent heat loss, and arrange transport according to protocol and findings. Different causes can call for different interventions, so compare the patient’s response to the mechanism you suspect. Check whether bleeding control held, whether the pulse and mental status are changing, and whether care priorities need to shift.']
],
case: ['A bleeding patient’s BP is 112/76 initially and 106/74 on repeat. Pulse climbs from 102 to 126 and the patient becomes cool and restless.',
 ['Reconcile the readings', 'Compensation can preserve pressure while stroke volume falls. The change in pulse, skin, and behavior suggests worsening perfusion.'],
 ['Interrupt the loss', 'Control external bleeding promptly using the protocol-appropriate method and ensure enough help for reassessment and transport.'],
 ['Reassess effect', 'Check the bleeding site and repeat the primary assessment. An unchanged oxygen saturation would not establish that perfusion has improved.']]
},
14: {
question: 'How do you keep some circulation going and deliver an early shock when indicated?',
steps: [
['Recognize arrest using responsiveness, breathing, and pulse',
 'Agonal gasps are abnormal breaths. In the health care provider BLS sequence, check breathing and pulse together briefly. An unresponsive adult who is not breathing normally and has no definite pulse within ten seconds needs CPR. A patient with a definite pulse and ineffective breathing instead needs ventilatory support. A pulse check should not become a long pause while the patient receives no care.'],
['Build and preserve flow with compressions',
 'Compressions generate limited blood flow to the brain and heart. Full recoil helps blood return to the chest between compressions. Each pause lets the pressure that supports circulation fall. For adults, deliver compressions at 100–120/min, at least 2 inches deep while avoiding excessive depth beyond 2.4 inches, and allow recoil. Use age-specific guidance for children and infants.'],
['Use an AED early without unnecessary interruptions',
 'The AED analyzes the electrical rhythm and advises a shock for rhythms it can treat. Prepare pads while compressions continue where feasible. Clear the patient during analysis and shock, then promptly resume CPR as the AED and algorithm direct. “No shock advised” can mean a nonshockable arrest rhythm. It is not evidence on its own that circulation has returned.'],
['Coordinate breaths and choking care with the algorithm',
 'Give breaths that produce visible rise and avoid excessive ventilation. Without an advanced airway, trained providers use the appropriate compression-to-ventilation ratio for the patient and team. In severe responsive adult choking, the 2025 AHA guidance alternates five back blows and five abdominal thrusts, with chest thrusts when indicated. If the patient becomes unresponsive, follow the BLS choking algorithm. Avoid blind finger sweeps.']
],
case: ['An adult collapses and is unresponsive with occasional gasps. There is no definite pulse within the brief check. The first AED analysis says no shock.',
 ['Recognize the correct branch', 'Gasps do not count as normal breathing. With no definite pulse, start CPR and get the AED onto the patient promptly.'],
 ['Interpret the AED correctly', 'No shock can mean the rhythm is nonshockable while the patient remains in arrest. Resume CPR promptly as instructed.'],
 ['Improve the next cycle', 'Use a clear role assignment, good recoil, minimal pauses, and breaths with visible rise. Reassess according to the algorithm.']]
},
15: {
question: 'How do you reason from a symptom to likely threats without locking on to the first explanation?',
steps: [
['Organize around what stopped working',
 'Start with function. In confusion, ask whether breathing and perfusion are adequate, whether the change is global or focal, and what was normal before. Low glucose, poor perfusion, inadequate ventilation, intoxication, infection, and neurologic problems can all alter mental status. None can be excluded solely by a reassuring first impression. Check immediate threats before narrowing the list.'],
['Use discriminating facts',
 'Useful clues separate possibilities. Sudden focal weakness and language change increase concern for stroke. A missed meal after diabetes medication raises concern for low glucose. A high-risk exposure and weak breaths support a different possibility. A single clue may be misleading. A measured low glucose can explain symptoms or coexist with another problem, so reassess focal findings after protocol-based care and maintain a clear timeline.'],
['Recognize patterns in chest pain, breathing, and allergic illness',
 'For chest symptoms, characterize onset and associated signs such as sweating, shortness of breath, or syncope. Care urgency comes from the whole picture. After an exposure, combine findings across systems. Skin findings, airway symptoms, and circulation changes together carry more weight than a rash alone, and absence of a rash does not exclude a serious allergic reaction. Use clinical findings and local protocols to guide care and transport.'],
['Reassess to challenge the first label',
 'Ask what finding would make the initial impression wrong. A patient who seems anxious but can no longer speak in phrases and becomes confused requires immediate reassessment of breathing and circulation. Document both the initial evaluation and what changed. Treat changes in function before trying to defend the first explanation.']
],
case: ['A patient with diabetes develops slurred speech and one arm drifts. Glucose is low. The family says this looks different from previous episodes.',
 ['Keep both possibilities available', 'Hypoglycemia may mimic stroke. New focal findings and a different baseline remain meaningful.'],
 ['Handle the reversible problem and preserve timing', 'Address low glucose according to protocol and clinical ability to protect the airway. Establish last known well and continue the time-sensitive assessment.'],
 ['Compare again', 'Check what improved and whether focal deficits persist. Hand off both the glucose trend and the neurologic trend.']]
},
16: {
question: 'When does labored breathing become inadequate breathing?',
steps: [
['Start by deciding whether air is moving effectively',
 'Respiratory distress is increased breathing effort. Respiratory failure involves inability to maintain adequate gas exchange. Watch chest rise, voice, mental status, skin, and air entry in addition to rate and saturation. Someone may be working extremely hard and still moving enough air at first. Falling chest rise, weaker voice, and poorer alertness suggest the effort is no longer producing adequate ventilation.'],
['Use sounds to locate a problem and the history to refine it',
 'Stridor often points toward the upper airway. Wheezing suggests airflow through narrowed smaller airways. Crackles are heard with several processes, including fluid in the lungs. A sudden one-sided change after trauma is different from slowly developing bilateral symptoms. Sounds need airflow to be audible, so a chest can get quieter when obstruction or fatigue worsens.'],
['Compare similar-looking complaints',
 'Wheeze with a history of asthma can suggest bronchospasm. Breathlessness lying flat with bilateral crackles can suggest pulmonary edema. Stridor and swelling soon after exposure raise concern for an upper airway threat and possible systemic allergic reaction. These are working patterns, and mixed findings are common. Avoid treating a single sound as proof of a diagnosis.'],
['Match help to the current failure and reassess',
 'A patient who is ventilating adequately may need oxygen or diagnosis-specific support under protocol. A patient who is no longer moving enough air needs ventilatory support. Evaluate response through rise, air entry, alertness, work, and trend. If the rate falls alongside better rise and clearer speech, that can be improvement. If the same drop comes with poor rise and drowsiness, change the plan immediately.']
],
case: ['A wheezing patient is breathing 32/min and speaking in phrases. Five minutes later the rate falls to 18/min and the wheeze is faint. Chest rise is smaller and the patient responds only briefly.',
 ['Identify the misleading improvement', 'The rate looks closer to normal and the room sounds quieter. Weaker rise and deteriorating alertness show why those signs alone are misleading.'],
 ['Prioritize ventilation', 'Repeat the primary assessment and support ventilation if inadequate. Do not wait for the saturation display to change before addressing poor air movement.'],
 ['Reassess and hand off', 'Measure response to support, watch for further deterioration, and give the receiving team the sequence of changes.']]
}
};

const CHAPTER_ADDITIONS = {
  5: [
    ['Use body positions and planes in real reports',
      'Supine is face up, prone is face down, and lateral means on the side. Use left or right for a lateral position. Fowler or semi-Fowler describes an upright or partly elevated torso. A sagittal plane divides left and right, a coronal plane divides front and back, and a transverse plane divides top and bottom. For example, a patient found prone and later placed supine for assessment changed position. Record which findings were observed before and after movement.'],
    ['Decode similar words and avoid ambiguous shorthand',
      'Dysphagia means difficulty swallowing. Dysphasia refers to impaired language, while dysarthria describes difficulty articulating speech. Ask whether the patient has trouble finding words, producing clear sounds, or swallowing. Record the actual finding because the medical terms can sound alike over a radio. Likewise, name the drug, dose, and units in a handoff when an abbreviation could be misread. Write 0.5 mg rather than .5 mg and avoid a trailing zero such as 5.0 mg.']
  ],
  6: [
    ['Blood is a transport system and a repair system',
      'Plasma is the liquid that carries cells, proteins, and dissolved substances. Red cells carry oxygen using hemoglobin. White cells participate in immune defense. Platelets form an initial plug at an injured vessel, and clotting factors help create a fibrin mesh that stabilizes it. An antiplatelet drug and an anticoagulant act on different parts of that process. Both can change bleeding risk. Physical blood loss reduces circulating volume regardless of how much oxygen remains bound to the hemoglobin.'],
    ['The heart needs its own blood supply and an electrical sequence',
      'Coronary arteries supply heart muscle. A blocked coronary artery can deprive part of the pump of oxygen. Normally, an impulse starts in the sinoatrial node, spreads through the atria, pauses at the atrioventricular node, and travels through the ventricular conduction system so the ventricles contract together. Electrical activation cannot establish that an effective contraction occurred. During resuscitation and assessment, mechanical circulation is a separate question.'],
    ['Body cavities explain where illness or injury can hide',
      'The skull encloses the brain, and the spinal canal encloses the spinal cord. The thorax contains the lungs, heart, and major vessels. The diaphragm separates it from the abdomen. The liver lies mainly in the right upper abdomen, and the spleen lies in the left upper abdomen. The kidneys are farther back, behind the peritoneum. Abdominal or pelvic injury can produce internal bleeding without an obvious external wound. Use landmarks to describe findings, but avoid naming an injured organ solely from pain location.'],
    ['Skin, temperature, and immune defenses are connected',
      'Skin is a barrier and helps regulate heat loss. Sweat cools by evaporation. Skin blood vessels widen to release heat and constrict to preserve it. Those same vessels can constrict during shock, making skin cool or pale even when the surrounding environment is warm. Lymphatics return excess tissue fluid and help immune surveillance. An inflammatory response can help fight infection, while a systemic allergic reaction can alter vessel tone and narrow the airway.']
  ],
  7: [
    ['Pregnancy changes circulation and position tolerance',
      'Pregnancy increases blood volume and oxygen demand. Later in pregnancy, lying flat may allow the uterus to compress large veins and reduce blood return to the heart. Dizziness or poor perfusion in that position is a clue to reassess and adjust positioning under protocol. Blood loss, trauma, and respiratory difficulty still require a full primary assessment. Ask about gestational age, pain, bleeding, and other relevant pregnancy symptoms without delaying urgent care.'],
    ['Delirium and dementia answer different time questions',
      'Dementia usually involves a longer-term decline. Delirium is an acute or fluctuating change in attention and awareness. They can coexist. An older adult who was following a conversation this morning and is now inattentive needs evaluation for an acute cause. Ask about medication changes, falls, intake, illness, and baseline function while assessing airway, breathing, perfusion, and other reversible problems.']
  ],
  8: [
    ['Match the device to the actual transfer',
      'A wheeled cot supports a patient during transport, a scoop can reduce the amount of rolling needed to lift a patient, and a transfer board or sheet can reduce vertical lifting between suitable surfaces. A stair chair requires the patient to tolerate the position and the crew to maintain control throughout the route. A long backboard may be a movement or extrication tool under local guidance. Using one for transfer and deciding whether spinal motion restriction is indicated are separate decisions.'],
    ['Handle height, braking, and straps change the load',
      'Before a bed-to-cot transfer, stabilize both surfaces as trained and position them to minimize the gap and height difference. Before rolling or loading, check the patient restraints, attached equipment, obstructions, and cot locks or loading system. Stop if a belt or line catches or a rescuer loses footing. A small shift on a ramp can move the center of mass toward the edge of the base, especially with a high cot or uneven load.']
  ],
  9: [
    ['Prioritize when resources are split',
      'For two patients and one crew, start by calling for appropriate resources and communicating the number of patients and immediate threats. Do a rapid assessment or triage according to your incident procedure. Assign who is monitoring each patient and what would cause a change of priority. Give arriving units a clear patient assignment and a short report so the original crew does not have to start every assessment over.'],
    ['Transfer responsibility during the handoff',
      'Say which task is still outstanding and who now owns it. For example, “The dressing controlled the bleeding on the last check. You’re monitoring it during transfer. Tell me if it soaks through.” In a debrief, reconstruct what happened, identify one decision or handoff that helped, and agree on a specific change for the next call. Focus on the process that allowed an error rather than a label for the person.']
  ],
  10: [
    ['Make mental status a measurable finding',
      'AVPU is a fast description of responsiveness: alert, responds to voice, responds to a painful stimulus, or unresponsive. Alert does not necessarily mean oriented or at baseline. Record what the patient did, such as “opened eyes to voice and followed a one-step command,” and whether that behavior changed. When a patient cannot answer, use witnesses and other available sources without delaying care.'],
    ['Build a vital-sign set you can compare',
      'Record pulse rate, quality, and rhythm; breathing rate, depth, and effort; blood pressure; skin; and mental status. Add measurements such as SpO₂, glucose, temperature, or pupils as clinically relevant. Choose the correct cuff size and document times and interventions. A normal-looking value obtained during deterioration can be misleading. A weak or absent radial pulse does not reliably tell you a specific systolic pressure.'],
    ['Choose the scope of the secondary exam and know when to move',
      'A stable, alert patient with an isolated complaint may need a focused exam guided by the history. An altered or high-risk trauma patient may need a broader rapid exam because they cannot reliably localize symptoms. Inspect and palpate as appropriate for tenderness, deformity, wounds, asymmetry, and other findings. Compare relevant circulation, sensation, and movement on both sides. Let threats and transport priority determine which parts you complete on scene and which can safely happen en route.']
  ],
  11: [
    ['OPA, NPA, and suction solve different problems',
      'An OPA helps keep the tongue from obstructing the airway in a deeply unresponsive patient without a gag reflex. Stimulation can trigger gagging or vomiting when protective reflexes are present. A poorly sized adjunct can worsen obstruction or injure tissue. An NPA follows the nasal passage and may be tolerated in some patients who cannot tolerate an OPA. Check contraindications such as suspected basilar skull fracture or severe midface trauma according to protocol. Suction removes accessible liquid or debris. Use approved technique and reassess air movement afterward.'],
    ['Understand the oxygen cylinder and regulator',
      'A cylinder holds gas under pressure. The gauge shows pressure remaining, the regulator reduces cylinder pressure, and the flowmeter sets delivery in liters per minute. Different cylinder sizes hold different amounts at the same pressure. An estimate is (gauge pressure minus required reserve) times the cylinder factor, divided by the selected flow. Confirm cylinder type, factor, and reserve locally. At the same pressure, a larger cylinder lasts longer, and increasing flow uses it faster. Secure the cylinder and check the supply before a move.'],
    ['Choose the device by the patient’s ability to breathe',
      'A nasal cannula is commonly used when a spontaneously breathing patient needs supplemental oxygen and can tolerate the device. A nonrebreather can deliver a higher oxygen concentration when its reservoir and seal are working and the patient has adequate spontaneous breaths. If the reservoir collapses substantially on inspiration, check the supply, flow, fit, and setup. A BVM is for assisted ventilation. A patient moving too little air needs ventilation support even when a monitor reports an acceptable saturation.']
  ],
  12: [
    ['Understand medication families by the problem they address',
      'Aspirin inhibits platelet aggregation and may be used for selected suspected acute coronary syndrome patients under protocol. Nitroglycerin changes vascular tone and can lower pressure, so the medication history and current blood pressure matter. Inhaled albuterol can relieve lower airway bronchospasm. Epinephrine can support vessel tone and relieve bronchospasm during anaphylaxis. Which medications an EMT can give or assist with depends on the service. The indications and contraindications are different even when two patients share the same chief complaint.'],
    ['Think about route and protective reflexes',
      'A tablet intended for oral use depends on a safe swallow or the protocol-specific technique. A patient who cannot protect the airway can aspirate. An inhaled medication must reach the airway and can be hard to deliver when the patient is barely moving air. An intramuscular or intranasal product must be prepared and given as labeled and authorized. A suitable drug delivered by an unsuitable route can fail or cause harm.']
  ],
  13: [
    ['Compare shock patterns before assuming the cause',
      'Blood loss often produces a narrowing pulse pressure and cool skin as compensation increases, but the pattern is variable. A cardiac pump problem can present with poor perfusion along with breathlessness and crackles. Early distributive shock can present with warm skin due to vasodilation. In a trauma patient with worsening breathing and shock, consider an obstructive cause among the possibilities. Neither skin temperature nor a single pressure reading should decide the diagnosis by itself.'],
    ['Reassess bleeding control during the move',
      'Look for pools of blood, bleeding under clothing, and injuries that can conceal loss, including abdomen, pelvis, and long bones. Control external bleeding using direct pressure or a protocol-approved tourniquet or packing technique when indicated. Check for continuing bleeding after a transfer, document interventions and their times, and communicate the vital trend. Effective external control does not exclude an additional internal source.']
  ],
  14: [
    ['Study pediatric CPR as a separate algorithm',
      'The AHA pediatric BLS guidance applies to infants and children before puberty, excluding newborn resuscitation. Use 100–120 compressions per minute and at least one third of the chest’s front-to-back depth, about 1.5 inches in infants and 2 inches in children. Without an advanced airway, the ratio is 30:2 for a single rescuer and 15:2 for two rescuers. The 2025 infant compression techniques are the one-hand heel or two-thumb encircling approach. Follow the pediatric algorithm for pulse and breathing decisions, including the low heart rate branch with poor perfusion despite effective oxygenation and ventilation.'],
    ['Distinguish infant choking, child choking, and recovery after arrest',
      'For severe choking while responsive, the 2025 AHA pediatric guidance uses five back blows alternating with five chest thrusts for infants, and five back blows alternating with five abdominal thrusts for children. When unresponsive, follow the BLS airway obstruction algorithm and remove an object only when seen. After return of circulation, repeat the primary assessment, support inadequate breathing, and monitor closely for re-arrest. A pulse returning is a change in the care plan and requires ongoing assessment.']
  ],
  15: [
    ['Separate an ongoing seizure from the recovery phase',
      'During a convulsion, protect the patient from nearby hazards and avoid restraining them or putting anything in their mouth. Note the time and what the movements look like. Afterward, assess airway, ventilation, perfusion, injuries, and possible causes under protocol, including glucose when appropriate. A patient may be confused during recovery, but persistent or worsening impairment needs reassessment. Ask witnesses about continuous or repeated activity and whether the patient returned to baseline between episodes.'],
    ['Compare poisoning, infection, and glucose problems using the scene and timeline',
      'For suspected poisoning, protect the crew and learn what substance, route, time, and amount may be involved. Do not assume everyone at a scene has the same exposure. In possible infection, changes in breathing, mentation, or perfusion can matter more than fever alone. In a patient with suspected glucose disturbance, assess ability to protect the airway before considering an oral intervention and measure glucose when indicated. Treat immediate threats first and pass on the evidence supporting each possibility.']
  ],
  16: [
    ['Compare obstructive, fluid-related, and metabolic breathing',
      'Bronchospasm increases resistance, often especially on expiration, so air can become trapped and expiration may be prolonged. Fluid in or around the lung air spaces can make oxygen transfer harder and may be associated with crackles. Deep rapid breathing can also be a response to metabolic acidosis, such as in diabetic ketoacidosis, even if lungs sound relatively clear. Rate and sound have to be interpreted alongside effort, depth, history, and alertness.'],
    ['Know what noninvasive pressure support requires',
      'CPAP applies continuous positive pressure in a spontaneously breathing patient. It can help keep airspaces open and improve oxygenation in selected patients, depending on local scope and protocol. It relies on a patient who can tolerate the mask, protect their airway, and continue breathing. Vomiting, declining responsiveness, inadequate ventilation, or poor hemodynamic tolerance prompt reassessment and a different plan under protocol. Compare work, rise, alertness, pressure, and saturation before and after support.']
  ]
};

for (const [chapterNumber, sections] of Object.entries(CHAPTER_ADDITIONS)) {
  CHAPTER_GUIDES[chapterNumber].steps.push(...sections);
}
