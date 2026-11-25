const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let saved={};try{saved=JSON.parse(localStorage.getItem('ari-emt-progress')||'{}')}catch{}
const state={read:saved.read||[],known:saved.known||[],quizBest:saved.quizBest??null,scenarioBest:saved.scenarioBest||{},attempts:saved.attempts||[],sessions:saved.sessions||[],filter:'all',cardIndex:0,flipped:false,quiz:null,scenario:null,videoFilter:'all',videoQuery:''};
const persist=()=>{try{localStorage.setItem('ari-emt-progress',JSON.stringify({read:state.read,known:state.known,quizBest:state.quizBest,scenarioBest:state.scenarioBest,attempts:state.attempts,sessions:state.sessions}))}catch{}};
const chapter=n=>DATA.chapters.find(c=>c.n===+n), badge=n=>`<span class="tag">CHAPTER ${n}</span>`, head=(ey,title,desc='')=>`<div class="page-head"><div><span class="eyebrow">${esc(ey)}</span><h1>${esc(title)}</h1>${desc?`<p>${esc(desc)}</p>`:''}</div></div>`;
const allQuestions=[];DATA.extraQuestions.forEach((q,i)=>allQuestions.push({...q,id:'x'+i}));DATA.questions.forEach((q,i)=>allQuestions.push({n:q[0],level:2,topic:chapter(q[0])?.category||'Application',prompt:q[1],options:q[2],right:q[3],why:q[4],id:'o'+i}));for(const c of DATA.chapters){const a=c.practical?.challenge;if(a)allQuestions.push({n:c.n,level:3,topic:c.category,prompt:a.prompt,options:a.options,right:a.right,why:a.why,id:'p'+c.n})}DATA.scenarios.forEach((s,i)=>s.steps.forEach((step,j)=>allQuestions.push({n:s.chapter,level:3,topic:step.topic||'Clinical judgment',prompt:s.scene+' '+step.ask,options:step.options,right:step.right,why:step.why,id:'case'+i+'-'+j})))
allQuestions.push(...EMT_NEW_QUESTIONS);
const stats=rows=>({correct:rows.filter(r=>r.correct).length,total:rows.length,pct:rows.length?Math.round(100*rows.filter(r=>r.correct).length/rows.length):null});
const pctText=s=>s.pct===null?'—':s.pct+'%';
const topicGroups=()=>{let map=new Map();for(const a of state.attempts){const key=a.n+'|'+a.topic;let g=map.get(key)||{n:a.n,topic:a.topic,rows:[]};g.rows.push(a);map.set(key,g)}return [...map.values()].map(g=>({...g,...stats(g.rows),recent:g.rows.slice(-5).filter(x=>x.correct).length})).sort((a,b)=>(a.pct-b.pct)||b.total-a.total)};
const weakGroups=()=>topicGroups().filter(g=>g.pct<80||g.rows.slice(-1)[0]?.correct===false);
const cardId=c=>c[0]+'|'+c[1],deck=()=>DATA.cards.filter(c=>state.filter==='all'||c[0]===+state.filter);
const termPattern=new RegExp('(^|[^\\w])('+Object.keys(DATA.glossary).sort((a,b)=>b.length-a.length).map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')(?![\\w])','gi');
function termify(s){let out='',last=0;for(const m of s.matchAll(termPattern)){let start=m.index+m[1].length,key=Object.keys(DATA.glossary).find(k=>k.toLowerCase()===m[2].toLowerCase());out+=esc(s.slice(last,start))+`<button class="term" data-term="${esc(key)}" type="button">${esc(m[2])}</button>`;last=start+m[2].length}return out+esc(s.slice(last))}
const chapterCard=c=>`<a href="#chapter/${c.n}" class="card chapter-card ${c.pending?'pending':''}">${badge(c.n)}<h3>${esc(c.title)}</h3><p>${esc(c.intro)}</p><div class="bottom"><span>${esc(c.category)}</span><span>${c.pending?'Source needed':state.read.includes(c.n)?'✓ Reviewed':'Open chapter'}</span></div></a>`;
function home() {
  const grade = stats(state.attempts);
  const weak = weakGroups().slice(0, 3);
  const firstChapter = DATA.chapters[0];
  const weakAreaCards = weak.map(group => `
    <a class="card chapter-card" href="#quiz/${group.n}/review">
      ${badge(group.n)}
      <h3>${esc(group.topic)}</h3>
      <p>${group.correct}/${group.total} correct. Practice this area again.</p>
    </a>`).join('');

  return `
    <section class="hero">
      <div class="hero-content">
        <h1>Study overview</h1>
        <p>Work through Chapters 2–16, learn why each skill works, and check your understanding with practice questions and patient cases.</p>
        <div class="hero-actions">
          <a class="btn" href="#chapter/${firstChapter.n}">Start with Chapter ${firstChapter.n}</a>
          <a class="btn secondary" href="#chapters">Browse all chapters</a>
          <a class="btn secondary" href="#quiz">Take an adaptive test</a>
        </div>
      </div>
    </section>
    <section class="card hebrew-overview" aria-label="Hebrew EMT term lookup">
      ${hebrewSearchBar('hebrew-overview-query')}
      <a href="#hebrew">Browse Hebrew EMT terms</a>
    </section>
    <section class="card course-start" aria-labelledby="course-start-title">
      <h2 id="course-start-title">Course skills from your recordings</h2>
      <ul>
        <li><a href="#chapter/11/audio-0">Airway · OPA sizing and placement</a></li>
        <li><a href="#chapter/10/audio-3">Patient assessment · Manual blood pressure</a></li>
        <li><a href="#chapter/6/audio-0">Anatomy · Bony landmarks</a></li>
        <li><a href="#chapter/16/audio-0">Respiratory emergencies · PASTE history</a></li>
      </ul>
    </section>
    <div class="grid three overview-metrics">
      <div class="card metric">
        <span>OVERALL QUESTION GRADE</span><strong>${pctText(grade)}</strong>
        <div class="mini">${grade.correct} correct / ${grade.total} attempts</div>
      </div>
      <div class="card metric">
        <span>CHAPTERS REVIEWED</span><strong>${state.read.length}<small> / ${DATA.chapters.length}</small></strong>
        <div class="mini"><a href="#chapters">View chapters</a></div>
      </div>
      <div class="card metric">
        <span>FLASHCARDS MASTERED</span><strong>${state.known.length}<small> / ${DATA.cards.length}</small></strong>
        <div class="mini"><a href="#cards">Open flashcards</a></div>
      </div>
    </div>
    <h2 class="section-title">Start with the foundations</h2>
    <div class="grid three">${DATA.chapters.slice(0, 3).map(chapterCard).join('')}</div>
    ${weak.length ? `<h2 class="section-title">Review these areas</h2><div class="grid three">${weakAreaCards}</div>` : ''}
    <div class="action-row"><a class="btn ghost" href="#progress">See grades and weak areas</a></div>
    ${window.ICHUD_HOME ? window.ICHUD_HOME() : ''}`;
}
function chapters(){return head('THE COURSE','Chapters 2–16','Study lessons with field examples, decision points, and practice for each chapter.')+`<div class="grid three">${DATA.chapters.map(chapterCard).join('')}</div>`}
function toolPanels(c){return (c.tools||[]).map((t,i)=>`<section class="card lesson-section mnemonic-panel" id="tool-${c.n}-${i}"><span class="eyebrow">QUICK REFERENCE</span><h2>${esc(t.name)}</h2><p>${esc(t.subtitle)}</p><div class="mnemonic-grid">${t.items.map(([letter,label,detail])=>`<div><b>${esc(letter)}</b><span><strong>${esc(label)}</strong><small>${esc(detail)}</small></span></div>`).join('')}</div></section>`).join('')}
function chapterNav(c){let i=DATA.chapters.indexOf(c),prev=DATA.chapters[i-1],next=DATA.chapters[i+1];return `<nav class="chapter-navigation" aria-label="Chapter navigation"><button type="button" data-action="go-back">← Back</button><a href="#chapters">All chapters</a><span class="chapter-spacer"></span>${prev?`<a href="#chapter/${prev.n}">← Ch ${prev.n}</a>`:''}${next?`<a href="#chapter/${next.n}">Ch ${next.n} →</a>`:''}</nav>`}
function overviewPanel(c){return `<section class="card chapter-overview"><span class="eyebrow">CHAPTER OVERVIEW</span><h2>The big picture</h2>${(c.overview||[]).map(p=>`<p>${esc(p)}</p>`).join('')}</section>`}
function reasoningPanel(c) {
  const topics = CHAPTER_REASONING[c.n];
  if (!topics) return '';

  const explanations = topics.map(([title, mechanism, example], index) => `
    <details class="reasoning-topic" id="why-${c.n}-${index}" ${index === 0 ? 'open' : ''}>
      <summary>${esc(title)}</summary>
      <div class="reasoning-explanation">
        <p>${termify(mechanism)}</p>
        <p class="reasoning-example"><strong>In the field</strong> ${termify(example)}</p>
      </div>
    </details>`).join('');
  const links = REFERENCES_BY_CHAPTER[c.n].map(key => {
    const [title, url] = REASONING_REFERENCES[key];
    return `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)} ↗</a>`;
  }).join('');

  return `
    <section class="card chapter-reasoning" aria-labelledby="chapter-reasoning-title">
      <h2 id="chapter-reasoning-title">Why it matters in the field</h2>
      ${explanations}
      <div class="reasoning-sources" aria-label="References">${links}</div>
    </section>`;
}

function fundamentalsPanel(c) {
  const concepts = EMT_FUNDAMENTALS[c.n] || [];
  if (!concepts.length) return '';
  const references = c.n === 6 || c.n === 11 || c.n === 13 || c.n === 16
    ? '<a href="https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange" target="_blank" rel="noopener noreferrer">OpenStax gas exchange</a> · <a href="https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology" target="_blank" rel="noopener noreferrer">OpenStax cardiac physiology</a>'
    : c.n === 10 || c.n === 15
    ? '<a href="https://www.stroke.org/en/about-stroke/stroke-symptoms" target="_blank" rel="noopener noreferrer">American Stroke Association stroke signs</a>'
    : '';
  return `<section class="card fundamentals"><h2>Start with the fundamentals</h2>
    ${concepts.map(([title, explanation, example], index) => `<section class="fundamentals-topic" id="fund-${c.n}-${index}">
      <h3>${esc(title)}</h3><p>${termify(explanation)}</p>
      <div class="fundamentals-case"><strong>Work through it</strong><p>${termify(example)}</p></div>
    </section>`).join('')}
    ${references ? `<p class="fundamentals-sources">${references}</p>` : ''}
    </section>`;
}

function lesson(n) {
  const c = chapter(n);
  if (!c) return chapters();
  const guide = CHAPTER_GUIDES[c.n];
  const lessons = guide.steps.map(([title, explanation, application], index) => `
    <section class="guide-step" id="guide-${c.n}-${index}">
      <h2>${esc(title)}</h2>
      <p>${termify(explanation)}</p>
      ${application ? `<p class="guide-topic-example"><strong>Work through it</strong> ${termify(application)}</p>` : ''}
      ${c.n === 6 && index === (c.sourceCourse ? 2 : 3) ? diagramFor(c) : ''}
    </section>`).join('');
  const courseNotes = COURSE_NOTES[c.n];
  const notesTitle = c.sourceCourse ? 'Course notes and skill references' : 'Skills and details from your course audio';
  const notes = courseNotes.map(([title,time,explanation],index) => `
    <section class="guide-step course-note" id="audio-${c.n}-${index}">
      <h3>${esc(title)}</h3>
      ${time ? `<p class="audio-time">Recording · ${esc(time)}</p>` : ''}
      <p>${termify(explanation)}</p>
    </section>`).join('');
  const [scene, ...decisions] = guide.case;
  const workedCase = `<section class="guide-case" id="chapter-case-${c.n}">
    <h2>Work the call</h2><p>${termify(scene)}</p>
    <ol>${decisions.map(([action, reason]) =>
      `<li><h3>${esc(action)}</h3><p>${termify(reason)}</p></li>`).join('')}</ol>
  </section>`;
  const jump = (id, label) => `<button type="button" class="section-jump" data-section="${id}">${esc(label)}</button>`;
  const references = REFERENCES_BY_CHAPTER[c.n].map(key => REASONING_REFERENCES[key]);
  if (c.n === 2) references.push(['CDC standard precautions','https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html']);
  if (c.n === 6) references.push(['OpenStax gas exchange','https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange'], ['OpenStax cardiac physiology','https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology']);
  if (c.n === 11 || c.n === 16) references.push(['National EMT Instructional Guidelines','https://www.ems.gov/assets/EMT_Instructional_Guidelines.pdf']);
  if (c.n === 11) references.push(
    ['Merck Manual OPA sizing and placement','https://www.merckmanuals.com/professional/critical-care-medicine/how-to-do-basic-airway-procedures/how-to-insert-an-oropharyngeal-airway'],
    ['Merck Manual NPA sizing and placement','https://www.merckmanuals.com/professional/critical-care-medicine/how-to-do-basic-airway-procedures/how-to-insert-a-nasopharyngeal-airway']);
  if (c.n === 15) references.push(['CDC transmission-based precautions','https://www.cdc.gov/infection-control/hcp/basics/transmission-based-precautions.html']);
  if (c.n === 16) references.push(['CDC carbon monoxide clinical guidance','https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html']);
  if (c.n === 14) references.push(['AHA pediatric BLS guidelines','https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support']);
  if (c.n === 12 || c.n === 15) references.push(['AHA and Red Cross first aid guidelines','https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines']);
  if (c.n === 10) references.push(['American Stroke Association BE FAST','https://www.stroke.org/en/about-stroke/stroke-symptoms']);
  const topics = c.deep.map(([title, explanation, example], index) => `
    <section class="guide-reference-topic" id="section-${c.n}-${index}">
      <h3>${esc(title)}</h3><p>${termify(explanation)}</p>
      <p class="guide-topic-example"><strong>In practice</strong> ${termify(example)}</p>
    </section>`).join('');
  return `${chapterNav(c)}${head('CHAPTER '+c.n,c.title,guide.question)}
    <div class="chapter-guide">
      <nav class="guide-contents" aria-label="In this lesson">
        <h2>In this lesson</h2>
        <ol><li>${jump('course-notes-'+c.n,notesTitle)}</li>
        ${guide.steps.map(([title], index) => `<li>${jump('guide-'+c.n+'-'+index,title)}</li>`).join('')}
        <li>${jump('chapter-case-'+c.n,'Work the call')}</li>
        <li>${jump('chapter-checklist-'+c.n,'Field checklist')}</li>
        <li>${jump('chapter-details-'+c.n,'Detailed chapter coverage')}</li></ol>
        <p><a href="#quiz/${c.n}">Test this chapter</a></p>
      </nav>
      ${c.sourceCourse ? lessons : ''}
      <section class="course-notes" id="course-notes-${c.n}">
        <h2>${esc(notesTitle)}</h2>
        <ul class="course-note-index">${courseNotes.map(([title],index)=>`<li>${jump('audio-'+c.n+'-'+index,title)}</li>`).join('')}</ul>
        ${notes}
      </section>
      ${c.sourceCourse ? '' : lessons}
      ${c.n === 6 ? '' : diagramFor(c)}
      ${workedCase}
      ${toolPanels(c)}
      <section class="card practical-guide guide-step" id="chapter-checklist-${c.n}">
        <h2>Field checklist</h2>
        <ol>${c.practical.workflow.map(item=>`<li>${termify(item)}</li>`).join('')}</ol>
        <h3>Red flags</h3><ul>${c.practical.red.map(item=>`<li>${termify(item)}</li>`).join('')}</ul>
        <h3>Common mistakes</h3><ul>${c.practical.mistakes.map(item=>`<li>${termify(item)}</li>`).join('')}</ul>
        <h3>Another field example</h3><p>${termify(c.practical.scenario)}</p>
        <p>${termify(c.takeaway)}</p>
      </section>
      <section class="guide-detail" id="chapter-details-${c.n}">
        <h2>Detailed chapter coverage</h2>
        <details class="guide-topic-index"><summary>Jump to one of ${c.deep.length} topics</summary>
          <ul>${c.deep.map(([title],index)=>`<li>${jump('section-'+c.n+'-'+index,title)}</li>`).join('')}</ul>
        </details>
        ${topics}
      </section>
      <div class="action-row guide-actions">
        <a class="btn" href="#quiz/${c.n}">Test this chapter</a>
        <a class="btn ghost" href="#cards/${c.n}">Review flashcards</a>
        <button class="btn ghost" data-action="read" data-chapter="${c.n}">${state.read.includes(c.n)?'✓ Reviewed':'Mark reviewed'}</button>
      </div>
      <details class="guide-reference">
        <summary>Additional explanations and quick reference</summary>
        ${overviewPanel(c)}${fundamentalsPanel(c)}${reasoningPanel(c)}
      </details>
      <p class="guide-sources"><strong>References</strong> ${references.map(([title,url])=>
        `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)}</a>`).join(' · ')}</p>
    </div>${chapterNav(c)}`;
}
function cards(route){if(route)state.filter=route;let d=deck();if(state.cardIndex>=d.length)state.cardIndex=0;let c=d[state.cardIndex];return head('ACTIVE RECALL','Flashcards',`${DATA.cards.length} cards total. Reveal the answer, mark what you know, and revisit the rest.`)+`<div class="study-area"><div class="filter-row"><button data-filter="all" class="${state.filter==='all'?'active':''}">All</button>${DATA.chapters.filter(x=>!x.pending).map(x=>`<button data-filter="${x.n}" class="${state.filter==x.n?'active':''}">Ch ${x.n}</button>`).join('')}</div>${c?`<button class="study-card ${state.flipped?'flipped':''}" id="flip-card"><span class="eyebrow">${state.flipped?'ANSWER':'CHAPTER '+c[0]+' · RECALL'}</span><strong>${esc(state.flipped?c[2]:c[1])}</strong><small>Tap to ${state.flipped?'see question':'reveal answer'}</small></button><div class="study-meta">Card ${state.cardIndex+1} of ${d.length} · ${d.filter(x=>state.known.includes(cardId(x))).length} mastered in this deck</div><div class="action-row center"><button class="btn ghost" data-action="prev-card">Previous</button><button class="btn soft" data-action="again">Review again</button><button class="btn" data-action="known">Got it</button><button class="btn ghost" data-action="next-card">Next</button></div>`:'<div class="empty">No cards available.</div>'}</div>`}
const levelNames={1:'Foundation',2:'Application',3:'Clinical judgment'};
function poolFor(scope,level){let p=allQuestions.filter(q=>(!scope||scope==='weak'||q.n===+scope)&&(!level||q.level===+level));if(scope==='weak'){let groups=weakGroups();let keys=new Set(groups.map(g=>g.n+'|'+g.topic));p=p.filter(q=>keys.has(q.n+'|'+q.topic)||groups.some(g=>g.n===q.n));}return p}
function startQuiz(scope,level,count){let p=poolFor(scope,level);if(!p.length)return;let shuffled=[...p].sort(()=>Math.random()-.5);let items=count==='all'?shuffled:shuffled.slice(0,Math.min(+count||20,shuffled.length));state.quiz={scope:scope||null,level:level||null,items,at:0,chosen:null,graded:false,correct:0};render()}
function selector(scope){let c=scope&&scope!=='weak'?chapter(scope):null;let available=poolFor(scope).length;return head('PRACTICE',scope==='weak'?'Targeted weak area review':c?`Chapter ${c.n} · ${c.title}`:'Question bank',scope==='weak'?'The queue draws from topics you missed. It updates as you answer.':'Choose a level and session size. Every answer updates your grade and weak areas.')+adaptivePracticePanel(scope,available)+`<div class="card quiz-shell"><div class="ladder-grid">${[1,2,3].map(l=>{let count=poolFor(scope,l).length;return `<button class="ladder-step" data-action="start-quiz" data-scope="${scope||''}" data-level="${l}" data-count="20" ${count?'':'disabled'}><b>${levelNames[l]}</b><span>${l===1?'Core concepts and terminology':l===2?'Apply findings in patient situations':'Choose priorities as conditions change'}</span><small>${count} questions available · up to 20 per session</small></button>`}).join('')}</div><h3>Mixed practice · ${available} available</h3><div class="action-row">${[20,40,'all'].map(count=>`<button class="btn ${count==='all'?'soft':''}" data-action="start-quiz" data-scope="${scope||''}" data-count="${count}">${count==='all'?'Full bank':count+' questions'}</button>`).join('')}${weakGroups().length?'<a class="btn ghost" href="#quiz/weak">Review weak areas</a>':''}</div><div class="callout warning" style="margin-top:18px">Original practice items for learning; not official NREMT questions. Some repeated concepts are tested at different levels.</div></div>`}
function quiz(scope,level){let z=state.quiz;if(!z||z.scope!==(scope||null)||(level&&Number.isFinite(+level)&&z.level!==+level&&z.mode!=='adaptive'))return selector(scope);if(z.at>=z.items.length){let s=stats(z.items.map(q=>({correct:q.answerCorrect})));return head('SESSION COMPLETE','Your results')+`<div class="card quiz-shell result"><div class="score">${pctText(s)}</div><h2>${s.correct} of ${s.total} correct</h2><p>Saved to your cumulative grade and topic breakdown.</p>${z.mode==='adaptive'&&z.items.length<z.limit?'<p>You reached the end of the available questions at your current level for this test.</p>':''}<div class="action-row center"><button class="btn" data-action="${z.mode==='adaptive'?'start-adaptive':'start-quiz'}" data-scope="${scope||''}" data-count="${z.limit||20}" data-level="${z.level||''}">${z.mode==='adaptive'?'Next adaptive test':'New session'}</button><a class="btn soft" href="#progress">See weak areas</a><a class="btn ghost" href="${scope&&scope!=='weak'?'#chapter/'+scope:'#chapters'}">Review chapters</a></div></div>`}let q=z.items[z.at];const total=z.limit||z.items.length;return head(z.mode==='adaptive'?'Adaptive · '+levelNames[q.level]:z.level?levelNames[z.level]:'Mixed practice',scope&&scope!=='weak'?`Chapter ${scope}`:'Question bank')+`<div class="quiz-shell"><div class="question-top"><span>QUESTION ${z.at+1} / ${total} · CHAPTER ${q.n} · ${esc(q.topic)}</span><span>${z.correct} correct so far</span></div><div class="progress-bar" style="margin:11px 0 24px"><i style="width:${100*z.at/total}%"></i></div><div class="card quiz-question"><h2>${esc(q.prompt)}</h2>${q.options.map((o,i)=>`<button class="option ${z.chosen===i?'selected':''} ${z.graded?(i===q.right?'correct':z.chosen===i?'wrong':''):''}" data-option="${i}" ${z.graded?'disabled':''}><span class="letter">${'ABCD'[i]}</span>${esc(o)}</button>`).join('')}${z.graded?`<div class="feedback ${z.chosen!==q.right?'bad':''}"><b>${z.chosen===q.right?'Correct.':'The best answer is '+('ABCD'[q.right])+'.'}</b><p>${esc(q.why)}</p></div>`:''}<div class="action-row"><button class="btn" data-action="${z.graded?'next-question':'check-answer'}" ${!z.graded&&z.chosen===null?'disabled':''}>${z.graded?(z.at===total-1?'See results':'Next question'):'Commit answer'}</button></div></div></div>`}
function progress(){let s=stats(state.attempts),weak=weakGroups(),chapters=DATA.chapters.filter(c=>!c.pending).map(c=>({c,...stats(state.attempts.filter(x=>x.n===c.n))}));return head('YOUR RESULTS','Grades & weak areas','Every committed practice answer counts. Retakes are included, so you can watch the trend improve.')+`<div class="grid three"><div class="card metric"><span>CUMULATIVE GRADE</span><strong>${pctText(s)}</strong><div class="mini">${s.correct}/${s.total} attempts</div></div><div class="card metric"><span>SESSIONS COMPLETED</span><strong>${state.sessions.length}</strong><div class="mini">${state.sessions.length?'Latest '+state.sessions.at(-1).pct+'%':'Take a quiz to begin'}</div></div><div class="card metric"><span>WEAK TOPICS</span><strong>${weak.length}</strong><div class="mini">Below 80% or missed most recently</div></div></div><div class="action-row"><a class="btn" href="#quiz">Take an adaptive test</a></div><h2 class="section-title">Chapter grades</h2><div class="card"><div class="grade-list">${chapters.map(g=>`<div class="grade-row"><a href="#chapter/${g.c.n}"><b>Ch ${g.c.n} · ${esc(g.c.title)}</b></a><span>${g.total?g.correct+'/'+g.total+' · '+g.pct+'%':'No answers yet'}</span><div class="progress-bar"><i style="width:${g.pct||0}%"></i></div><a href="#quiz/${g.c.n}">Practice</a></div>`).join('')}</div></div><h2 class="section-title">Weak area queue</h2>${weak.length?`<div class="grid two">${weak.map(g=>`<div class="card"><span class="eyebrow">CHAPTER ${g.n}</span><h3>${esc(g.topic)}</h3><p>${g.correct} / ${g.total} correct · ${g.pct}% overall${g.total>=5?' · '+g.recent+'/5 recent':''}</p><div class="action-row"><a class="btn soft" href="#chapter/${g.n}">Read chapter</a><a class="btn ghost" href="#quiz/${g.n}">Practice</a></div></div>`).join('')}</div><div class="action-row"><a class="btn" href="#quiz/weak">Start targeted review</a></div>`:'<div class="card"><p>Answer a few questions first. Missed topics will show here automatically.</p><a class="btn" href="#quiz">Open question bank</a></div>'}<h2 class="section-title">Recent sessions</h2><div class="card">${state.sessions.length?state.sessions.slice(-8).reverse().map(x=>`<p class="session-line"><b>${x.pct}%</b> · ${x.correct}/${x.total} · ${esc(x.label)} · ${new Date(x.at).toLocaleDateString()}</p>`).join(''):'No completed sessions yet.'}</div><div class="callout warning" style="margin-top:20px">This grade is practice performance on this device, including retakes. It does not predict certification results and does not sync across devices.</div>`}
function scenarioCards(){return head('CLINICAL DECISIONS','What would you do first?',`${DATA.scenarios.length} patient calls with feedback after each decision. Case decisions also update your grades and weak areas.`)+`<div class="grid two">${DATA.scenarios.map((s,i)=>`<a class="card chapter-card" href="#scenario/${i}">${badge(s.chapter)}<h3>${esc(s.title)}</h3><p>${esc(s.scene)}</p><div class="bottom"><span>${s.steps.length} decisions</span><span>${state.scenarioBest[i]!==undefined?'Best '+state.scenarioBest[i]+'/'+s.steps.length:'Start case'}</span></div></a>`).join('')}</div>`}
function scenario(i){let s=DATA.scenarios[i];if(!s)return scenarioCards();if(!state.scenario||state.scenario.id!==i)state.scenario={id:i,at:0,chosen:null,graded:false,correct:0};let z=state.scenario;if(z.at>=s.steps.length)return head('CALL COMPLETE',s.title)+`<div class="card result"><div class="score">${z.correct}/${s.steps.length}</div><p>Case result saved. Review the chapter or try again.</p><button class="btn" data-action="restart-scenario" data-id="${i}">Restart case</button></div>`;let step=s.steps[z.at];return `<a href="#scenarios" class="back">All scenarios</a>${head('CLINICAL DECISIONS',s.title)}<div class="quiz-shell"><div class="scenario-intro"><b>Dispatch and scene</b><p>${esc(s.scene)}</p></div><div class="steps">${s.steps.map((_,j)=>`<i class="${j<=z.at?'done':''}"></i>`).join('')}</div><div class="card quiz-question"><span class="eyebrow">DECISION ${z.at+1} OF ${s.steps.length}</span><h2>${esc(step.ask)}</h2>${step.options.map((o,j)=>`<button class="option ${z.chosen===j?'selected':''} ${z.graded?(j===step.right?'correct':j===z.chosen?'wrong':''):''}" data-scenario-option="${j}" ${z.graded?'disabled':''}><span class="letter">${'ABCD'[j]}</span>${esc(o)}</button>`).join('')}${z.graded?`<div class="feedback ${z.chosen!==step.right?'bad':''}"><b>${z.chosen===step.right?'Good decision.':'Reconsider the immediate threat.'}</b><p>${esc(step.why)}</p></div>`:''}<div class="action-row"><button class="btn" data-action="${z.graded?'next-step':'check-step'}" ${!z.graded&&z.chosen===null?'disabled':''}>${z.graded?(z.at===s.steps.length-1?'Finish call':'Next decision'):'Commit decision'}</button></div></div></div>`}
function videoCards(id) {
  const query = state.videoQuery.trim().toLowerCase();
  const videos = DATA.videos.filter(video => {
    const text = [video.title, video.by, video.note, video.topic,
      video.chapters.map(n => 'chapter ' + n).join(' ')].join(' ').toLowerCase();
    return (!id || video.id === id) && (state.videoFilter === 'all' || video.topic === state.videoFilter) && text.includes(query);
  });
  const cards = videos.map(video => `<article class="card video-card">
    <div class="video-frame">
      <a class="video-launch" href="https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}" target="_blank" rel="noopener noreferrer" aria-label="Play ${esc(video.title)} on YouTube">
        <span aria-hidden="true">▶</span><small>PLAY ON YOUTUBE</small>
      </a>
    </div>
    <span class="tag">${esc(video.topic)} · ${video.year}</span><h3>${esc(video.title)}</h3>
    <p>${esc(video.by)} · ${esc(video.note)}</p><p class="video-chapters">Chapters ${video.chapters.join(', ')}</p>
    <a href="watch.html?v=${encodeURIComponent(video.id)}&amp;title=${encodeURIComponent(video.title)}" aria-label="Open Academy player for ${esc(video.title)}">Open Academy player</a>
  </article>`).join('');
  return `<p class="result-count">${videos.length} of ${DATA.videos.length} videos</p><div class="grid two">${cards}</div>${videos.length ? '' : '<div class="empty">No videos matched. Try a skill, publisher, or chapter number.</div>'}`;
}
function videos(id){if(id){let v=DATA.videos.find(x=>x.id===id);if(v){state.videoQuery='';state.videoFilter='all'}}return head('VISUAL LEARNING','Adult EMT skills library','Search by skill, chapter, title, or publisher. Older station videos are labeled; compare technique with your course and protocol.')+`<div class="video-search"><input id="video-search" type="search" value="${esc(state.videoQuery)}" placeholder="Search videos: BVM, assessment, bleeding…" aria-label="Search videos"><button data-action="clear-video-search" class="btn soft">Clear</button></div><div class="filter-row"><button data-video-filter="all" class="${state.videoFilter==='all'?'active':''}">All</button>${[...new Set(DATA.videos.map(v=>v.topic))].map(t=>`<button data-video-filter="${esc(t)}" class="${state.videoFilter===t?'active':''}">${esc(t)}</button>`).join('')}</div><div id="video-results">${videoCards(id)}</div><div class="callout warning" style="margin-top:22px">Videos belong to their publishers. Older skills stations may differ from current instruction. Use your course and local protocol for hands on care.</div>`}
function sources(){return head('EVIDENCE & SCOPE','Sources and notes','Course recordings, EMT education standards, and skills references used across Chapters 2–16.')+`<div class="grid two"><div class="source-list">${DATA.sources.map(([t,d,u])=>u?`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)}<span>${esc(d)}</span></a>`:`<div class="card"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div><div class="card"><h2>How to use this</h2><p>All fifteen chapters include study guides, field examples, flashcards, and graded practice. Chapters 2–6 and 8–14 include lessons drawn from the supplied course material.</p><p>Use the linked AHA guidelines and current course skill sheets when studying resuscitation. In the field, follow local protocols and medical direction.</p><p>Question attempts and grades are stored in this browser’s local storage. They do not sync to another device. The questions are independent practice, not official NREMT items.</p></div></div>`}
function route() {
  const [page, id, level] = location.hash.replace(/^#/, '').split('/');
  return {page: page || 'home', id, level};
}

function scrollToChapterTopic(chapterId, topic) {
  const match = /^(?:(tool|why|fund|guide|audio)-)?(\d+)$/.exec(topic || '');
  if (!match) return;

  const target = document.getElementById(`${match[1] || 'section'}-${chapterId}-${match[2]}`);
  if (!target) return;
  for (let node = target; node; node = node.parentElement) {
    if (node.tagName === 'DETAILS') node.open = true;
  }
  requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
}

function render() {
  window.ICHUD_BEFORE?.();
  const {page, id, level} = route();
  const pages = {
    home, chapters, chapter: () => lesson(id), cards: () => cards(id),
    quiz: () => quiz(id, level), progress, scenarios: scenarioCards,
    scenario: () => scenario(+id), videos: () => videos(id), sources,
    search: () => searchPage(id, level), question: () => questionDetail(id),
    card: () => cardDetail(id), hebrew: () => hebrewPage(id),
    ...(window.ICHUD_PAGES || {})
  };
  $('#app').innerHTML = (Object.hasOwn(pages, page) ? pages[page] : home)();
  const activePage = {chapter: 'chapters', scenario: 'scenarios'}[page] || page;
  document.querySelectorAll('#nav a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === activePage);
  });
  $('#back-button').disabled = page === 'home' && backStack.length < 2;
  if (page === 'chapter') scrollToChapterTopic(id, level);
  window.ICHUD_AFTER?.(page, id, level);

  const title = page === 'home' ? 'Overview'
    : page === 'chapter' ? chapter(id)?.title || 'Chapters'
    : page === 'hebrew' ? 'Hebrew EMT terms'
    : window.ICHUD_TITLES?.[page] ? window.ICHUD_TITLES[page]
    : page[0].toUpperCase() + page.slice(1);
  document.title = title + ' · Ichud EMT Academy';
}

const backStack = [location.hash || '#home'];
let backNavigating = false;

function goBack() {
  if (backStack.length > 1) {
    backStack.pop();
    backNavigating = true;
    location.hash = backStack[backStack.length - 1];
    return;
  }

  const target = route().page === 'chapter' ? '#chapters' : '#home';
  if (location.hash === target || route().page === 'home') return;
  backStack[0] = target;
  backNavigating = true;
  location.hash = target;
}
window.addEventListener('hashchange',()=>{if(backNavigating)backNavigating=false;else if(backStack[backStack.length-1] !== (location.hash || '#home')) backStack.push(location.hash || '#home');state.quiz=null;state.scenario=null;state.flipped=false;state.cardIndex=0;window.scrollTo(0,0);render()});
document.addEventListener('click',e=>{if(e.target.closest('#back-button,[data-action="go-back"]')){goBack();return}let t=e.target.closest('[data-term]');if(t){$('#term-title').textContent=t.dataset.term;$('#term-body').textContent=DATA.glossary[t.dataset.term];$('#term-dialog').hidden=false;return}if(e.target===$('#term-dialog')||e.target.id==='term-close'){$('#term-dialog').hidden=true;return}if(e.target.id==='menu'){$('.sidebar').classList.toggle('open');return}if(e.target.closest('#nav a')){$('.sidebar').classList.remove('open');return}let jump=e.target.closest('[data-section]');if(jump){document.getElementById(jump.dataset.section)?.scrollIntoView({behavior:'smooth'});return}if(e.target.closest('#flip-card')){state.flipped=!state.flipped;render();return}let f=e.target.closest('[data-filter]');if(f){state.filter=f.dataset.filter;state.cardIndex=0;state.flipped=false;render();return}let vf=e.target.closest('[data-video-filter]');if(vf){state.videoFilter=vf.dataset.videoFilter;render();return}let o=e.target.closest('[data-option]');if(o&&state.quiz&&!state.quiz.graded){state.quiz.chosen=+o.dataset.option;render();return}let so=e.target.closest('[data-scenario-option]');if(so&&state.scenario&&!state.scenario.graded){state.scenario.chosen=+so.dataset.scenarioOption;render();return}let a=e.target.closest('[data-action]');if(!a)return;let act=a.dataset.action;if(act==='clear-video-search'){state.videoQuery='';render();return}if(act==='read'){let n=+a.dataset.chapter;if(!state.read.includes(n))state.read.push(n);persist();render()}if(['prev-card','next-card','again','known'].includes(act)){let d=deck(),c=d[state.cardIndex];if(!c)return;if(act==='known'&&!state.known.includes(cardId(c)))state.known.push(cardId(c));if(act==='again')state.known=state.known.filter(x=>x!==cardId(c));persist();state.cardIndex=(state.cardIndex+(act==='prev-card'?-1:1)+d.length)%d.length;state.flipped=false;render()}if(act==='start-adaptive')beginAdaptiveQuiz(a.dataset.scope||null,+a.dataset.count||10);if(act==='start-quiz')startQuiz(a.dataset.scope||null,a.dataset.level?+a.dataset.level:null,a.dataset.count||20);if(act==='check-answer'&&state.quiz&&state.quiz.chosen!==null&&!state.quiz.graded){let z=state.quiz,q=z.items[z.at];z.graded=true;q.answerCorrect=z.chosen===q.right;if(q.answerCorrect)z.correct++;state.attempts.push({id:q.id,n:q.n,topic:q.topic,level:q.level,correct:q.answerCorrect,at:Date.now()});persist();render()}if(act==='next-question')advanceQuiz();if(act==='check-step'&&state.scenario?.chosen!==null&&!state.scenario.graded){let z=state.scenario;z.graded=true;let cs=DATA.scenarios[z.id],step=cs.steps[z.at],correct=z.chosen===step.right;if(correct)z.correct++;state.attempts.push({id:'case'+z.id+'-'+z.at,n:cs.chapter,topic:step.topic||'Clinical judgment',level:3,correct,at:Date.now()});persist();render()}if(act==='next-step'&&state.scenario?.graded){let z=state.scenario;z.at++;z.chosen=null;z.graded=false;if(z.at===DATA.scenarios[z.id].steps.length){state.scenarioBest[z.id]=Math.max(state.scenarioBest[z.id]||0,z.correct);persist()}render()}if(act==='restart-scenario'){state.scenario={id:+a.dataset.id,at:0,chosen:null,graded:false,correct:0};render()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#term-dialog').hidden=true;$('.sidebar').classList.remove('open')}});render();

document.addEventListener('submit',e=>{if(e.target.id==='global-search'||e.target.id==='page-search'){e.preventDefault();let q=(e.target.querySelector('input[type="search"]')?.value||'').trim();if(q)location.hash='#search/'+encodeURIComponent(q);else location.hash='#search';}});
document.addEventListener('input',e=>{if(e.target.id==='video-search'){state.videoQuery=e.target.value;let target=document.querySelector('#video-results');if(target)target.innerHTML=videoCards();}});
