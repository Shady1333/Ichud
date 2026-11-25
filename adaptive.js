/* Adaptive placement uses saved answers, with one vote per question. */
function adaptiveEvidence(bank, attempts) {
  const questions = new Map(bank.map(question => [question.id, question]));
  const latest = new Map();
  attempts.forEach((attempt, order) => {
    if (!questions.has(attempt.id)) return;
    latest.delete(attempt.id);
    latest.set(attempt.id, {...questions.get(attempt.id), correct:attempt.correct, order});
  });
  return latest;
}

function adaptiveLevel(chapterNumber, evidence) {
  const rows = [...evidence.values()].filter(row => row.n === +chapterNumber);
  let level = 1;
  while (level < 3) {
    const recent = rows.filter(row => row.level === level).slice(-6);
    if (recent.length < 4 || recent.filter(row => row.correct).length / recent.length < 0.8) break;
    level++;
  }
  if (level > 1) {
    const recent = rows.filter(row => row.level === level).slice(-2);
    if (recent.length === 2 && recent.every(row => !row.correct)) {
      const subsequent = rows.filter(row => row.level === level - 1 && row.order > recent[1].order).slice(-2);
      if (subsequent.length < 2 || subsequent.some(row => !row.correct)) return level - 1;
    }
  }
  return level;
}

function nextAdaptiveQuestion(pool, evidence, served) {
  const used = new Set(served.map(question => question.id));
  const remaining = pool.filter(question => !used.has(question.id));
  const counts = new Map();
  served.forEach(question => counts.set(question.n, (counts.get(question.n) || 0) + 1));
  const topics = new Map();
  for (const row of evidence.values()) topics.set(row.n + '|' + row.topic, row.correct);
  const byChapter = new Map();
  for (const question of remaining) {
    if (!byChapter.has(question.n)) byChapter.set(question.n, []);
    byChapter.get(question.n).push(question);
  }
  const candidates = [];
  for (const [n, questions] of byChapter) {
    const target = adaptiveLevel(n, evidence);
    const levels = questions.map(question => question.level).filter(level => level <= target);
    if (!levels.length) continue;
    const level = Math.max(...levels);
    for (const question of questions) {
      if (question.level !== level) continue;
      const missed = topics.get(n + '|' + question.topic) === false;
      const previous = evidence.get(question.id);
      const score = (missed ? 4 : 0) + (!previous ? 3 : previous.correct ? 0 : 1)
        - 5 * (counts.get(n) || 0);
      candidates.push({question, score, tie:Math.random()});
    }
  }
  candidates.sort((a,b) => b.score - a.score || a.tie - b.tie);
  return candidates[0] ? shuffleQuizChoices(candidates[0].question) : null;
}

function beginAdaptiveQuiz(scope, count) {
  const pool = poolFor(scope);
  const first = nextAdaptiveQuestion(pool, adaptiveEvidence(allQuestions,state.attempts), []);
  if (!first) return;
  state.quiz = {scope, level:null, mode:'adaptive', pool, limit:Math.min(count,pool.length),
    items:[first], at:0, chosen:null, graded:false, correct:0};
  render();
}

function advanceQuiz() {
  const session = state.quiz;
  if (!session?.graded) return;
  if (session.mode === 'adaptive' && session.items.length < session.limit) {
    const next = nextAdaptiveQuestion(session.pool, adaptiveEvidence(allQuestions,state.attempts), session.items);
    if (next) session.items.push(next);
  }
  session.at++;
  session.chosen = null;
  session.graded = false;
  if (session.at === session.items.length) {
    const pct = Math.round(100 * session.correct / session.items.length);
    state.quizBest = Math.max(state.quizBest || 0, pct);
    const label = session.mode === 'adaptive'
      ? (session.scope && session.scope !== 'weak' ? 'Adaptive · Chapter ' + session.scope : 'Adaptive practice')
      : session.scope === 'weak' ? 'Weak review' : session.scope ? 'Chapter ' + session.scope : levelNames[session.level] || 'Mixed review';
    state.sessions.push({at:Date.now(),correct:session.correct,total:session.items.length,pct,label});
    persist();
  }
  render();
}

function adaptivePracticePanel(scope, available) {
  if (!available) return '';
  const evidence = adaptiveEvidence(allQuestions,state.attempts);
  const currentChapter = chapter(scope);
  const placement = currentChapter
    ? 'Chapter ' + currentChapter.n + ' currently starts at ' + levelNames[adaptiveLevel(currentChapter.n,evidence)] + '.'
    : 'Difficulty is tracked separately for each chapter.';
  return `<section class="card adaptive-practice"><h2>Adaptive tests</h2>
    <p>${esc(placement)} Each answer updates the next question. Missed topics get priority, and difficulty rises at 80% or better across at least four distinct recent questions at a level.</p>
    <div class="action-row">${[10,20,40].filter(size => size === 10 || size <= available).map(size =>
      `<button type="button" class="btn ${size===10?'':'ghost'}" data-action="start-adaptive" data-scope="${esc(scope || '')}" data-count="${size}">Adaptive test · up to ${Math.min(size,available)} questions</button>`).join('')}</div>
    </section>`;
}
