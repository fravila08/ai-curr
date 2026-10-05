// Knowledge Check 5 – Prompt Life Cycle
// Each question: { q, options: [4 strings], answer: index of correct option, why: explanation }

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1 – Recall",
    description: "Definitions and facts: the life cycle stages, CLAUDE.md, sub-agents, and session commands.",
    questions: [
      {
        q: "In the Prompting Life Cycle, which stage is where you write out acceptance criteria and give them to Claude Code?",
        options: ["Explore", "Plan", "Define", "Review"],
        answer: 2,
        why: "In the Define stage you identify the goal, pick a feature, and write acceptance criteria so Claude Code holds the end state you are looking for. Explore is about finding relevant files and Plan is about discussing an approach."
      },
      {
        q: "During the Explore stage, who is responsible for finding the files and context relevant to the task?",
        options: [
          "You are",
          "Claude Code, across the whole codebase",
          "A sub-agent spawned automatically",
          "GitHub"
        ],
        answer: 0,
        why: "The lesson says you yourself look for the relevant files and context (images, scripts, or documentation) and hand the results to Claude Code."
      },
      {
        q: "What does the lesson recommend for the Review stage?",
        options: [
          "Skip review if the code runs",
          "Ask Claude Code to approve its own work in the same chat",
          "Review only after pushing to GitHub",
          "Spawn a subagent with specific READ ONLY permissions"
        ],
        answer: 3,
        why: "For reviewing code, the lesson recommends spawning a subagent with READ ONLY permissions so it can give feedback without changing anything."
      },
      {
        q: "Which Markdown file does Claude Code read automatically when you start a session in a project directory?",
        options: ["package.json", "CLAUDE.md", "index.html", "README.md"],
        answer: 1,
        why: "CLAUDE.md is read automatically at the start of a session. The lesson compares it to an onboarding document for a new contributor."
      },
      {
        q: "Which command makes Claude read your project's files and generate a starting CLAUDE.md?",
        options: ["/init", "/context", "/cost", "/clear"],
        answer: 0,
        why: "/init generates a CLAUDE.md based on what Claude finds in the project, and then you customize it. /context shows what is in the context window, /cost shows token usage, and /clear discards the conversation."
      },
      {
        q: "How do you tell Claude to save a fact to CLAUDE.md in the middle of a session (memory mode)?",
        options: [
          "Start your message with @",
          "Start your message with /",
          "Start your message with !",
          "Start your message with #"
        ],
        answer: 3,
        why: "Prefixing your message with # makes Claude add the instruction to CLAUDE.md, so every future session in the project respects it."
      },
      {
        q: "Which CLAUDE.md location has global scope, applying to all of your projects?",
        options: [
          "CLAUDE.md in the project root",
          ".claude/CLAUDE.local.md",
          "~/.claude/CLAUDE.md",
          ".claude/agents/"
        ],
        answer: 2,
        why: "~/.claude/CLAUDE.md is the global file for personal habits across all projects. The project-level CLAUDE.md is committed to the repo, and .claude/CLAUDE.local.md is local and not committed."
      },
      {
        q: "Which of these is something you provide when creating a sub-agent?",
        options: [
          "A commit message",
          "A tools list",
          "A TLDraw wireframe",
          "An acceptance criteria file"
        ],
        answer: 1,
        why: "A sub-agent needs a name, description, tools list, model, and system prompt."
      },
      {
        q: "Which command shows the token usage for your current session?",
        options: ["/init", "/compact", "/clear", "/cost"],
        answer: 3,
        why: "/cost shows token usage so you can monitor what a long session has consumed. /compact summarizes history and /clear starts fresh."
      },
      {
        q: "In the Tic Tac Toe experiment, how much more context did the Vibe Coder use than the Average Joe (seen with /context)?",
        options: [
          "About 1% more",
          "About 50% more",
          "Exactly the same amount",
          "Less than the Average Joe"
        ],
        answer: 0,
        why: "The vibe coder used about 1% more context than the average joe, but the outcome was significantly better."
      }
    ]
  },

  {
    id: 2,
    title: "Quiz 2 – Understanding",
    description: "The 'why' behind the life cycle, CLAUDE.md, sub-agents, and context management.",
    questions: [
      {
        q: "Why does the lesson have you do the Explore step yourself instead of letting Claude Code search everything?",
        options: [
          "Claude Code cannot read files",
          "It keeps your context window small by avoiding Claude exploring across your entire codebase",
          "Exploring is only allowed for sub-agents",
          "It removes the need for a Plan stage"
        ],
        answer: 1,
        why: "The results of your exploration are given to Claude Code as context, which keeps the context window small instead of having it explore the whole codebase."
      },
      {
        q: "In the Plan stage, why should you research the options if you can't make an educated decision about Claude's suggestions?",
        options: [
          "Because Claude Code is not allowed to choose",
          "Because planning mode only works with research links",
          "Because research is required to use /btw",
          "Because you are responsible for the outcomes of your project, not Claude Code"
        ],
        answer: 3,
        why: "The lesson says to do your part and research, for example with /btw or a separate chat, because you are responsible for the project's outcomes."
      },
      {
        q: "Why might you use a stronger model like opus to review code that sonnet wrote?",
        options: [
          "A different, stronger reasoning model can independently review the work",
          "Two models can never disagree",
          "Opus is the only model that can use READ ONLY permissions",
          "Sonnet cannot write code"
        ],
        answer: 0,
        why: "The lesson suggests one model implements while a stronger reasoning model independently reviews, giving good quality feedback."
      },
      {
        q: "Why did the Vibe Coder get a much better result than the Average Joe, even with slightly more context used?",
        options: [
          "The Vibe Coder used a different AI model",
          "The Average Joe's game did not run at all",
          "The Vibe Coder defined the goal, planned the look, gave references, and reviewed by trying to break the game",
          "The Vibe Coder skipped the Review step"
        ],
        answer: 2,
        why: "The vibe coder gave a detailed definition, planned with a wireframe and font, gave images as references, and reviewed. The average joe only typed 'Build a tic tac toe game' and did no plan or review."
      },
      {
        q: "Why does the lesson say every project should have a CLAUDE.md?",
        options: [
          "It makes Claude Code run faster on any machine",
          "So Claude doesn't start from scratch each session and remembers the project's structure, conventions, and rules",
          "It replaces the need to write code",
          "It is required for /context to work"
        ],
        answer: 1,
        why: "Because Claude Code reads CLAUDE.md automatically, it remembers the project across multiple sessions, which the lesson calls the most important habit for working efficiently."
      },
      {
        q: "Why would you put personal notes, like machine-specific paths, in .claude/CLAUDE.local.md instead of the project CLAUDE.md?",
        options: [
          "Claude ignores the project CLAUDE.md for paths",
          "The local file loads before every other file",
          "The project CLAUDE.md cannot hold paths",
          "The local file is not committed, so it isn't shared with contributors"
        ],
        answer: 3,
        why: "The project-level CLAUDE.md is committed to the repo and shared with contributors, while CLAUDE.local.md is local and not committed."
      },
      {
        q: "Why did the session without a sub-agent end up using more context than the session with one?",
        options: [
          "Sub-agents produce shorter documentation",
          "The sub-agent session never ran the task",
          "Sub-agents run in their own context window and only their results are added to the main session",
          "Sub-agents delete the main session's history"
        ],
        answer: 2,
        why: "Both produced the same outcome, but sub-agents don't occupy the main session's context. They create their own, run their task, and only the results come back."
      },
      {
        q: "When does the lesson recommend creating a sub-agent with a prompt instead of a .md file?",
        options: [
          "When you want it to live across sessions in .claude/agents/",
          "For a one-off agent that you use once and then dump",
          "When the agent needs a tools list",
          "When the agent will be shared across many chats"
        ],
        answer: 1,
        why: "A prompt is recommended for a one-off agent. A .md file is for agents that should remain across multiple chats, placed in a .claude/agents/ directory."
      },
      {
        q: "Why doesn't the lesson suggest creating an agent for every task?",
        options: [
          "If a single prompt can handle the task effectively, it probably should; agents fit distinct, repeatable responsibilities",
          "Agents can only be used once per project",
          "Agents cannot use any tools",
          "Agents make the main session forget CLAUDE.md"
        ],
        answer: 0,
        why: "The lesson compares agents to specialized roles on a team: you create one for a specific responsibility worth separating, not just because there is more work."
      },
      {
        q: "Why do long sessions need managing with commands like /compact and /clear?",
        options: [
          "Claude Code refuses to answer after 10 prompts",
          "CLAUDE.md gets deleted over time",
          "Old decisions crowd out new ones, and Claude may respond based on earlier, incorrect assumptions",
          "Token usage is hidden unless you clear the session"
        ],
        answer: 2,
        why: "Claude holds the full conversation history, so a long history grows large and can lead to responses that reflect outdated assumptions instead of the project's current state."
      }
    ]
  },

  {
    id: 3,
    title: "Quiz 3 – Applied Scenarios",
    description: "Apply the life cycle, CLAUDE.md, sub-agents, and session commands to real situations.",
    questions: [
      {
        q: "A classmate types only 'Build a tic tac toe game', accepts whatever Claude produces, and never plays it. Which life cycle stages did they skip?",
        options: [
          "Only Commit",
          "Only Document",
          "Planning and reviewing (and they gave a very thin definition)",
          "None, because Claude Code handled them"
        ],
        answer: 2,
        why: "That matches the Average Joe: a minimal Define, no Plan, and no Review. The Vibe Coder planned, gave detailed prompts, and played the game to try to break it."
      },
      {
        q: "You have no prior software knowledge and need to figure out what needs to change for a new feature. Which Explore resource does the lesson say is key for you?",
        options: ["Documentation", "Scripts", "Commit history", "Sub-agent reports only"],
        answer: 0,
        why: "For people with no prior software knowledge, documentation is key for identifying what needs to change. Scripts are more useful if you have software knowledge or clear mapping documentation."
      },
      {
        q: "Claude Code in planning mode suggests several options and you don't understand the tradeoffs. What does the lesson say to do?",
        options: [
          "Pick the first option",
          "Switch to the Commit stage",
          "Ask Claude to skip planning",
          "Research the options, for example by asking with /btw or using a separate chat"
        ],
        answer: 3,
        why: "You should do your part and research the options. /btw or a separate chat are suggested ways to ask questions without derailing the main plan."
      },
      {
        q: "You just finished a feature and are in the Commit stage. Which pair of actions does the lesson describe?",
        options: [
          "Delete the chat and rewrite CLAUDE.md",
          "Commit to GitHub with a clear message and create a checkpoint in your chat session to revert to later",
          "Run /clear and skip committing",
          "Write documentation and spawn a new agent"
        ],
        answer: 1,
        why: "Commit has two levels: a clear commit message at the GitHub level and a checkpoint at the agent level so you can revert later."
      },
      {
        q: "You start a new session and want to confirm your CLAUDE.md was loaded. What should you do?",
        options: [
          "Run /cost and look for the file name",
          "Run /init again",
          "Run /context and look for CLAUDE.md under Memory Files",
          "Run /compact"
        ],
        answer: 2,
        why: "Typing /context in a new session shows your CLAUDE.md under a section named Memory Files. It is added to your context window as the first entry."
      },
      {
        q: "You want a reminder that your local preview runs on a non-default port, and it only applies to your machine. Where should it go?",
        options: [
          ".claude/CLAUDE.local.md",
          "The project-level CLAUDE.md",
          "~/.claude/CLAUDE.md",
          "The system prompt of a sub-agent"
        ],
        answer: 0,
        why: "Machine-specific notes belong in .claude/CLAUDE.local.md, which is not committed. The project CLAUDE.md is shared, and the global file applies to all projects."
      },
      {
        q: "You always want Claude to follow your preferred communication style in every project you work on. Where should that instruction live?",
        options: [
          "In each project's committed CLAUDE.md",
          "In .claude/CLAUDE.local.md",
          "In a sub-agent's tools list",
          "In ~/.claude/CLAUDE.md"
        ],
        answer: 3,
        why: "The global ~/.claude/CLAUDE.md is for personal habits you always want, such as output style and communication preferences, across all projects."
      },
      {
        q: "You're in the middle of a task and your context window is at about 65%. History is crowding things but you want to keep going. What does the lesson suggest?",
        options: [
          "Run /clear",
          "Run /compact",
          "Run /init",
          "Run /cost and stop working"
        ],
        answer: 1,
        why: "/compact compresses the history into a summary so you can continue. The lesson suggests compacting at around 60-70% context usage."
      },
      {
        q: "You are switching to a completely different task and your context window is above 80%. What is the best move?",
        options: [
          "/clear it and/or start a new session; CLAUDE.md is still loaded",
          "Keep going and ignore it",
          "Delete CLAUDE.md so Claude forgets",
          "Run /compact and keep the old assumptions"
        ],
        answer: 0,
        why: "/clear discards the full conversation and starts fresh, which suits a new task or drifted accuracy. CLAUDE.md is still loaded afterward."
      },
      {
        q: "Which situation is the best fit for creating a sub-agent, based on the lesson's checklist?",
        options: [
          "A one-time rename of a single variable",
          "A task you can't clearly describe yet",
          "A repeated, read-only code review that always returns a standardized report",
          "A small task a single prompt handles well"
        ],
        answer: 2,
        why: "The checklist favors a clear single responsibility, repeated use, restricted permissions like READ ONLY, and a standardized output. If you can't define the job, boundaries, tools, and output, keep the task with your primary agent."
      }
    ]
  }
];

/* ---------- DOM ---------- */
const $ = (id) => document.getElementById(id);
const screens = {
  menu: $("menu-screen"),
  question: $("question-screen"),
  results: $("results-screen")
};

/* ---------- State (in memory only) ---------- */
let currentQuiz = null;
let questions = [];   // current attempt, with shuffled options
let index = 0;
let score = 0;
let missed = [];

/* ---------- Helpers ---------- */
function show(name) {
  Object.entries(screens).forEach(([key, el]) => { el.hidden = key !== name; });
}

// Fisher–Yates shuffle (returns a new array)
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Build an attempt: shuffle options while tracking which one is correct
function prepareQuestions(quiz) {
  return quiz.questions.map((item) => ({
    q: item.q,
    why: item.why,
    options: shuffle(item.options.map((text, i) => ({ text, isCorrect: i === item.answer })))
  }));
}

/* ---------- Menu ---------- */
function renderMenu() {
  const list = $("quiz-list");
  list.innerHTML = "";
  QUIZZES.forEach((quiz) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-card";
    const title = document.createElement("strong");
    title.textContent = quiz.title;
    const desc = document.createElement("span");
    desc.textContent = `${quiz.description} (${quiz.questions.length} questions)`;
    btn.append(title, desc);
    btn.addEventListener("click", () => startQuiz(quiz));
    list.appendChild(btn);
  });
  show("menu");
}

/* ---------- Quiz flow ---------- */
function startQuiz(quiz) {
  currentQuiz = quiz;
  questions = prepareQuestions(quiz);
  index = 0;
  score = 0;
  missed = [];
  show("question");
  renderQuestion();
}

function renderQuestion() {
  const item = questions[index];
  const total = questions.length;

  $("quiz-title").textContent = currentQuiz.title;
  $("progress-text").textContent = `Question ${index + 1} of ${total}`;
  $("score-text").textContent = `Score: ${score}`;
  $("progress-bar").style.width = `${(index / total) * 100}%`;
  $("question-text").textContent = item.q;
  $("feedback").hidden = true;

  const box = $("options");
  box.innerHTML = "";
  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    const mark = document.createElement("span");
    mark.className = "mark";
    mark.textContent = String.fromCharCode(65 + i) + ".";
    const label = document.createElement("span");
    label.textContent = opt.text;
    btn.append(mark, label);
    btn.addEventListener("click", () => answer(i));
    box.appendChild(btn);
  });
}

function answer(choice) {
  const item = questions[index];
  const chosen = item.options[choice];
  const buttons = Array.from($("options").children);

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    const mark = btn.querySelector(".mark");
    if (item.options[i].isCorrect) {
      btn.classList.add("correct");
      mark.textContent = "✓";
    } else if (i === choice) {
      btn.classList.add("wrong");
      mark.textContent = "✗";
    }
  });

  if (chosen.isCorrect) {
    score++;
  } else {
    missed.push({
      q: item.q,
      yours: chosen.text,
      correct: item.options.find((o) => o.isCorrect).text,
      why: item.why
    });
  }

  $("score-text").textContent = `Score: ${score}`;
  $("progress-bar").style.width = `${((index + 1) / questions.length) * 100}%`;

  const feedback = $("feedback");
  feedback.className = `feedback ${chosen.isCorrect ? "correct" : "wrong"}`;
  $("feedback-title").textContent = chosen.isCorrect ? "✓ Correct!" : "✗ Not quite.";
  $("feedback-body").textContent = item.why;
  $("next-btn").textContent = index === questions.length - 1 ? "See results" : "Next question";
  feedback.hidden = false;
  $("next-btn").focus();
}

function next() {
  index++;
  if (index < questions.length) {
    renderQuestion();
  } else {
    renderResults();
  }
}

/* ---------- Results ---------- */
function renderResults() {
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  $("final-score").textContent = `${score} / ${total} (${pct}%)`;

  let message;
  if (score === total) message = "Perfect score! You've got a solid grasp of this lecture.";
  else if (pct >= 70) message = "Nice work. Review the questions you missed to lock it in.";
  else message = "Good start. Review the explanations below, re-read the lecture, then try again.";
  $("final-message").textContent = message;

  const review = $("review");
  const list = $("review-list");
  list.innerHTML = "";
  review.hidden = missed.length === 0;

  missed.forEach((m) => {
    const li = document.createElement("li");
    const parts = [
      ["q", m.q],
      ["yours", `Your answer: ${m.yours}`],
      ["right", `Correct answer: ${m.correct}`],
      ["why", m.why]
    ];
    parts.forEach(([cls, text]) => {
      const p = document.createElement("p");
      p.className = cls;
      p.textContent = text;
      li.appendChild(p);
    });
    list.appendChild(li);
  });

  show("results");
}

/* ---------- Wiring ---------- */
$("next-btn").addEventListener("click", next);
$("retake-btn").addEventListener("click", () => startQuiz(currentQuiz));
$("menu-btn").addEventListener("click", renderMenu);

renderMenu();
