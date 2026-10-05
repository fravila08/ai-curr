// Knowledge Check 3 – Intro to Coding Agents
// Each question: { q, options: [4 strings], answer: index of correct option, why: explanation }

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1 – Recall",
    description: "Definitions and facts: coding agents, MCP, tools, and the four components.",
    questions: [
      {
        q: "What is a coding agent?",
        options: [
          "A large language model trained only on source code",
          "Software that wraps an LLM in an autonomous loop and gives it tools to act in your development environment",
          "A plugin that only autocompletes the next line of code",
          "A database of code snippets the LLM searches"
        ],
        answer: 1,
        why: "A coding agent is software that wraps an LLM in an autonomous loop with access to tools. The LLM is only one part of it."
      },
      {
        q: "Which coding agent from the lesson is described as a terminal-based agent made by Anthropic?",
        options: ["GitHub Copilot", "Cursor", "Gemini Code Assist", "Claude Code"],
        answer: 3,
        why: "Claude Code is Anthropic's terminal-based agent. Copilot (Microsoft / OpenAI) and Gemini Code Assist (Google) focus on IDE integration, and Cursor is a full IDE replacement."
      },
      {
        q: "Which agent does the lesson list as a full IDE replacement with codebase-wide context?",
        options: ["Cursor", "Claude Code", "GitHub Copilot", "Gemini Code Assist"],
        answer: 0,
        why: "Cursor is the full IDE replacement, known for codebase-wide context and fast edits."
      },
      {
        q: "What does MCP stand for?",
        options: [
          "Machine Coding Process",
          "Multi-Context Prompting",
          "Model Context Protocol",
          "Managed Command Pipeline"
        ],
        answer: 2,
        why: "MCP is the Model Context Protocol, an open standard created by Anthropic that defines how LLMs communicate with external tools and data sources."
      },
      {
        q: "What is an MCP server?",
        options: [
          "A cloud machine that hosts the LLM",
          "A process that wraps a capability, such as filesystem access or a database, and exposes it through the standard protocol",
          "A website where you download coding agents",
          "The window where you type your task"
        ],
        answer: 1,
        why: "An MCP server wraps a capability (filesystem, database, web browser) and exposes it through the standard protocol. The LLM just calls it by name with parameters."
      },
      {
        q: "How many components does the lesson say every coding agent is built from?",
        options: ["Two", "Three", "Five", "Four"],
        answer: 3,
        why: "Every coding agent is built from four components: the coding agent (orchestrator), MCP, the agent tools, and the large language model."
      },
      {
        q: "Which of these is listed as a Version Control tool example?",
        options: [
          "Git status, diff, commit, branch",
          "Read file, write file, list directory",
          "Run bash command, start/stop processes",
          "Get diagnostics, navigate to definition"
        ],
        answer: 0,
        why: "Git status, diff, commit, and branch are Version Control tools. Reading files is Filesystem, bash commands are Terminal, and diagnostics are IDE tools."
      },
      {
        q: "In the agent loop, what are the two things the LLM generates?",
        options: [
          "A summary or a translation",
          "A prompt or a system message",
          "A tool call or a final response",
          "A file or a directory"
        ],
        answer: 2,
        why: "Inside the loop the LLM generates either a tool call (I need more information) or a final response (I've gathered enough context)."
      },
      {
        q: "Which local-model option does the lesson mention for Claude Code so you can work without API costs?",
        options: ["Copilot Chat", "Gemini Nano", "GPT-4o", "Ollama"],
        answer: 3,
        why: "Claude Code works with local models through Ollama, so you can operate without API costs."
      },
      {
        q: "Which pattern are modern LLMs such as Claude, GPT-4o, and Gemini fine-tuned for in the agent setting?",
        options: [
          "Image generation",
          "Tool use",
          "Spell checking",
          "Database indexing"
        ],
        answer: 1,
        why: "Modern LLMs are fine-tuned for tool use. They understand they are inside a loop and have learned when to gather information versus when to act."
      }
    ]
  },

  {
    id: 2,
    title: "Quiz 2 – Understanding",
    description: "The 'why' behind the agent loop, MCP, and the split between agent and LLM.",
    questions: [
      {
        q: "Why is a coding agent not the same thing as an LLM?",
        options: [
          "The agent is the orchestration layer that manages the loop and tools, while the LLM is the reasoning core it uses",
          "The agent is a smaller, faster version of the LLM",
          "The LLM only works in terminals, while the agent works in IDEs",
          "The agent stores the LLM's training data"
        ],
        answer: 0,
        why: "The LLM decides what to do next, while the agent manages the loop, invokes tools, feeds results back, and decides when the task is complete."
      },
      {
        q: "What changes when you swap the LLM (for example Claude to a local Qwen model) inside an agent?",
        options: [
          "The agent must be rewritten from scratch",
          "The tools stop working",
          "Only the reasoning quality changes, since the orchestration logic stays the same",
          "The agent can no longer read files"
        ],
        answer: 2,
        why: "The orchestration logic doesn't change when you swap the LLM. Only the quality of the reasoning does."
      },
      {
        q: "What is the key difference between a chatbot and a coding agent?",
        options: [
          "A chatbot can only be used in a terminal",
          "A coding agent never uses natural language",
          "A chatbot loops until done, while a coding agent answers once",
          "A coding agent generates tool calls and loops until the task is done, while a chatbot responds and waits"
        ],
        answer: 3,
        why: "A chatbot responds and waits for the next input with no environment access. A coding agent responds, acts, observes the result, and continues until the task is complete."
      },
      {
        q: "Why does the lesson compare MCP to USB?",
        options: [
          "MCP transfers files faster than USB",
          "Like USB replaced a different port and driver per peripheral, MCP gives one standard interface between any compatible LLM and any compatible tool",
          "MCP only works with hardware devices",
          "Both were created by Anthropic"
        ],
        answer: 1,
        why: "Before MCP, every AI tool had its own custom integration, like peripherals needing different ports. MCP standardizes the interface so any compatible LLM can use any compatible tool."
      },
      {
        q: "In the agent loop, what happens when the LLM returns text with no tool call?",
        options: [
          "The agent restarts the loop",
          "The agent treats the task as complete and returns the response to the user",
          "The agent asks the MCP server for permission",
          "The agent deletes the conversation history"
        ],
        answer: 1,
        why: "Text with no tool call signals that the task is complete, so the response goes back to the user. A tool call would be executed and its result appended to the context."
      },
      {
        q: "Why does the LLM never directly touch your filesystem?",
        options: [
          "Because MCP servers execute the tool call and return the result as text, so the LLM only sees text representations",
          "Because LLMs cannot read text",
          "Because the filesystem is stored in the cloud",
          "Because the IDE blocks all file access"
        ],
        answer: 0,
        why: "When the LLM generates a call like read_file, the MCP server intercepts it, reads the real file, and returns the content as text."
      },
      {
        q: "Why does the lesson say the ecosystem of things an agent can do grows independently of the LLM powering it?",
        options: [
          "Because LLMs are retrained every day",
          "Because agents write their own tools automatically",
          "Because tools are tied to one specific LLM",
          "Because MCP standardizes how tools connect, so new MCP servers work regardless of which LLM is used"
        ],
        answer: 3,
        why: "Since MCP standardizes the tool interface, new tools can be added without depending on any particular LLM."
      },
      {
        q: "According to the lesson, what determines what Claude Code can do autonomously?",
        options: [
          "The size of your monitor",
          "Which MCP servers are active",
          "Only the model's context length",
          "The programming language of your project"
        ],
        answer: 1,
        why: "The tools Claude has access to, and therefore what it can do on its own, are determined entirely by which MCP servers are active."
      },
      {
        q: "Why was each agent a 'walled garden' before MCP?",
        options: [
          "Agents refused to share code",
          "LLMs could not call any functions",
          "Every AI tool built its own custom integration format for files, databases, and web search",
          "Tools were only available on Windows"
        ],
        answer: 2,
        why: "Each tool used a different format for reading files, querying databases, and searching the web, so integrations could not be shared across agents."
      },
      {
        q: "How do Claude Code, Cursor, and Copilot differ, according to the lesson?",
        options: [
          "They use different loops that cannot be compared",
          "They differ in which tools they expose and how much of the loop they surface to you",
          "Only one of them uses an LLM",
          "Only one of them can read files"
        ],
        answer: 1,
        why: "All three implement the same loop. They differ in the tools they expose and how much of the loop they show you."
      }
    ]
  },

  {
    id: 3,
    title: "Quiz 3 – Applied Scenarios",
    description: "Apply the agent loop, tool categories, and agent choice to real situations.",
    questions: [
      {
        q: "You tell a coding agent, 'fix the bug in auth.py'. Which sequence best describes what happens under the hood?",
        options: [
          "It prints a guess and stops",
          "It reads the file, analyzes the code, writes a fix, runs the tests, checks the output, and iterates if tests fail",
          "It sends auth.py to a database and waits",
          "It asks you to open the file and paste the code"
        ],
        answer: 1,
        why: "A task triggers a loop of read, analyze, write, test, and check. If the tests fail, the agent iterates."
      },
      {
        q: "You work mostly inside VS Code and want AI help there. According to the decision tree, which agents fit?",
        options: [
          "Claude Code only",
          "Cursor only",
          "GitHub Copilot or Gemini Code Assist",
          "None, since IDEs are not supported"
        ],
        answer: 2,
        why: "If you work primarily in VS Code or JetBrains, the tree points to GitHub Copilot or Gemini Code Assist."
      },
      {
        q: "You do not use VS Code or JetBrains and want a terminal-first workflow with deep tool integration. Which agent does the tree recommend?",
        options: ["Cursor", "GitHub Copilot", "Gemini Code Assist", "Claude Code"],
        answer: 3,
        why: "A terminal-first, agentic workflow with deep tool integration leads to Claude Code. Cursor is for those who want a full IDE built around AI."
      },
      {
        q: "Your agent needs to run the test suite and start a dev server. Which tool category covers this?",
        options: [
          "Terminal, such as running bash commands and starting or stopping processes",
          "Web, such as fetching URLs",
          "Version Control, such as git commit",
          "Filesystem, such as listing directories"
        ],
        answer: 0,
        why: "Running commands and starting or stopping processes falls under the Terminal category. Web fetches URLs, and Filesystem reads and writes files."
      },
      {
        q: "Your agent needs to look up the latest documentation for a library. Which tool category does it use?",
        options: ["IDE", "Web", "Version Control", "Filesystem"],
        answer: 1,
        why: "Searching documentation and fetching URLs are Web tools. IDE tools provide diagnostics and navigation instead."
      },
      {
        q: "A company wants its agent to work in a Google Cloud and Workspace environment. Which agent from the lesson highlights that strength?",
        options: [
          "Cursor",
          "Claude Code",
          "Gemini Code Assist",
          "GitHub Copilot"
        ],
        answer: 2,
        why: "Gemini Code Assist's notable strength is Google Cloud and Workspace integration. Copilot's is deep GitHub integration and PR reviews."
      },
      {
        q: "A teammate says, 'The agent read my file directly from disk.' How would you correct this using the lesson?",
        options: [
          "The LLM has root access to the disk",
          "The file was uploaded when the LLM was trained",
          "The IDE sends the disk to the cloud",
          "The LLM issued a tool call, and an MCP server read the file and returned its content as text"
        ],
        answer: 3,
        why: "The LLM never touches the filesystem. It makes a tool call, the MCP server does the real work, and the LLM sees only the returned text."
      },
      {
        q: "You want your agent to also query a database it cannot currently reach. Following the MCP idea, what is the natural approach?",
        options: [
          "Retrain the LLM on your database",
          "Switch to a chatbot",
          "Connect an MCP server that wraps the database and expose it to the agent as a tool",
          "Paste the whole database into the prompt"
        ],
        answer: 2,
        why: "An MCP server wraps a capability such as a database and exposes it through the standard protocol, so the agent can call it by name."
      },
      {
        q: "You are working on a laptop with no budget for API usage but still want to use Claude Code. What does the lesson suggest?",
        options: [
          "Use it with a local model through Ollama",
          "Switch to a chatbot with no tools",
          "Wait until you can pay for the API",
          "Use Cursor, which is always free"
        ],
        answer: 0,
        why: "Claude Code works with local models through Ollama, so you can operate without API costs."
      },
      {
        q: "An agent has just received a tool result showing that a test failed. According to the loop, what happens next?",
        options: [
          "The agent immediately returns the failure as the final answer",
          "The result is appended to the context and sent back to the LLM, which decides the next step",
          "The agent shuts down the MCP server",
          "The user must restart the task"
        ],
        answer: 1,
        why: "After a tool call executes, its result is appended to the context and sent back to the LLM, which can then make another tool call or give a final response."
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
