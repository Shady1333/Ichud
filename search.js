/* Search functions are called after app.js initializes the question bank. */
const searchKinds=['all','lesson','video','question','card','case','term'];
function searchItems() {
  const items = [];
  for (const chapter of DATA.chapters) {
    const number = chapter.n;
    items.push({
      kind: 'lesson', title: `Chapter ${number}: ${chapter.title}`,
      body: [chapter.intro, chapter.takeaway, chapter.practical?.why, ...(chapter.overview || [])].join(' '),
      url: `#chapter/${number}`, meta: `Chapter ${number}`
    });
    (CHAPTER_GUIDES[number]?.steps || []).forEach(([title, explanation, application], index) => {
      items.push({kind:'lesson', title, body:application ? explanation + ' ' + application : explanation,
        url:`#chapter/${number}/guide-${index}`, meta:`Chapter ${number} · Core lesson`});
    });
    COURSE_NOTES[number].forEach(([title, time, explanation], index) => {
      items.push({kind:'lesson', title, body:explanation,
        url:`#chapter/${number}/audio-${index}`, meta:`Chapter ${number} · ${time ? 'Course skills' : number === 9 ? 'Team communication' : 'Lesson source'}`});
    });
    chapter.deep.forEach(([title, explanation, example], index) => {
      items.push({
        kind: 'lesson', title, body: explanation + ' ' + example,
        url: `#chapter/${number}/${index}`, meta: `Chapter ${number} · ${chapter.title}`
      });
    });
    (EMT_FUNDAMENTALS[number] || []).forEach(([title, explanation, example], index) => {
      items.push({kind: 'lesson', title, body: explanation + ' ' + example,
        url: `#chapter/${number}/fund-${index}`, meta: `Chapter ${number} · Fundamentals`});
    });
    (CHAPTER_REASONING[number] || []).forEach(([title, explanation, example], index) => {
      items.push({
        kind: 'lesson', title, body: explanation + ' ' + example,
        url: `#chapter/${number}/why-${index}`, meta: `Chapter ${number} · Why it matters in the field`
      });
    });
    (chapter.tools || []).forEach((tool, index) => {
      items.push({
        kind: 'lesson', title: tool.name, body: tool.subtitle + ' ' + tool.items.map(item => item.join(' ')).join(' '),
        url: `#chapter/${number}/tool-${index}`, meta: `Chapter ${number} · quick reference`
      });
    });
  }
DATA.cards.forEach((c,i)=>items.push({kind:'card',title:c[1],body:c[2],url:`#card/${i}`,meta:`Chapter ${c[0]} · flashcard`}));allQuestions.forEach(q=>items.push({kind:'question',title:q.prompt,body:q.options.join(' ')+' '+q.why,url:`#question/${q.id}`,meta:`Chapter ${q.n} · ${q.topic}`}));DATA.scenarios.forEach((s,i)=>items.push({kind:'case',title:s.title,body:s.scene+' '+s.steps.map(x=>x.ask+' '+x.why).join(' '),url:`#scenario/${i}`,meta:`Chapter ${s.chapter} · patient case`}));DATA.videos.forEach(v=>items.push({kind:'video',title:v.title,body:v.by+' '+v.note+' '+v.topic+' '+v.chapters.map(n=>'Chapter '+n).join(' '),url:`#videos/${v.id}`,meta:`${v.by} · ${v.topic}`}));for(const [term,definition] of Object.entries(DATA.glossary))items.push({kind:'term',title:term,body:definition,url:`#search/${encodeURIComponent(term)}/term`,meta:'Quick definition'});return items}
function searchMatches(query){let terms=query.trim().toLowerCase().split(/\s+/).filter(Boolean);if(!terms.length)return[];return searchItems().map(item=>{let title=item.title.toLowerCase(),body=item.body.toLowerCase(),meta=item.meta.toLowerCase();if(!terms.every(t=>title.includes(t)||body.includes(t)||meta.includes(t)))return null;let score=terms.reduce((n,t)=>n+(title.includes(t)?12:0)+(meta.includes(t)?4:0)+(body.includes(t)?1:0),0)+(title.includes(query.toLowerCase())?10:0);return{...item,score}}).filter(Boolean).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title))}
function excerpt(body,query){let term=query.trim().split(/\s+/)[0]?.toLowerCase()||'',at=body.toLowerCase().indexOf(term),start=Math.max(0,at-65);return(start?'…':'')+body.slice(start,start+210)+(body.length>start+210?'…':'')}
function searchPage(raw,kind='all'){let query='';try{query=decodeURIComponent(raw||'')}catch{query=raw||''}let matches=searchMatches(query),k=searchKinds.includes(kind)?kind:'all',shown=(k==='all'?matches:matches.filter(x=>x.kind===k)).slice(0,80),counts=Object.fromEntries(searchKinds.map(t=>[t,t==='all'?matches.length:matches.filter(x=>x.kind===t).length]));return head('FIND ANYTHING','Search the academy',query?`${matches.length} results for “${query}” across lessons, videos, questions, cards, cases, and definitions.`:'Search for a body system, symptom, treatment, acronym, publisher, or video skill.')+`<div class="card search-page"><form id="page-search" role="search"><input name="q" type="search" value="${esc(query)}" placeholder="Try: heart blood flow, BVM, OPQRST, shock…" aria-label="Search all study material"><button class="btn" type="submit">Search</button></form>${query?`<div class="filter-row search-filters">${searchKinds.map(t=>`<a class="${k===t?'active':''}" href="#search/${encodeURIComponent(query)}/${t}">${t==='all'?'All':t[0].toUpperCase()+t.slice(1)} <small>${counts[t]}</small></a>`).join('')}</div>${shown.length?`<div class="search-results">${shown.map(x=>`<a class="search-hit" href="${x.url}"><span class="tag">${esc(x.kind.toUpperCase())}</span><small>${esc(x.meta)}</small><h3>${esc(x.title)}</h3><p>${esc(excerpt(x.body,query))}</p></a>`).join('')}</div>${(k==='all'?matches:matches.filter(x=>x.kind===k)).length>80?'<p>Showing the first 80 matches. Add another word to narrow the search.</p>':''}`:'<p class="empty">Nothing matched. Try a shorter term, alternate spelling, or a different topic.</p>'}`:'<p>Search the chapter explanations, practical examples, flashcards, graded questions, patient cases, glossary, and video titles.</p>'}</div>`}
function questionDetail(id){let q=allQuestions.find(x=>x.id===id);if(!q)return searchPage('');return `<a href="#search" class="back">Back to search</a>${head('PRACTICE REFERENCE',`Chapter ${q.n} · ${q.topic}`)}<div class="card reference-detail"><h2>${esc(q.prompt)}</h2><ol type="A">${q.options.map((o,i)=>`<li class="${i===q.right?'answer':''}">${esc(o)}${i===q.right?' ✓':''}</li>`).join('')}</ol><p><b>Why:</b> ${esc(q.why)}</p><a class="btn" href="#quiz/${q.n}">Practice this chapter</a></div>`}
function cardDetail(id){let c=DATA.cards[+id];if(!c)return searchPage('');return `<a href="#search" class="back">Back to search</a>${head('FLASHCARD REFERENCE',`Chapter ${c[0]}`)}<div class="card reference-detail"><h2>${esc(c[1])}</h2><p>${esc(c[2])}</p><a class="btn" href="#cards/${c[0]}">Study chapter cards</a></div>`}
