// Knowledge Check 7 – Committing Your Context
// Each question: { q, options: [4 strings], answer: index of correct option, why: explanation }

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1 – Recall",
    description: "Definitions and facts: memory, sessions, checkpoints, Obsidian, and the game.",
    questions: [
      {
        q: "According to the lesson, how does a machine decide what to remember?",
        options: [
          "It sorts information into categories based on how important it is",
          "It only remembers things we explicitly tell it to",
          "It automatically keeps every earlier version of your work",
          "It uses its senses and reasoning to store events"
        ],
        answer: 1,
        why: "Machine memory is described as robotic: it only remembers what we explicitly tell it to. Sorting information by importance is how human memory works."
      },
      {
        q: "In the PlayStation Memory Card analogy, what happened when you ran out of space?",
        options: [
          "The card automatically grew larger",
          "The console deleted your oldest game for you",
          "You had to choose which slot to overwrite with your newest state",
          "The game refused to save until you restarted"
        ],
        answer: 2,
        why: "When space ran out you had to make a sacrifice and choose a spot to overwrite. The lesson says computers do this constantly, so each save overwrites the previous version."
      },
      {
        q: "What does the `/resume` command do in Claude Code?",
        options: [
          "Opens a scrollable menu of previous conversations you can load",
          "Renames the session that is currently running",
          "Lists checkpoints so you can go back to one",
          "Opens the most recently closed conversation immediately"
        ],
        answer: 0,
        why: "`/resume` populates a scrollable menu of previous conversations. `/rename` renames a running session, `/rewind` lists checkpoints, and `claude -c` reopens the most recent conversation."
      },
      {
        q: "What does starting Claude Code with `claude -c` do?",
        options: [
          "Starts a new session with a custom name",
          "Clears the context of the current session",
          "Shows the context currently loaded",
          "Continues the most recently closed conversation"
        ],
        answer: 3,
        why: "The `-c` option continues the most recently closed conversation. It is handy if your editor closes for an update and you want to get back quickly."
      },
      {
        q: "Which command starts a brand new Claude Code conversation with a predetermined name?",
        options: [
          "/rename",
          "claude --name 'name'",
          "claude -c",
          "/resume"
        ],
        answer: 1,
        why: "`claude --name 'name'` opens a new session with the given name. `/rename` only changes the name of a session that is already running."
      },
      {
        q: "When are Claude Code checkpoints stored?",
        options: [
          "After each prompt you run",
          "Only when you close Claude Code",
          "Every time you run `/resume`",
          "Only when you manually save them"
        ],
        answer: 0,
        why: "Checkpoints are stored after each prompt you run, like a slot on a memory card."
      },
      {
        q: "How does the lesson describe Obsidian's notes?",
        options: [
          "They live in a cloud database that only Obsidian can read",
          "They are saved as compiled code files",
          "They are stored in folders and cannot be linked",
          "They are local Markdown (.md) files that can be linked together"
        ],
        answer: 3,
        why: "Obsidian stores notes as local Markdown files and lets you connect them with links. Because they are ordinary files, they stay portable and work with tools like VS Code and Git."
      },
      {
        q: "In Obsidian, what is a Vault?",
        options: [
          "A plugin that hides your files",
          "A saved settings profile",
          "A directory where Obsidian sets up its own workspace",
          "A visual graph of your notes"
        ],
        answer: 2,
        why: "A Vault is essentially a directory where Obsidian is instructed to set up its own workspace. The graph is a separate feature that visualizes links between notes."
      },
      {
        q: "Which of these is one of the community plugins the lesson tells you to install?",
        options: [
          "Playwright",
          "Project Mapper",
          "QA Agent",
          "Settings Profile"
        ],
        answer: 3,
        why: "The plugins are Reveal Hidden Files, Terminal, Claude IDE, and Settings Profile. Playwright is an MCP server, and project-mapper and qa-agent are Claude Code agents."
      },
      {
        q: "In the Number Guessing Game, how many attempts does the player get?",
        options: [
          "3 attempts",
          "10 attempts",
          "Unlimited attempts",
          "5 attempts"
        ],
        answer: 3,
        why: "The CLAUDE.md says the player guesses a number between 1 and 100 and has a maximum of 5 attempts."
      }
    ]
  },

  {
    id: 2,
    title: "Quiz 2 – Understanding",
    description: "The 'why' behind memory, checkpoints, Obsidian setup, and committing context.",
    questions: [
      {
        q: "Why does the lesson call copying the whole project folder at every checkpoint 'a band aid'?",
        options: [
          "Because copies can never be renamed",
          "Because it works around the problem without truly managing the project's states",
          "Because Claude Code cannot read copied folders",
          "Because it stops the project from being saved at all"
        ],
        answer: 1,
        why: "Numbering copies of the entire project is the closest answer we have, but the lesson says it is a band aid, not a solution. Projects need a real way to move forward and backward through their states."
      },
      {
        q: "Why does the lesson separate Claude Code and projects as the two things that need memory?",
        options: [
          "Because Claude Code is only used for projects",
          "Because projects do not need to move backward",
          "Because the two problems don't share the same answer",
          "Because Claude Code cannot store context"
        ],
        answer: 2,
        why: "Claude Code needs to hold context, agents, commands, and MCPs, while projects need to move through their versions. The lesson notes that these two problems don't share the same answer."
      },
      {
        q: "Why can't a machine tell you what your Word document looked like 5 minutes ago?",
        options: [
          "Because Word deletes documents regularly",
          "Because machines only store the latest version of something you've saved",
          "Because documents are stored as images",
          "Because auto save always keeps a backup of each minute"
        ],
        answer: 1,
        why: "Machines only store the latest saved version, and without auto save they won't even keep your changes. They only remember what we explicitly tell them to."
      },
      {
        q: "Why might you use `/rename` on a session?",
        options: [
          "Because default names depend on your initial prompt and can be confusing",
          "Because unnamed sessions cannot be resumed",
          "Because renaming creates a new checkpoint",
          "Because it moves the session into Obsidian"
        ],
        answer: 0,
        why: "The names in the `/resume` menu depend on your initial prompt and can be confusing, so you can run `/rename` on a running session to give it a clearer name."
      },
      {
        q: "What makes checkpoints more powerful than simply resuming a conversation?",
        options: [
          "They are stored in the cloud automatically",
          "They only save your chat history",
          "They store your codebase as well as your context",
          "They can move both forward and backward"
        ],
        answer: 2,
        why: "Checkpoints store and protect your context and also your codebase. They can only go backward, not forward."
      },
      {
        q: "Why does the lesson warn you to be wise about using `/rewind`?",
        options: [
          "It deletes your CLAUDE.md file",
          "It can only be used once per project",
          "It disconnects Obsidian from the session",
          "It only works backwards, and once done there is no undoing it"
        ],
        answer: 3,
        why: "The warning is that checkpoints only work backwards and a rewind cannot be undone."
      },
      {
        q: "Why is linking notes useful in Obsidian instead of only using folders?",
        options: [
          "Links make notes harder to delete",
          "Links build a network of related ideas that Obsidian can show as a graph",
          "Links convert notes into code",
          "Links turn Markdown files into a database"
        ],
        answer: 1,
        why: "Obsidian encourages relationships between ideas rather than strictly folders, and can visualize those relationships as a graph."
      },
      {
        q: "Why does the lesson have you create a `Default` settings profile?",
        options: [
          "Because Obsidian refuses to open without one",
          "Because Claude Code needs it to load CLAUDE.md",
          "Because it connects the vault to the Playwright server",
          "Because settings are isolated to their own vault and don't easily transfer"
        ],
        answer: 3,
        why: "Obsidian keeps settings inside each vault, so they don't easily carry over. A Default profile avoids repeating the setup process."
      },
      {
        q: "After the QA agent runs and you review the app, why run the project-mapper agent and then `/init` (or ask Claude to update CLAUDE.md)?",
        options: [
          "To commit your context through documentation that reflects the project's newest state",
          "To erase the previous checkpoints",
          "To rewind the project to an earlier version",
          "To reinstall the Obsidian plugins"
        ],
        answer: 0,
        why: "Context can be committed or saved through documentation. The project-mapper writes docs, and updating CLAUDE.md makes sure it reflects the latest state of the project."
      },
      {
        q: "Why does the lesson use an Obsidian Canvas in addition to written documentation?",
        options: [
          "Because Markdown files cannot be read by Claude Code",
          "Because Canvas replaces the need for CLAUDE.md",
          "Because reading isn't always the best way to see where features are written, so a visual helps",
          "Because Canvas runs the game for you"
        ],
        answer: 2,
        why: "Documentation is great for reading, but sometimes you need to see where features live. A canvas, such as a tree diagram of responsibilities per file, makes that visual."
      }
    ]
  },

  {
    id: 3,
    title: "Quiz 3 – Applied Scenarios",
    description: "Apply the lesson to real situations: sessions, Obsidian, and the Number Guessing Game.",
    questions: [
      {
        q: "Your editor closed for an update and you want to jump straight back into the conversation you just had. What should you do?",
        options: [
          "Run /rewind and pick the last checkpoint",
          "Run /rename on the old session",
          "Start Claude Code with claude -c",
          "Run /context"
        ],
        answer: 2,
        why: "`claude -c` continues the most recently closed conversation, which is exactly this case. `/rewind` would roll your code and context back instead."
      },
      {
        q: "You made a few prompts last week and want to pick one specific old conversation out of several. What is the best option?",
        options: [
          "Run /resume and choose it from the menu",
          "Run claude --name with the old title",
          "Run /init",
          "Run /ide"
        ],
        answer: 0,
        why: "`/resume` opens a scrollable menu of previous conversations so you can load the context you want."
      },
      {
        q: "You are starting the Number Guessing Game. The project is already defined and there is nothing to explore yet. Where do you pick up in the Prompting Life Cycle?",
        options: [
          "Commit",
          "Planning",
          "Review",
          "Define"
        ],
        answer: 1,
        why: "The lesson says the project has been defined and there's nothing to explore, so we pick up at planning. The cycle is Define, Explore, Plan, Code, Review, Commit."
      },
      {
        q: "A prompt went badly and you want your code and conversation back to how they were before it. Which tool fits, and what should you remember?",
        options: [
          "/resume, which can undo the change later",
          "claude -c, which restores your code",
          "/rename, which saves a snapshot",
          "/rewind, which only goes backwards and cannot be undone"
        ],
        answer: 3,
        why: "`/rewind` lists checkpoints that store both code and context. It only works backwards, and there is no undoing it."
      },
      {
        q: "You opened Claude Code in the Obsidian terminal and want it to integrate with Obsidian. Which command do you run?",
        options: [
          "/mcp",
          "/ide",
          "/context",
          "/init"
        ],
        answer: 1,
        why: "Running `/ide` lets you pick the Obsidian Claude IDE from the drop-down menu and connect it to the session."
      },
      {
        q: "You started a new session and want to confirm that CLAUDE.md and your agents were loaded. What do you check?",
        options: [
          "/context",
          "/resume",
          "/rewind",
          "/rename"
        ],
        answer: 0,
        why: "The lesson has you check `/context` to make sure CLAUDE.md and the agents were added to the session."
      },
      {
        q: "You want to be sure the Playwright server is available before you start. How do you verify it?",
        options: [
          "Run /rewind",
          "Open the Obsidian graph",
          "Run /init",
          "Run /mcp"
        ],
        answer: 3,
        why: "Running `/mcp` lets you ensure the Playwright MCP server is connected."
      },
      {
        q: "A player uses all 5 attempts without finding the number. According to the CLAUDE.md, what should the game do?",
        options: [
          "Keep giving more guesses until the player wins",
          "Close the app without any message",
          "Show a pop-up saying they lost and the correct number, then start a new game when it is closed",
          "Show a pop-up saying they won and start a new game"
        ],
        answer: 2,
        why: "When the game ends, a pop-up tells the player whether they won or lost. A loss also reveals the correct number, and closing the pop-up automatically starts a new game."
      },
      {
        q: "The app is built and the QA agent has run. You want written documentation you can reference later. What should you launch?",
        options: [
          "The qa-agent again",
          "The project-mapper agent",
          "The Terminal plugin",
          "The Reveal Hidden Files plugin"
        ],
        answer: 1,
        why: "The project-mapper agent is run to write documentation for the application. The qa-agent is used to find ways to improve the app."
      },
      {
        q: "You want a tree diagram showing which responsibilities fall under each file of your app. What does the lesson suggest?",
        options: [
          "Rename the session with /rename",
          "Rewind to an earlier checkpoint",
          "Copy the project folder with a numbered name",
          "Ask Claude Code to generate a canvas in your Obsidian vault using the documentation"
        ],
        answer: 3,
        why: "With the Obsidian IDE and Obsidian CLI tools, Claude Code can work with the Canvas feature and build a visual representation from the documentation. The lesson even suggests making an agent for it."
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
