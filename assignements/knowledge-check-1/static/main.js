// Knowledge Check 1 – Intro to Full Stack Development
// Each question: { q, options: [4 strings], answer: index of correct option, why: explanation }

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1 – Recall",
    description: "Definitions and facts: the layers, the protocols, and the history.",
    questions: [
      {
        q: "Which layer of a full stack application is primarily responsible for generating the user interface?",
        options: ["Front-End", "Back-End", "Database", "Infrastructure"],
        answer: 0,
        why: "The Front-End is the technology responsible for generating the application's user interface. The Back-End handles business logic and validation, the Database stores data, and Infrastructure connects and deploys the pieces."
      },
      {
        q: "Where do business logic and validation occur in a full stack application?",
        options: ["Front-End", "Back-End", "Infrastructure", "The browser's URL bar"],
        answer: 1,
        why: "The Back-End is where business logic and validation occur, along with the management of overall user data."
      },
      {
        q: "What does IP (Internet Protocol) concern itself with?",
        options: [
          "HOW data gets to a server",
          "WHAT format the data is in",
          "WHERE a server is located on the internet",
          "Encrypting data in transit"
        ],
        answer: 2,
        why: "IP is concerned with WHERE a server is located. That location is described by an IP address, such as 192.0.2.1 in IPv4."
      },
      {
        q: "What system converts a domain name typed into your browser into an IP address?",
        options: ["TCP", "HTTP", "JSON", "DNS (Domain Name System)"],
        answer: 3,
        why: "Your browser uses the Domain Name System (DNS) to convert a domain name into the IP address it needs to know where to send the request."
      },
      {
        q: "What does TCP provide between applications communicating over an IP network?",
        options: [
          "Reliable, ordered, and error-checked delivery of a stream of bytes",
          "The visual layout of a web page",
          "A database to store user data",
          "The domain name of a server"
        ],
        answer: 0,
        why: "TCP provides reliable, ordered, and error-checked delivery of a stream of bytes. It handles HOW data gets there, while IP handles WHERE."
      },
      {
        q: "Which protocol determines the format of our application data?",
        options: ["IP", "TCP", "HTTP", "DNS"],
        answer: 2,
        why: "TCP only cares about HOW data is transferred, not WHAT is transferred. The format of application data is determined by HTTP (Hypertext Transfer Protocol)."
      },
      {
        q: "What does the 'X' in AJAX stand for?",
        options: ["eXecute", "XML", "eXternal", "XHR"],
        answer: 1,
        why: "AJAX stands for Asynchronous JavaScript and XML. XML is a data type an AJAX request can return, although modern apps mostly use JSON."
      },
      {
        q: "Which data format is commonly used by modern applications for AJAX responses?",
        options: ["XML", "CGI", "JSON", "Assembly"],
        answer: 2,
        why: "XML is not commonly used anymore. Modern applications typically get JSON (JavaScript Object Notation) back from the back-end."
      },
      {
        q: "Early websites in the 1990s were mostly what?",
        options: [
          "Personalized dashboards backed by databases",
          "Static HTML files served by a web server and rendered by a browser",
          "Bundled React applications",
          "Real-time apps with live updates"
        ],
        answer: 1,
        why: "The web began as a way to share documents. Early websites were entirely static HTML files with no user interaction beyond clicking links."
      },
      {
        q: "Which object, first made possible in 1999 in Internet Explorer, enabled AJAX?",
        options: ["fetch()", "axios", "XMLHttpRequest (XHR)", "FORTRAN"],
        answer: 2,
        why: "XMLHttpRequest (XHR) enabled AJAX in 1999. It was awkward to work with, and modern browsers later added the more convenient fetch()."
      }
    ]
  },

  {
    id: 2,
    title: "Quiz 2 – Understanding",
    description: "The 'why' behind layers, protocols, and how the pieces work together.",
    questions: [
      {
        q: "Why are the layers of an application typically divided across different technologies, servers, or GitHub repositories?",
        options: [
          "Because browsers require it",
          "So the overall site rarely completely breaks down",
          "Because databases cannot run on the same machine as any other code",
          "To make the application slower and more secure"
        ],
        answer: 1,
        why: "Dividing the layers means a problem in one part is less likely to bring down the whole site."
      },
      {
        q: "Why does a full stack developer need to understand how each layer interacts, even without specializing in all of them?",
        options: [
          "So they can write every layer alone",
          "So they never need to work with other developers",
          "So they can reason about data flow, performance, security, and scalability, and find where a problem likely exists",
          "So they can avoid learning about databases"
        ],
        answer: 2,
        why: "Full stack awareness lets you reason about how data flows and, when something breaks, identify where the issue likely exists and why it occurs."
      },
      {
        q: "Why is TCP a little slower than a protocol without its guarantees?",
        options: [
          "Its reliability requires multiple requests to start a connection, known as a 3-way handshake",
          "It has to convert domain names into IP addresses",
          "It sends every file as XML",
          "It waits for the database to respond"
        ],
        answer: 0,
        why: "TCP's reliability has a cost: every connection needs multiple requests to initiate, called the 3-way handshake."
      },
      {
        q: "Why do we need AJAX instead of relying only on links and form submissions?",
        options: [
          "Links and forms cannot send HTTP requests",
          "Most ways of sending requests unload the page and replace it with the response, while AJAX works in the background without interrupting the user",
          "AJAX is the only way to use JSON",
          "AJAX removes the need for a back-end"
        ],
        answer: 1,
        why: "Links, forms, and typing a URL all send HTTP requests, but they replace the page with the response. AJAX sends requests in the background so the user's experience isn't interrupted."
      },
      {
        q: "Why is it still called 'AJAX' even though most responses are JSON, not XML?",
        options: [
          "Because JSON is a type of XML",
          "Because browsers only accept the name AJAX",
          "Because XML is required for fetch()",
          "The lecture jokes that 'AJAX' sounds cool and 'AJAJ' sounds weird"
        ],
        answer: 3,
        why: "The name stuck even though JSON replaced XML in most modern applications. The lecture's explanation is that AJAX sounds cool and AJAJ sounds weird."
      },
      {
        q: "What does it mean that the UI is 'a visual representation of the current application state'?",
        options: [
          "The UI never changes once loaded",
          "The UI is stored inside the database",
          "The UI is generated by the infrastructure layer",
          "When state updates (for example after data arrives), the UI re-renders to reflect it"
        ],
        answer: 3,
        why: "When the front-end receives data it updates application state, which triggers a re-render. What the user sees reflects the current state."
      },
      {
        q: "How does the modern web differ from the early web?",
        options: [
          "It is application-driven rather than document-driven",
          "It no longer uses HTML",
          "It no longer needs servers",
          "It only serves static files"
        ],
        answer: 0,
        why: "Today's web is application-driven: real-time updates, personalized experiences, and complex interactions, closer to desktop software than to shared documents."
      },
      {
        q: "Why did higher-level languages like C, Java, and Python emerge after assembly and machine code?",
        options: [
          "Because computers could no longer run assembly",
          "To improve readability, portability, and developer productivity by adding abstractions",
          "To make programs run closer to the hardware",
          "Because the web required them"
        ],
        answer: 1,
        why: "Higher-level languages added abstractions such as functions, objects, and libraries that reduce cognitive load, making bigger systems possible with fewer errors."
      },
      {
        q: "What is the division of responsibility between the front-end and back-end during user interaction?",
        options: [
          "Front-end handles correctness, security and persistence; back-end handles responsiveness",
          "Both do exactly the same work",
          "Front-end handles user experience and responsiveness; back-end ensures correctness, security, and persistence",
          "The database handles the user experience"
        ],
        answer: 2,
        why: "The front-end handles user experience and responsiveness, while the back-end ensures correctness, security, and persistence."
      },
      {
        q: "Why does the lecture say that IP and TCP are often referred to together as TCP/IP?",
        options: [
          "TCP was designed alongside IP",
          "They are the same protocol",
          "TCP replaced IP",
          "IP is a part of HTTP"
        ],
        answer: 0,
        why: "IP handles WHERE a server is and TCP handles HOW to get there. TCP was designed alongside IP, so they're often referred to together."
      }
    ]
  },

  {
    id: 3,
    title: "Quiz 3 – Applied Scenarios",
    description: "Apply the concepts to real situations, like opening Instagram.",
    questions: [
      {
        q: "You open Instagram in your browser. What does the client request first?",
        options: [
          "Your personalized posts and comments as JSON",
          "The application interface: static files such as HTML, CSS, and JavaScript (or a bundled React app)",
          "A row directly from the database",
          "Your followers' IP addresses"
        ],
        answer: 1,
        why: "The client first requests the interface from a server. The page is often just a shell at this point, and the real content is still on its way."
      },
      {
        q: "The Instagram page has loaded but shows only a shell with no posts yet. What happens next?",
        options: [
          "The page reloads until posts appear",
          "The server deletes the shell",
          "The front-end requests user-specific data (posts, comments, followers) from the back-end",
          "The database renders the posts"
        ],
        answer: 2,
        why: "Once the front-end code loads, it initializes the app and requests additional data. Those requests go from the front-end to the back-end as HTTP requests."
      },
      {
        q: "A developer needs to send an HTTP request from JavaScript in the background. Which tools does the lecture mention for this?",
        options: [
          "CGI and PHP",
          "FORTRAN and C",
          "DNS and TCP",
          "fetch or axios (and the older XMLHttpRequest)"
        ],
        answer: 3,
        why: "fetch and axios are common JavaScript tools for HTTP requests. fetch() is built into modern browsers, and XHR is the older approach."
      },
      {
        q: "The back-end receives a request for a user's feed. What does it do before responding?",
        options: [
          "Applies business logic and queries the database, deciding what the user may access and how to structure it",
          "Sends back the raw database file",
          "Rebuilds the front-end code",
          "Asks the browser to look up the IP address again"
        ],
        answer: 0,
        why: "The back-end applies business logic and queries the database. It determines what data the user is allowed to access and how it should be structured."
      },
      {
        q: "In what format does the back-end commonly send the response?",
        options: ["Assembly", "A CSS file", "A TCP handshake", "JSON"],
        answer: 3,
        why: "Responses are sent back in a standardized format, commonly JSON."
      },
      {
        q: "You click 'like' on a post. Which sequence best describes what happens?",
        options: [
          "The whole page is reloaded and the database is replaced",
          "Only the database changes, and the front-end is never told",
          "The UI is never updated until you refresh",
          "State updates locally, a request goes to the back-end, and the database may be modified"
        ],
        answer: 3,
        why: "Each interaction updates state locally, sends a request to the back-end, and potentially modifies data in the database. The cycle then repeats."
      },
      {
        q: "You type a domain name into the browser and press Enter. What must happen before the request can be sent to the right server?",
        options: [
          "The domain is converted to an IP address using DNS",
          "The domain is converted to XML",
          "The server is restarted",
          "The database is queried for the domain"
        ],
        answer: 0,
        why: "Browsers need an IP address to know where to send the request, and DNS converts domain names into IP addresses."
      },
      {
        q: "A user says the page 'looks right' but shows the wrong data. The shell loads fine. Where is it most sensible to start investigating?",
        options: [
          "The user's monitor",
          "The data flow: the request to the back-end, its business logic or query, and how the response is rendered",
          "The history of programming languages",
          "The domain registrar only"
        ],
        answer: 1,
        why: "Since the static shell loaded, the issue likely sits in the data flow between front-end, back-end, and database. Knowing the layers helps you narrow down where a bug lives."
      },
      {
        q: "Your app must fetch new comments without making the whole page flash and reload. Which technique should you use?",
        options: [
          "Submit a traditional form",
          "Have the user click a link",
          "AJAX, which sends the HTTP request in the background",
          "Type the URL again"
        ],
        answer: 2,
        why: "Forms, links, and typing URLs typically unload the page and replace it with the response. AJAX sends requests in the background without interrupting the user."
      },
      {
        q: "Your team wants to rename a button and change its color. Which layer are you most likely working in?",
        options: [
          "Database",
          "Infrastructure",
          "Back-End",
          "Front-End"
        ],
        answer: 3,
        why: "The button is part of the user interface, and the Front-End generates the UI."
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
