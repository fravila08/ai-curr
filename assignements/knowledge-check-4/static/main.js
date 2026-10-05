// Knowledge Check 4 – Installing Claude Code
// Each question: { q, options: [4 strings], answer: index of correct option, why: explanation }

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1 – Recall",
    description: "Definitions and facts: models, prices, aliases, effort, and tokens.",
    questions: [
      {
        q: "Which model alias uses Opus for planning and Sonnet for execution?",
        options: ["best", "haiku", "opusplan", "fable"],
        answer: 2,
        why: "`/model opusplan` uses Opus to plan a task and Sonnet to carry it out. `best` picks Fable where available, otherwise Opus."
      },
      {
        q: "According to the lesson's pricing table, what does Sonnet 5.5 cost per million tokens?",
        options: ["$2 input / $10 output", "$1 input / $5 output", "$4 input / $20 output", "$10 input / $50 output"],
        answer: 0,
        why: "Sonnet 5.5 is the mid-tier model at $2 input and $10 output per MTok. Haiku is $1/$5, Opus 5.5 is $4/$20, and Fable 5.1 is $10/$50."
      },
      {
        q: "Which Claude model in the lesson has a smaller, 200K context window?",
        options: ["Fable 5.1", "Opus 5.5", "Sonnet 5.5", "Haiku 4.5"],
        answer: 3,
        why: "Haiku 4.5 has a 200K context window, while Fable 5.1, Opus 5.5, and Sonnet 5.5 are listed with 1M."
      },
      {
        q: "Which command, run on its own inside Claude Code, opens an interactive model picker?",
        options: ["/output-style", "/model", "claude update", "/effort"],
        answer: 1,
        why: "Running `/model` on its own opens the picker. `/output-style` configures how Claude Code communicates, and `claude update` updates your install."
      },
      {
        q: "What is the lesson's rough rule of thumb for tokens?",
        options: [
          "1 token is exactly 1 word",
          "1 token is exactly 1 character",
          "1 token is about 4 characters, or about 0.75 words",
          "1 token is about 10 characters"
        ],
        answer: 2,
        why: "A token is something between a character and a word: roughly 4 characters or 0.75 words."
      },
      {
        q: "Which effort level is the default in Claude Code?",
        options: ["Medium", "Low", "High", "Learning"],
        answer: 0,
        why: "Medium gives balanced exploration and reads relevant context, and it is the default. Low is for quick lookups and High is for comprehensive analysis."
      },
      {
        q: "Which output style offers maximum transparency, explaining every action and surfacing trade-offs?",
        options: ["Default", "Explanatory", "Concise", "Learning"],
        answer: 3,
        why: "Learning explains every action and connects decisions to concepts. Explanatory explains the reasoning behind decisions, and Default is concise."
      },
      {
        q: "What discount does the Batch API give for non-interactive, high-volume work?",
        options: ["10% off input only", "50% off input and output tokens", "90% off output only", "It is free"],
        answer: 1,
        why: "Batch processing gives a 50% discount on input and output tokens. The roughly 10% figure in the lesson refers to cached reads under prompt caching."
      },
      {
        q: "In the model picker, which key applies your choice to the current session only?",
        options: ["Enter", "Escape", "s", "Tab"],
        answer: 2,
        why: "Pressing `s` applies the model to the current session only. Pressing `Enter` saves it as your default."
      },
      {
        q: "Which command do you run inside Claude Code to switch to the Learning output style?",
        options: ["/output-style", "/model learning", "/effort learning", "/learn"],
        answer: 0,
        why: "Run `/output-style` inside Claude Code and select Learning. `/model` is for choosing models."
      }
    ]
  },

  {
    id: 2,
    title: "Quiz 2 – Understanding",
    description: "The 'why' behind model choice, cost, effort, and context.",
    questions: [
      {
        q: "Why do long conversations become expensive?",
        options: [
          "Your latest message is always very large",
          "Every message resends the full conversation history as context",
          "Output tokens are always larger than input tokens",
          "The model gets slower and charges by the minute"
        ],
        answer: 1,
        why: "The cost comes from the history, not your latest message: every message resends the whole conversation as context. Output tokens are usually much smaller than input."
      },
      {
        q: "Why does the lesson describe Fable as a tool to reach for after a cheaper model has hit its ceiling, rather than a starting point?",
        options: [
          "It is only available offline",
          "It cannot handle multi-file tasks",
          "It has a smaller context window than Haiku",
          "It costs 2.5x Opus 5.5 per token and is best for the hardest problems"
        ],
        answer: 3,
        why: "Fable is the most capable but the most expensive at $10/$50 per MTok, which is 2.5x Opus 5.5. Routine tasks don't justify that cost."
      },
      {
        q: "Why is `opusplan` a useful hybrid?",
        options: [
          "It puts Opus's stronger reasoning into the plan, while the bulk of the work (the edits) runs at closer to Sonnet's price",
          "It runs both models on every step and averages the answers",
          "It makes every request free",
          "It switches to a local model for planning"
        ],
        answer: 0,
        why: "Planning is where stronger reasoning matters most, and the edits are the bulk of the work. Using Sonnet for execution keeps the cost closer to Sonnet's price."
      },
      {
        q: "Why does higher effort cost more?",
        options: [
          "The model type changes to Fable automatically",
          "Higher effort disables prompt caching",
          "It means more tool calls, which means more tokens consumed",
          "Higher effort sends your code to a different server"
        ],
        answer: 2,
        why: "The lesson's chain is: higher effort = more tool calls = more tokens consumed = higher cost. That's why you should use High intentionally."
      },
      {
        q: "Why are aliases like `sonnet` and `opus` convenient?",
        options: [
          "They lock you to one exact version forever",
          "They always point at the latest version of that model family, so they keep working as new versions ship",
          "They make the model free to use",
          "They change the model's context window"
        ],
        answer: 1,
        why: "Aliases always point at the latest version of that family. That means you don't need to relearn model names with each release."
      },
      {
        q: "Why is Claude Code's terminal-first, transparent loop a good fit for this course?",
        options: [
          "You see every file read, tool call, and decision, which is intentional for learning",
          "It hides the agent loop so you can focus on results",
          "It only runs when you are offline",
          "It avoids using MCP servers"
        ],
        answer: 0,
        why: "Claude Code surfaces its agent loop as it works, so you can see what the agent is doing. That transparency helps you learn the architecture."
      },
      {
        q: "Why does prompt caching make long conversations cheaper than the raw token math suggests?",
        options: [
          "It deletes old messages from the conversation",
          "It switches you to Haiku after a few turns",
          "It removes output token charges",
          "Cached reads of the resent history cost only a fraction of normal input, about 10% for most models"
        ],
        answer: 3,
        why: "Claude Code caches the history it resends each turn, and cached reads cost about 10% of normal input for most models (even less for Opus 5.5 and Fable 5.1)."
      },
      {
        q: "Why is Haiku a good fit for programmatic workflows?",
        options: [
          "It has the deepest reasoning of all models",
          "It has the largest context window",
          "You make many small calls where cost compounds quickly, and its low price helps",
          "It is the only model that supports aliases"
        ],
        answer: 2,
        why: "Haiku is the low-cost tier, good for simple, high-volume calls. It struggles with tasks needing reasoning, context, or judgment."
      },
      {
        q: "What does the lesson's chest-of-coins analogy say about your context window?",
        options: [
          "Fill it with as much text as possible",
          "Keep it free of text that adds no value, since every word adds more coins to the chest and you want mostly gold",
          "Empty it after every single message",
          "Only silver and bronze coins are billed"
        ],
        answer: 1,
        why: "The context window should never be over-populated with text that doesn't bring value to the conversation. Every word you use adds more to it."
      },
      {
        q: "Why is a local model like Qwen3-Code a good choice for practice, and when should you avoid it?",
        options: [
          "It has no billing pressure and works offline, but it lags commercial models on hard problems",
          "It beats every commercial model on hard problems",
          "It is the fastest way to do production debugging",
          "It is free but requires an Anthropic API key"
        ],
        answer: 0,
        why: "A local model costs nothing beyond your machine's CPU/RAM and needs no internet. Local models at this size still lag commercial models on complex tasks."
      }
    ]
  },

  {
    id: 3,
    title: "Quiz 3 – Applied Scenarios",
    description: "Pick the right model, effort, and settings for real situations.",
    questions: [
      {
        q: "You are writing a script that makes thousands of tiny calls for syntax checks. Which model fits best?",
        options: ["Fable 5.1", "Haiku 4.5", "Opus 5.5", "Sonnet 5.5 with High effort"],
        answer: 1,
        why: "Haiku is built for simple lookups, syntax checks, and high-volume scripted usage, where cost compounds quickly."
      },
      {
        q: "You tried Sonnet on a problem involving multi-step reasoning across a large context, and its answers were vague and inconsistent. What is the sensible next step?",
        options: [
          "Move up to Opus 5.5",
          "Move down to Haiku",
          "Turn effort to Low",
          "Switch to the Default output style"
        ],
        answer: 0,
        why: "Vague or inconsistent answers are the sign that you've hit Sonnet's ceiling. Opus is reserved for problems that genuinely require it."
      },
      {
        q: "A huge multi-file refactor has defeated the cheaper models and your budget allows a stronger one. What do you do?",
        options: [
          "Wait, because Fable is the default on every plan",
          "Use the Batch API to get a better model",
          "Select it explicitly with `/model fable` (needs Claude Code v2.1.257 or later)",
          "Switch to Qwen3-Code"
        ],
        answer: 2,
        why: "Fable is never the default, so you choose it explicitly, and it needs v2.1.257 or later. Local models lag on hard tasks, so Qwen3-Code wouldn't help here."
      },
      {
        q: "You have joined a project and need to understand an unfamiliar codebase. Which effort level does the lesson suggest?",
        options: [
          "Low, to read as little as possible",
          "Medium, because it is always best",
          "Whatever is cheapest",
          "High, for comprehensive analysis and broad exploration"
        ],
        answer: 3,
        why: "High is for understanding an unfamiliar codebase, complex bugs, and refactors with a large blast radius. Remember it uses more tool calls and tokens."
      },
      {
        q: "You want Claude Code to explain what it is doing at each step and connect decisions to concepts. What should you set up?",
        options: [
          "Set the effort level to Low",
          "Run `/output-style` and select Learning",
          "Switch to Haiku",
          "Run `claude update`"
        ],
        answer: 1,
        why: "Learning mode explains every action and why, which is the difference between using a tool and understanding it."
      },
      {
        q: "You are practicing without internet access and don't want any billing. What is the right setup?",
        options: [
          "Route Claude Code through a local model such as Qwen3-Code",
          "Use Haiku 4.5, since it is free",
          "Use Sonnet 5.5 with Low effort",
          "Use the Batch API"
        ],
        answer: 0,
        why: "Qwen3-Code runs locally with no API costs and no internet required. Haiku is the cheapest Claude model but still costs $1/$5 per MTok."
      },
      {
        q: "You want to try Opus for just this one session without changing your saved default. What do you do in the picker?",
        options: [
          "Press Enter",
          "Reinstall Claude Code",
          "Press s to apply it to the current session only",
          "Type /output-style"
        ],
        answer: 2,
        why: "Pressing `s` applies the choice to this session only, while `Enter` saves it as your default."
      },
      {
        q: "You paste a 1,000-word essay into a prompt. Roughly how many tokens is that?",
        options: ["About 100", "About 750", "About 4,000", "About 1,300"],
        answer: 3,
        why: "At about 0.75 words per token, a 1,000-word essay is approximately 1,300 tokens."
      },
      {
        q: "While using Fable, a request in a sensitive area (such as cybersecurity) is declined by its safety classifiers. What happens?",
        options: [
          "Claude Code crashes and must be reinstalled",
          "Claude Code automatically falls back to another model, and you can use /model to switch back",
          "Your subscription is cancelled",
          "The request is silently sent to Haiku forever"
        ],
        answer: 1,
        why: "Fable's classifiers can occasionally decline a request, in which case Claude Code automatically falls back to another model. Use `/model` to switch back."
      },
      {
        q: "A nightly job processes a huge volume of documents and no one is waiting for interactive replies. How can you cut its cost?",
        options: [
          "Use High effort for every document",
          "Resend the entire history with each call",
          "Use the Batch API for a 50% discount on input and output tokens",
          "Always use Fable 5.1"
        ],
        answer: 2,
        why: "Batch processing is meant for non-interactive, high-volume work and gives a 50% discount on both input and output tokens."
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
