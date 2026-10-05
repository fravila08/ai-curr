// Knowledge Check 8 – Committing Your Project
// Each question: { q, options: [4 strings], answer: index of correct option, why: explanation }

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1 – Recall",
    description: "Definitions and facts: Git, GitHub, commits, PATs, and skills.",
    questions: [
      {
        q: "What is Git?",
        options: [
          "A cloud service where projects are stored and shared",
          "A CLI tool that works on your local machine and keeps track of your files",
          "A Claude Code skill that backs up your project",
          "A token that grants access to your GitHub account"
        ],
        answer: 1,
        why: "Git is a CLI tool that works internally within local machines and keeps track of files locally. The cloud storage side is GitHub's job."
      },
      {
        q: "What is GitHub's role in the workflow?",
        options: [
          "It is the place where sharing happens, holding the latest version of your project in the cloud",
          "It is the local tool that tracks every file change on your laptop",
          "It is the command that lists your skills",
          "It is the file that stores a skill's instructions"
        ],
        answer: 0,
        why: "GitHub holds the latest version of your project and shares it with different machines, people, and deployment environments. Tracking files locally is what Git does."
      },
      {
        q: "In Git, what is a commit?",
        options: [
          "A download of the latest project state from GitHub",
          "A key card that opens your GitHub account",
          "A folder where Claude Code skills are stored",
          "A screenshot-like save state of your project, which can have a message attached"
        ],
        answer: 3,
        why: "Commits are the 'screenshots' Git takes of your project, essentially save states. Attaching a message helps you find and revert to a previous state later."
      },
      {
        q: "What is the term for uploading your commits to a storage location outside your machine?",
        options: ["Pulling", "Tracking", "Pushing", "Initializing"],
        answer: 2,
        why: "Uploading a commit to a storage location is known as pushing. Pulling is the opposite direction: downloading the latest state."
      },
      {
        q: "What do you need to initialize within a project so that Git can track its files and directories?",
        options: ["A skill", "A personal access token", "An MCP server", "A git repository"],
        answer: 3,
        why: "You initialize a git repository within the project, which lets Git track all the files and directories inside it."
      },
      {
        q: "What is the term for downloading the latest state of a project from a GitHub repository?",
        options: ["Pushing", "Pulling", "Committing", "Tracking"],
        answer: 1,
        why: "Anyone who needs the project simply downloads it, a process referred to as a pull. Pushing is uploading."
      },
      {
        q: "What does PAT stand for?",
        options: [
          "Personal Access Token",
          "Project Archive Tool",
          "Push And Track",
          "Private Authentication Terminal"
        ],
        answer: 0,
        why: "A PAT is a Personal Access Token, which the lesson compares to a key card assigned only to you that grants access to your GitHub capabilities."
      },
      {
        q: "In the `claude mcp add-json github` command, where does your PAT go?",
        options: [
          "In the url field",
          "In the type field",
          "In the Authorization header, after Bearer",
          "In the name of the MCP server"
        ],
        answer: 2,
        why: "The JSON includes a headers object with Authorization set to \"Bearer YOUR_GITHUB_PAT\", which is where your token is placed."
      },
      {
        q: "Which two fields appear in the frontmatter of the save-project SKILL.md?",
        options: [
          "title and author",
          "name and description",
          "id and version",
          "command and arguments"
        ],
        answer: 1,
        why: "The frontmatter at the top of the skill file has a name (such as save-project) and a description of what the skill does."
      },
      {
        q: "What does the lesson compare saving your project's state to?",
        options: [
          "Taking a vacation",
          "Printing out your code",
          "A memory card",
          "Restarting your computer"
        ],
        answer: 2,
        why: "The same memory card concept applies: you store your project's state at different points of development in a safe place, and you can work from different devices. Git and GitHub replace the memory card as the mechanism."
      }
    ]
  },

  {
    id: 2,
    title: "Quiz 2 – Understanding",
    description: "The 'why' behind version control, Git vs GitHub, and skills.",
    questions: [
      {
        q: "Why does the lesson say a project needs memory too?",
        options: [
          "Because Claude Code forgets the project when a session ends",
          "Because GitHub cannot store files without it",
          "Because files change, features are added, bugs are fixed, and sometimes we want to undo changes",
          "Because MCP servers require a project backup"
        ],
        answer: 2,
        why: "As development continues, we sometimes make changes we wish we could undo. Version control lets us intentionally save and recover states instead of manually copying the project."
      },
      {
        q: "Why does the lesson stress that Git and GitHub are NOT the same?",
        options: [
          "Git tracks files locally on your machine, while GitHub is a cloud service that stores and shares them",
          "Git is for sharing with others, while GitHub only tracks local files",
          "Git is a cloud service, while GitHub is a CLI tool",
          "They are the same tool under two different names"
        ],
        answer: 0,
        why: "They are designed to work together, but Git is the local CLI tool and GitHub is the cloud service. Mixing them up leads to confusion about where your project actually lives."
      },
      {
        q: "Why is it useful that local files and cloud files work independently from one another?",
        options: [
          "It makes pushing happen automatically",
          "It removes the need for commits",
          "It means GitHub is no longer needed",
          "Developers can decide for themselves when to connect the two"
        ],
        answer: 3,
        why: "The files are saved both locally and in the cloud but work independently, which lets developers choose when to connect them."
      },
      {
        q: "Why does the 'connect the dots' prompt tell Claude to use both the Git CLI and the GitHub MCP server?",
        options: [
          "Claude Code cannot run any command without an MCP server",
          "The project needs local Git work (init and commit) and GitHub work (the cloud repository), and each tool covers one side",
          "The Git CLI is only used to display the repository URL",
          "The GitHub MCP is only used to write the commit message"
        ],
        answer: 1,
        why: "The Git CLI handles the local repository and commits, while the GitHub MCP gives Claude a standard way to talk to GitHub, so together they initialize, commit, and push the project."
      },
      {
        q: "Why does Claude Code need no extra setup for Git but does need setup for GitHub?",
        options: [
          "Git is a native CLI tool Claude Code already handles well, while GitHub needs the official MCP for standard tool calling",
          "GitHub is a local tool and Git is a cloud service",
          "Git needs a PAT, but GitHub does not",
          "Claude Code can only talk to tools made by Anthropic"
        ],
        answer: 0,
        why: "Claude Code works well with Git out of the box. For GitHub, the official GitHub MCP provides a standard convention for communication between Claude agents and GitHub."
      },
      {
        q: "Why does the lesson compare a PAT to a key card?",
        options: [
          "It can be shared with teammates to open any door",
          "It is only needed the first time you create a repository",
          "It is assigned to you only and opens the doors to your GitHub capabilities, so you must guard it",
          "It stores your commit history"
        ],
        answer: 2,
        why: "The token is assigned to you and only you. That is why you should store it somewhere safe and never share it."
      },
      {
        q: "Why should you give each commit a descriptive message?",
        options: [
          "Git refuses to push commits without a long message",
          "GitHub deletes commits that have short messages",
          "The message is what turns the commit into a PAT",
          "It helps you identify your safe states and revert your codebase to a previous one"
        ],
        answer: 3,
        why: "Messages attached to commits make it easy to tell your save states apart and to revert to a previous state whenever you need to."
      },
      {
        q: "In the save-project skill, why is repository-name not required?",
        options: [
          "It is only used when a new GitHub repository must be created, and the project folder name is the fallback",
          "The skill never creates a repository",
          "The GitHub MCP always picks a random name",
          "Repository names are not allowed in GitHub"
        ],
        answer: 0,
        why: "The skill creates a new repository only if no remote is attached or the remote is invalid, using repository-name if available or the project folder name. The commit message, in contrast, is mandatory."
      },
      {
        q: "Why is github-url optional for the grab-project skill?",
        options: [
          "It is only used for private repositories",
          "It replaces the GitHub MCP",
          "It only needs to be provided when populating a new project; inside an existing project the remote is used to pull the latest version",
          "The skill never checks whether a repository exists"
        ],
        answer: 2,
        why: "grab-project has two cases: with a URL it pulls down a new project, and without one (inside an existing project) it uses the remote to pull the latest version."
      },
      {
        q: "Why does the lesson turn save and grab into Skills?",
        options: [
          "Because Git cannot push without a skill",
          "To give Claude Code consistent instructions for how projects should be saved and retrieved",
          "Because skills are required to create a PAT",
          "To replace the need for GitHub"
        ],
        answer: 1,
        why: "Turning repeated actions into /save-project and /grab-project gives Claude Code reusable, consistent instructions for saving and retrieving projects."
      }
    ]
  },

  {
    id: 3,
    title: "Quiz 3 – Applied Scenarios",
    description: "Use Git, GitHub, and the save and grab skills in real situations.",
    questions: [
      {
        q: "You are starting a brand-new project and want to follow the lesson's workflow. What should you do at the start?",
        options: [
          "Wait until the project is finished before creating anything",
          "Create two repositories: one locally through Git and one in the cloud with GitHub",
          "Create only a GitHub repository and skip Git",
          "Generate a PAT and delete it right away"
        ],
        answer: 1,
        why: "At the START of a project you create a repository locally with Git and another in the cloud with GitHub."
      },
      {
        q: "You just finished a feature and the app works. According to the workflow, what should you do while developing?",
        options: [
          "Pull from GitHub",
          "Delete the repository and start over",
          "Generate a new PAT",
          "Create a local commit with a descriptive message"
        ],
        answer: 3,
        why: "During development you generate local save states (commits) with descriptive messages that help you identify your safe states."
      },
      {
        q: "You have a few commits saved on your laptop and want them backed up in the cloud. What do you do?",
        options: [
          "Push them to your GitHub repository",
          "Pull them from your GitHub repository",
          "Initialize another local repository",
          "Run /mcp"
        ],
        answer: 0,
        why: "Backing up your save states means pushing (uploading) them to your GitHub repository. Pulling goes the other way."
      },
      {
        q: "You edited a file directly on GitHub and committed it there, so your local copy is now behind. What should you do?",
        options: [
          "Run /save-project to overwrite GitHub",
          "Recreate the project from scratch",
          "Run /grab-project in your Claude session to pull down the latest version",
          "Generate a new PAT"
        ],
        answer: 2,
        why: "Changes made on GitHub no longer match your local machine, so you use /grab-project to pull the latest version. /save-project pushes your local state up instead."
      },
      {
        q: "A classmate sends you a GitHub URL for their project and you have nothing on your machine yet. How do you use grab-project?",
        options: [
          "Run it with no URL and hope it finds the project",
          "Provide the github-url so the skill confirms it with the GitHub MCP, pulls the project, and moves into its directory",
          "Run /save-project instead",
          "Create a new repository with the same name first"
        ],
        answer: 1,
        why: "When a github-url is provided, the workflow confirms it exists with the GitHub MCP, pulls it down, and changes directories into the pulled project."
      },
      {
        q: "You just ran the `claude mcp add-json github ...` command. How do you confirm the MCP was added?",
        options: [
          "Run /skills",
          "Run /save-project",
          "Restart your computer",
          "Run /mcp within your Claude session"
        ],
        answer: 3,
        why: "Running /mcp inside your Claude session confirms the server was added. /skills, by contrast, lists your skills."
      },
      {
        q: "You type `/save-project message:Fix login bug`. How does the skill get that text?",
        options: [
          "It is passed through $ARGUMENTS, which the skill parses for the message input",
          "The skill guesses the message from the file names",
          "It is read from the PAT",
          "It is read from the skill's description field"
        ],
        answer: 0,
        why: "The skill parses its inputs, such as the mandatory commit message, from $ARGUMENTS. If a remote repository is already attached, it just commits and pushes to it."
      },
      {
        q: "You run /save-project in a folder with no .git directory and no repository-name argument. What does the skill do?",
        options: [
          "It stops and does nothing",
          "It only creates the commit, with no repository",
          "It initializes a git repo, creates a GitHub repository named after the project folder, attaches it, commits, and pushes",
          "It asks you to run /grab-project first"
        ],
        answer: 2,
        why: "The workflow initializes git if .git is missing, creates and attaches a GitHub repository (using the project folder name when no repository-name is given), then commits and pushes."
      },
      {
        q: "You created .claude/skills/save-project/SKILL.md but /save-project does not show up in /skills. What does the lesson suggest?",
        options: [
          "Delete the file and create a command instead",
          "Generate a new PAT",
          "Rename the skill to grab-project",
          "Restart your Claude Code session so it populates"
        ],
        answer: 3,
        why: "The lesson says that if the skill isn't listed after running /skills, you should restart your Claude Code session and it should populate."
      },
      {
        q: "Which sequence matches the habit the lesson ends with?",
        options: [
          "Pull, push, commit, change, continue",
          "Change, commit, push, pull, continue building",
          "Commit, change, pull, push, continue",
          "Push, change, pull, commit, continue"
        ],
        answer: 1,
        why: "The conclusion sums it up as change, commit, push, pull, continue building: make meaningful changes, save them as commits, back them up to GitHub, and pull the latest when needed."
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
