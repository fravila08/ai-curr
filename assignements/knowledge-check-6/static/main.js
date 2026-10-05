// Knowledge Check 6 – More out of Claude Code
// Each question: { q, options: [4 strings], answer: index of correct option, why: explanation }

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1 – Recall",
    description: "Definitions and facts: Planning Mode, MCP, Playwright, and the QA agent.",
    questions: [
      {
        q: "What is Planning Mode in Claude Code?",
        options: [
          "A mode where Claude automatically writes all the code without asking anything",
          "A read-only mode where Claude can ask questions and come up with a plan for implementation",
          "A mode that deletes old sessions to save context",
          "A mode that opens a browser and tests your site"
        ],
        answer: 1,
        why: "Planning Mode is a READ only mode that lets Claude Code use your context, decide if it needs more, and ask multiple questions to build a plan. Writing code happens later, in the Code stage."
      },
      {
        q: "How do you place Claude Code into Planning Mode?",
        options: [
          "Press shift + tab on the main session until you see plan in the lower left corner",
          "Type /mcp in the session",
          "Start the session with claude -c",
          "Hold cmd and click the plan file path"
        ],
        answer: 0,
        why: "You press shift + tab on the main session until plan shows in the lower left corner. /mcp lists MCP servers, claude -c continues a session, and cmd + click opens the generated plan file."
      },
      {
        q: "Which option lists the lesson's life cycle in the correct order?",
        options: [
          "Plan, Define, Explore, Code, Commit, Review",
          "Define, Plan, Explore, Review, Code, Commit",
          "Explore, Define, Code, Plan, Review, Commit",
          "Define, Explore, Plan, Code, Review, Commit"
        ],
        answer: 3,
        why: "The lesson revisits the life cycle Define >> Explore >> Plan >> Code >> Review >> Commit and improves how each stage is approached."
      },
      {
        q: "What does MCP stand for?",
        options: [
          "Managed Code Pipeline",
          "Multi-Context Prompt",
          "Model Context Protocol",
          "Machine Control Process"
        ],
        answer: 2,
        why: "MCP is the Model Context Protocol, an open protocol that defines how external tools communicate with Claude Code."
      },
      {
        q: "Which three forms can MCP servers expose to Claude?",
        options: [
          "Files, folders, and branches",
          "Tools, resources, and prompts",
          "Agents, models, and sessions",
          "Plans, docs, and commits"
        ],
        answer: 1,
        why: "MCP servers can expose tools (functions Claude can call), resources (external data Claude can read), and prompts (pre-written prompt templates). Most servers in practice expose tools."
      },
      {
        q: "Which command installs the Playwright MCP server?",
        options: [
          "npm install playwright-claude",
          "claude -c playwright",
          "/mcp install playwright",
          "claude mcp add playwright npx @playwright/mcp@latest"
        ],
        answer: 3,
        why: "You exit your session and run claude mcp add playwright npx @playwright/mcp@latest in your terminal. The lesson says it only needs to happen once."
      },
      {
        q: "What does the -c flag in claude -c stand for?",
        options: [
          "Continue, reopening your most recently closed session with its context",
          "Clear, wiping the session context",
          "Configure, opening the MCP settings",
          "Create, starting a brand new agent"
        ],
        answer: 0,
        why: "-c stands for continue, so Claude Code reopens your most recently closed session while maintaining its context."
      },
      {
        q: "Which command shows the MCP servers available in your session, including playwright under Local MCPs?",
        options: ["/btw", "/plan", "/mcp", "/agents"],
        answer: 2,
        why: "Running /mcp shows a section of Local MCPs where you will see playwright displayed. /btw is for side questions."
      },
      {
        q: "Which model does the lesson's qa-agent use?",
        options: ["sonnet", "haiku", "a model chosen at random", "opus"],
        answer: 3,
        why: "The qa-agent's model is set to opus rather than sonnet, to give it more power for review work."
      },
      {
        q: "Which entry in the qa-agent's tools list gives it access to the Playwright MCP tools?",
        options: [
          "mcp__playwright__*",
          "browser_navigate only",
          "playwright_agent",
          "claude_in_chrome"
        ],
        answer: 0,
        why: "The agent's tools list contains mcp__playwright__*, which makes the Playwright MCP tools available to it."
      }
    ]
  },

  {
    id: 2,
    title: "Quiz 2 – Understanding",
    description: "The 'why' behind documentation, context, MCP, and delegating to agents.",
    questions: [
      {
        q: "Why does the lesson recommend reading your own docs instead of asking Claude to scan a large codebase during Explore?",
        options: [
          "Claude Code cannot read source files",
          "Docs are always more accurate than code",
          "Scanning hundreds or thousands of lines of code can use an immense amount of tokens before work even starts",
          "Claude Code refuses to explore projects that have documentation"
        ],
        answer: 2,
        why: "Having Claude scan a big project wastes tokens before it starts developing your feature. Since Claude generated the docs and you own the project, you can read them to find the impacted files yourself."
      },
      {
        q: "Why put the @ symbol in front of a file in your prompt?",
        options: [
          "It points Claude directly at the file, so it does not search the whole codebase and use extra context",
          "It makes Claude Code run the file",
          "It switches Claude into Planning Mode",
          "It saves the file to the plan folder"
        ],
        answer: 0,
        why: "Without the @ symbol, Claude Code will search through the entire codebase and occupy unnecessary additional context. With @, you hand over exactly the files you found in the docs."
      },
      {
        q: "Why is the /btw command useful during Planning Mode?",
        options: [
          "It approves the plan automatically",
          "It exits Planning Mode",
          "It installs an MCP server",
          "It lets you ask extra questions without diluting your current session's context window"
        ],
        answer: 3,
        why: "If you want more information to make an educated decision, /btw lets you ask without adding to the main session's context."
      },
      {
        q: "Why does the author use auto mode for the Code stage?",
        options: [
          "Auto mode produces bug-free code",
          "They do not yet have the knowledge to properly approve each change themselves",
          "Auto mode is the only mode that can edit index.html",
          "Planning Mode cannot create plans"
        ],
        answer: 1,
        why: "The lesson says that at this point students lack the knowledge to properly approve the plan, so auto mode is used to generate the changes."
      },
      {
        q: "Why does the lesson say manually reviewing every feature after every change is a problem?",
        options: [
          "Manual testing can never find bugs",
          "Claude Code forbids manual testing",
          "It is very time consuming, since layout, turns, both game modes, the modal, and restart all need checking",
          "Manual testing deletes the context window"
        ],
        answer: 2,
        why: "Checking everything by hand each time wastes a lot of time. The lesson still says manual testing has its place for finding bugs, but not for every feature after every change."
      },
      {
        q: "Without MCP, why can't Claude check that your site's navigation links work?",
        options: [
          "It can only reason about your files and cannot run the site, open a browser, or click through the menu",
          "It does not understand HTML links",
          "Links are only testable in Planning Mode",
          "It needs an API key first"
        ],
        answer: 0,
        why: "Without MCP, Claude can only reason about your files. With Playwright MCP installed it can open a real browser, navigate, interact, and report back."
      },
      {
        q: "When Claude uses an MCP tool, how does that differ from any other tool call?",
        options: [
          "Claude Code itself performs the action in the browser",
          "The MCP server, not Claude Code itself, executes the underlying action",
          "It looks completely different from Claude's point of view",
          "The result is never returned to Claude"
        ],
        answer: 1,
        why: "From Claude's perspective an MCP tool call looks the same as any other. The difference is that the MCP server runs as a separate process, communicates over standard input/output with a JSON protocol, and executes the action."
      },
      {
        q: "Why does the lesson choose opus instead of sonnet for the qa-agent?",
        options: [
          "Sonnet cannot use MCP tools",
          "Opus is cheaper to run",
          "Opus is the only model that can take screenshots",
          "Its job is review with client related interactions, so a more powerful model is worth it"
        ],
        answer: 3,
        why: "The lesson says since the agent's job is to review and it has client related interactions, we level up the model to increase its power."
      },
      {
        q: "What is the relationship between Playwright and the Playwright MCP server?",
        options: [
          "Playwright is a type of Claude model",
          "The MCP server replaces Playwright with a different framework",
          "Playwright is a browser automation framework, and the MCP server wraps its capabilities as tools Claude can use",
          "They are two names for the same command"
        ],
        answer: 2,
        why: "Playwright can open real browsers, navigate, click, fill forms, and take screenshots. The Playwright MCP server wraps those abilities as MCP tools and makes them available to Claude."
      },
      {
        q: "Why does the lesson prefer delegating the QA work to an agent instead of doing it in the main session?",
        options: [
          "Agents are the only way to edit files",
          "The agent's exploration stays out of the main context window, so only the findings you need are added",
          "Agents never make mistakes",
          "The main session cannot use MCP tools"
        ],
        answer: 1,
        why: "The author notes their own context window isn't diluted by the QA agent's explorations. Only what they need comes back, which let the session finish with about 7% of the context window used."
      }
    ]
  },

  {
    id: 3,
    title: "Quiz 3 – Applied Scenarios",
    description: "Use the workflow, Planning Mode, Playwright MCP, and the QA agent in real situations.",
    questions: [
      {
        q: "You inherit a project with thousands of lines of code and want to add a small feature. According to the lesson, what should you do first?",
        options: [
          "Ask Claude Code to read every file and summarize it",
          "Read the project's documentation, such as the README project layout, to find the files that will be impacted",
          "Delete the project and start over",
          "Install an MCP server before reading anything"
        ],
        answer: 1,
        why: "Read the docs and work out which parts of the project are affected. That keeps you from spending tokens on a full scan, and tells you which files to hand to Claude."
      },
      {
        q: "Your README says index.html holds the page structure and script.js holds rules, turns, and scoring. You want a winner pop-up that restarts the game when closed. Which files do you give Claude as context?",
        options: [
          "style.css and the wireframe image only",
          "CLAUDE.md only",
          "The whole docs folder",
          "index.html and script.js"
        ],
        answer: 3,
        why: "The layout shows index.html for what is on the page and script.js for behavior, so both are needed for the pop-up and the restart logic. style.css only controls looks."
      },
      {
        q: "While reviewing Claude's questions in Planning Mode, you want to ask something about an option without bloating your session context. What do you use?",
        options: [
          "/btw",
          "claude -c",
          "/mcp",
          "shift + tab again to leave plan mode"
        ],
        answer: 0,
        why: "/btw lets you ask additional questions without diluting your current session's context window."
      },
      {
        q: "You just ran claude mcp add playwright npx @playwright/mcp@latest after exiting your session. How do you get back into your previous work with its context intact?",
        options: [
          "Start a new session and re-explain everything",
          "Run /btw",
          "Run claude -c to continue the most recently closed session",
          "Reinstall Playwright in every project"
        ],
        answer: 2,
        why: "claude -c reopens your most recent session with its context. The install is global, so all sessions will have Playwright available."
      },
      {
        q: "You ask Claude to read a page and tell you what words are visible on it. Which Playwright MCP tool fits best?",
        options: [
          "browser_click",
          "browser_type",
          "browser_wait_for",
          "browser_get_text"
        ],
        answer: 3,
        why: "browser_get_text returns the visible text of a page or element. browser_click clicks, browser_type types into inputs, and browser_wait_for waits for an element to appear."
      },
      {
        q: "You want your main Claude session to use the qa-agent on your running game. What two things do you give it?",
        options: [
          "The location (URL) of the project and the list of features to test",
          "The model name and the context window size",
          "A screenshot and a commit message",
          "The plan file and the CLAUDE.md file"
        ],
        answer: 0,
        why: "The qa-agent takes two arguments: the Browser URL where the project is hosted and a Feature List to test with Playwright MCP. In the lesson the feature list comes from the README."
      },
      {
        q: "The QA agent found that pressing Restart during the computer's short pause could place a stray Goku mark on the new board. What was the cause and fix?",
        options: [
          "The CSS hid the board, so the styles were rewritten",
          "The computer move timer was never cancelled, so reset() was changed to cancel it",
          "The favicon was missing, so an icon was added",
          "The README was outdated, so it was rewritten"
        ],
        answer: 1,
        why: "The computer move timer was never cancelled. Now reset() cancels it, and the pop-up timer is cancelled the same way."
      },
      {
        q: "The QA agent flagged that keyboard users lost their place after making a move. What did the lesson's fix do?",
        options: [
          "It removed all buttons from the page",
          "It made the board read-only",
          "It moves focus to the first free cell after a move instead of losing it",
          "It sent focus to the Restart button on every move"
        ],
        answer: 2,
        why: "The lesson's accessibility fixes included moving focus to the first free cell after a move, instead of it being lost."
      },
      {
        q: "A classmate says that once an MCP and QA agent are set up, you never need to review your app yourself. How does the lesson respond?",
        options: [
          "They are right, review is no longer needed",
          "Review should happen only before the first commit",
          "Only the agent should ever read the results",
          "Automation does not remove the need to review; it adds a layer of support to make review more consistent and efficient"
        ],
        answer: 3,
        why: "The conclusion says automation does not eliminate the need to review our application. It gives another layer of support for performing that review more consistently and efficiently."
      },
      {
        q: "Claude Code finishes planning in Planning Mode and tells you where the plan is stored. How can you read it?",
        options: [
          "Hold cmd and click the file path, or scroll up and read Claude's output",
          "Run claude mcp add on the plan file",
          "Wait for the QA agent to print it",
          "You cannot read plans, only approve them"
        ],
        answer: 0,
        why: "The lesson says to hold cmd and click the file path to view the plan, or scroll up and read the output from Claude."
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
