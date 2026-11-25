/* Original body-systems recall and application practice. */
const ANATOMY_Q=[
[1,'Blood flow','Which route carries blood from the right ventricle to the lungs?',['Pulmonary arteries','Pulmonary veins','Aorta','Venae cavae'],0,'Pulmonary arteries carry blood away from the right ventricle to the lung capillaries.'],
[1,'Blood flow','Which chamber sends oxygenated blood to the body?',['Right atrium','Right ventricle','Left atrium','Left ventricle'],3,'The left ventricle pumps through the aorta into systemic arteries.'],
[1,'Blood flow','Pulmonary veins return blood to which chamber?',['Right atrium','Left atrium','Right ventricle','Left ventricle'],1,'Oxygenated blood returns from the lungs to the left atrium.'],
[1,'Respiratory anatomy','Where does most oxygen and carbon dioxide exchange occur?',['Trachea','Alveoli and pulmonary capillaries','Larynx','Pleural space'],1,'The thin alveolar-capillary membrane is the main gas exchange site.'],
[1,'Respiratory mechanics','Which muscle is the main driver of normal inhalation?',['Biceps','Diaphragm','Abdominal wall','Cardiac muscle'],1,'Diaphragm contraction expands the thorax and draws air inward.'],
[1,'Anatomy terms','Which structure belongs to the axial skeleton?',['Femur','Humerus','Rib','Tibia'],2,'The axial skeleton includes skull, vertebral column, ribs, and sternum.'],
[1,'Nervous system','Which brain region is most associated with balance and coordination?',['Cerebellum','Liver','Pancreas','Left ventricle'],0,'The cerebellum helps coordinate movement and balance.'],
[1,'Body systems','What is the kidney’s main broad role?',['Exchange oxygen in alveoli','Filter blood and regulate fluid/electrolytes','Pump blood to lungs','Produce bile'],1,'Kidneys filter blood, regulate water and electrolytes, and make urine.'],
[2,'Blood and perfusion','A patient has severe bleeding, cool skin, and SpO₂ 98%. What does the reading fail to establish?',['Whether the remaining hemoglobin is saturated','Total blood volume and tissue perfusion','Whether the device has a signal','Whether oxygen is bound to hemoglobin'],1,'SpO₂ does not measure the amount of blood left or how effectively it reaches tissues.'],
[2,'Ventilation','A patient takes rapid but extremely shallow breaths. Which concept explains the danger?',['Breathing rate alone does not show tidal volume','Every fast breath moves adequate air','Alveoli are outside the lungs','Pulse rate determines chest rise'],0,'Ventilation depends on depth and useful air movement, not just breath count.'],
[2,'Airway anatomy','An unresponsive patient snores. Which structure is most likely contributing?',['Tongue or soft tissue in the pharynx','Kidney','Femur','Gallbladder'],0,'Loss of tone can let the tongue obstruct the upper airway.'],
[2,'Heart anatomy','Which vessel carries blood from the left ventricle to the systemic circulation?',['Aorta','Pulmonary vein','Vena cava','Pulmonary artery'],0,'The aorta is the major outflow from the left ventricle.'],
[2,'Circulatory anatomy','Which vessels are the primary exchange sites for oxygen and nutrients with tissue?',['Aorta','Large veins','Capillaries','Coronary arteries alone'],2,'Capillary walls permit exchange between blood and surrounding tissues.'],
[2,'Endocrine physiology','A patient with diabetes is confused. Which organ makes insulin?',['Liver','Pancreas','Spleen','Kidney'],1,'The endocrine pancreas releases insulin, which helps regulate blood glucose.'],
[2,'Skin and shock','A patient has cool clammy skin after trauma. Which interpretation is best?',['One clue to altered perfusion, assessed with other findings','Proof of a specific shock subtype','Proof of adequate circulating volume','A reason to skip vital signs'],0,'Skin signs contribute to the perfusion picture but are not a diagnosis alone.'],
[2,'Pelvic injury','Why can a pelvis or femur injury be dangerous despite little external bleeding?',['It may hide substantial internal blood loss','Bone does not have blood vessels','Pulse oximetry always falls immediately','Only the skin can bleed'],0,'Large structures and surrounding tissues can conceal significant hemorrhage.'],
[3,'Systems integration','A drowsy patient breathes five shallow times per minute, has a pulse, and SpO₂ 96%. What physiology drives the first intervention?',['Ventilation may be inadequate despite normal measured saturation','Oxygen saturation proves carbon dioxide clearance','The heart has stopped','The airway is always patent'],0,'Evaluate and support actual air movement. SpO₂ can lag and cannot measure carbon dioxide clearance.'],
[3,'Systems integration','A patient after a fall has hip pain, a rising pulse, cooling skin, and new confusion. What links the findings?',['Possible hidden blood loss and worsening tissue perfusion','An isolated joint sprain with proven stability','A normal blood pressure excludes shock','Glucose always explains confusion'],0,'Pelvic or femur injury can bleed internally; circulatory compensation and brain perfusion changes may follow.'],
[3,'Respiratory physiology','A previously loud wheeze becomes faint as the patient grows drowsy. Why is this concerning?',['Air movement may be falling as fatigue develops','The bronchi must have fully opened','A lower sound always means recovery','The oximeter replaces assessment'],0,'Very little airflow can produce less audible wheeze while ventilation worsens.'],
[3,'Perfusion','An alert trauma patient has normal BP but rapid weak pulse and cool skin. Which statement is most defensible?',['Compensation can preserve BP while perfusion worsens','Normal BP rules out shock','A radial pulse proves all cells receive oxygen','No reassessment is needed'],0,'Pressure is only one piece; trend pulse, skin, mental status, and breathing.']
];
for(const [level,topic,prompt,options,right,why] of ANATOMY_Q)DATA.extraQuestions.push({n:6,level,topic,prompt,options,right,why});
DATA.cards.push(
[6,'Trace blood from body to lungs.','Venae cavae → right atrium → right ventricle → pulmonary arteries → lungs.'],
[6,'Trace blood from lungs to body.','Pulmonary veins → left atrium → left ventricle → aorta → systemic circulation.'],
[6,'What does the right ventricle do?','Pumps low-oxygen blood through pulmonary arteries to lungs.'],
[6,'What does the left ventricle do?','Pumps oxygenated blood through the aorta to the body.'],
[6,'What is the main gas exchange site?','Alveoli and surrounding pulmonary capillaries.'],
[6,'How does the diaphragm cause inhalation?','It contracts and expands the thorax, drawing air inward by negative pressure.'],
[6,'Name axial skeleton structures.','Skull, vertebral column, ribs, and sternum.'],
[6,'What do ligaments connect?','Bone to bone; tendons connect muscle to bone.'],
[6,'Why can a pelvic injury be high priority?','It can conceal significant bleeding and impair perfusion.'],
[6,'What does the cerebellum help control?','Movement coordination and balance.'],
[6,'What does the brainstem help regulate?','Breathing, arousal, and other vital functions.'],
[6,'What does the pancreas release for glucose control?','Insulin and glucagon.'],
[6,'What do kidneys regulate?','Fluid, electrolytes, and waste removal through urine.'],
[6,'Can SpO₂ tell you tidal volume?','No. It estimates oxygen saturation, not the amount of air moved.'],
[6,'What does capillary perfusion accomplish?','Delivers oxygen and nutrients to tissues and removes waste.'],
[6,'What does the liver make that matters for bleeding?','Many clotting proteins, among other functions.'],
[6,'Which blood cells carry oxygen?','Red blood cells carry oxygen bound to hemoglobin.'],
[6,'What does a rising pulse with cool skin after hemorrhage suggest?','Possible compensation for falling volume and inadequate perfusion.'],
[6,'What is homeostasis?','The body’s regulation of oxygen, carbon dioxide, glucose, temperature, fluid, and other internal conditions.'],
[6,'Why does normal BP not rule out shock?','Compensation can maintain pressure temporarily while tissue perfusion worsens.']
);
DATA.videos.push(
{title:'How Breathing Works',by:'NIH National Heart, Lung, and Blood Institute',id:'dXHkCDohf70',note:'Adult-friendly animation of air movement and oxygen/carbon dioxide exchange.',topic:'Anatomy',chapters:[6,11,16],year:2023},
{title:'How the Heart Works (Animation)',by:'Thomas Schwenke',id:'L7XLal4Cm1U',note:'Detailed four-chamber blood flow, valves, coronary arteries, and cardiac cycle.',topic:'Anatomy',chapters:[6,13],year:2024},
{title:'How Your Kidneys Work',by:'Nucleus Medical Media',id:'CShAIAD-ask',note:'In-depth adult medical animation of kidney structure and filtration.',topic:'Anatomy',chapters:[6],year:2024}
);
