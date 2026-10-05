// Knowledge Check 2 – Full Stack Development Breakdown
// Each question: { q, options: [4 strings], answer: index of correct option, why: explanation }

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1 – Recall",
    description: "Definitions and facts: HTTP, the front-end, the back-end, and status codes.",
    questions: [
      {
        q: "What is HTTP?",
        options: [
          "A query language used to read and write database records",
          "The language browsers and servers use to communicate over the internet",
          "A front-end framework for building reusable components",
          "A file format for storing images and video"
        ],
        answer: 1,
        why: "HTTP (HyperText Transfer Protocol) is the language that browsers and servers use to communicate. It defines how requests are sent and how responses are structured."
      },
      {
        q: "What does it mean that HTTP is stateless?",
        options: [
          "The server can only respond with error messages",
          "The server permanently stores every user's activity",
          "Each request is independent and the server does not remember previous ones",
          "Requests can only be sent when the user is logged in"
        ],
        answer: 2,
        why: "Stateless means each request stands on its own. The server only remembers earlier requests if extra systems like sessions, cookies, or tokens are added."
      },
      {
        q: "Which set of information does each HTTP request include?",
        options: [
          "The destination URL, the type of action requested, and any data needed",
          "A status code, a serialized object, and a list of errors",
          "The database name, the table schema, and the server's password",
          "The UI skeleton, the loading state, and the error state"
        ],
        answer: 0,
        why: "A request carries the destination URL, the type of action being requested, and any data needed to fulfill it. Status codes belong to the response, not the request."
      },
      {
        q: "What is the primary responsibility of the front-end?",
        options: [
          "Enforcing business logic and data integrity",
          "Serializing data into JSON before it is stored",
          "Deciding which requests are authorized",
          "Displaying information and capturing user interactions"
        ],
        answer: 3,
        why: "The front-end is the user-facing layer: it displays information and captures user interactions. Business logic, data integrity, and security belong to the back-end."
      },
      {
        q: "Which three areas is the back-end responsible for?",
        options: [
          "Layout, animation, and styling",
          "Business logic, data integrity, and security",
          "Rendering, routing, and browser history",
          "Loading states, empty states, and error states"
        ],
        answer: 1,
        why: "The back-end is responsible for business logic, data integrity, and security. Layout, rendering, and loading/empty/error states are front-end concerns."
      },
      {
        q: "What does serialization do?",
        options: [
          "It checks that required fields are present",
          "It assigns a status code to the response",
          "It converts complex objects into formats like JSON so they can be transmitted over HTTP",
          "It hides parts of the interface until data has loaded"
        ],
        answer: 2,
        why: "Serialization converts complex objects into formats like JSON. Checking required fields is validation, which happens before the data is stored or processed."
      },
      {
        q: "What does CRUD stand for?",
        options: [
          "Connect, Request, Update, Deliver",
          "Create, Route, Upload, Display",
          "Cache, Read, Unwrap, Delete",
          "Create, Read, Update, Delete"
        ],
        answer: 3,
        why: "CRUD stands for Create, Read, Update, and Delete, the four operations most back-end systems revolve around."
      },
      {
        q: "Which HTTP method is used to create new data?",
        options: [
          "POST",
          "GET",
          "PATCH",
          "DELETE"
        ],
        answer: 0,
        why: "POST creates new data. GET retrieves data, PUT or PATCH modifies existing data, and DELETE removes data."
      },
      {
        q: "What does a status code in the 400 range signal?",
        options: [
          "The request succeeded",
          "A client-side issue",
          "A server-side failure",
          "The data needs to be serialized"
        ],
        answer: 1,
        why: "400-level codes signal client-side issues. 200-range codes mean success and 500-level codes represent server-side failures."
      },
      {
        q: "What does a status code in the 500 range represent?",
        options: [
          "A successful request",
          "A problem with the data the client sent",
          "A server-side failure",
          "A request that was routed to the wrong URL"
        ],
        answer: 2,
        why: "500-level codes represent server-side failures. Codes in the 200 range indicate success and 400-level codes signal client-side issues."
      }
    ]
  },
  {
    id: 2,
    title: "Quiz 2 – Understanding",
    description: "The why: how the layers relate and why each step of the request-response loop exists.",
    questions: [
      {
        q: "Why do developers need sessions, cookies, or tokens when working with HTTP?",
        options: [
          "To make requests faster",
          "To convert objects into JSON",
          "Because HTTP is stateless, so the server would not otherwise remember previous requests",
          "To decide whether a status code is a success or a failure"
        ],
        answer: 2,
        why: "HTTP treats every request as independent, so the server does not remember earlier ones. Sessions, cookies, or tokens are the extra systems that manage state."
      },
      {
        q: "Why must front-end components handle loading, empty, and error states?",
        options: [
          "They often rely on data that does not exist at page load, such as data from an API",
          "The back-end refuses requests that do not include those states",
          "Status codes cannot be read without them",
          "HTTP requires every component to show a message"
        ],
        answer: 0,
        why: "Components often depend on data from an API, user input, or external services that isn't available at page load, so they need to handle the time before, during, and after it arrives."
      },
      {
        q: "Why does the back-end validate data before storing or processing it?",
        options: [
          "To convert the data into JSON",
          "To pick the correct HTTP method",
          "To make the front-end load faster",
          "To protect the system from invalid input and malicious behavior"
        ],
        answer: 3,
        why: "Validation makes sure incoming data has the correct types, required fields, and acceptable values, which protects the system from invalid input and malicious behavior."
      },
      {
        q: "Why is serialization described as creating a clear contract between client and server?",
        options: [
          "It guarantees the request will succeed",
          "It puts data in a format, like JSON, that can be sent over HTTP and understood by the front-end",
          "It forces the front-end to use the same framework as the back-end",
          "It lets the server remember earlier requests"
        ],
        answer: 1,
        why: "Because both sides agree on a shared format such as JSON, the data can be transmitted over HTTP and the front-end knows how to read it."
      },
      {
        q: "Why is conditional rendering important in modern front-ends?",
        options: [
          "It lets the server choose which status code to send",
          "It removes the need for a back-end",
          "It stores user data in the browser permanently",
          "It updates only the parts of the UI that need to change instead of loading entirely new pages"
        ],
        answer: 3,
        why: "Interfaces change depending on whether a user is logged in, data has loaded, or an error occurred. Conditional rendering updates just those parts of the UI."
      },
      {
        q: "Why are status codes valuable to the front-end?",
        options: [
          "They let the front-end react appropriately without guessing what went wrong",
          "They carry the data used to fill in the UI",
          "They tell the server which method to use next",
          "They replace the need for validation"
        ],
        answer: 0,
        why: "Status codes communicate meaning beyond the data itself, so the front-end can show a success view or an error message without guessing."
      },
      {
        q: "How do CRUD operations relate to HTTP methods?",
        options: [
          "They are unrelated; CRUD only applies to databases",
          "They are mapped directly to HTTP methods, creating a predictable and standardized API structure",
          "Each CRUD operation requires its own status code range",
          "HTTP methods replace the need for CRUD operations"
        ],
        answer: 1,
        why: "CRUD actions map directly onto HTTP methods (such as POST to create and GET to read), which is what makes APIs predictable and standardized."
      },
      {
        q: "Why is front-end development described as tightly coupled to back-end behavior?",
        options: [
          "Both must be written in the same language",
          "The front-end must store the server's business logic",
          "The shape, timing, and reliability of server responses directly influence how the UI behaves",
          "The back-end draws the components on the screen"
        ],
        answer: 2,
        why: "Since components depend on data from the server, the format, speed, and dependability of the responses directly shape what the user sees."
      },
      {
        q: "In the Instagram post example, why does the front-end need to ask the server for data?",
        options: [
          "The server is responsible for drawing the post's layout",
          "The front-end skeleton is empty and holds no dynamic data, so it needs the server's data to fill in the blanks",
          "The browser cannot display images without a status code",
          "The front-end is stateless and cannot store components"
        ],
        answer: 1,
        why: "The skeleton that builds the post always lives in the front-end but is empty. The back-end returns an array of objects, and the front-end fills the skeleton with it."
      },
      {
        q: "Why do full stack developers need to understand the request-response loop deeply?",
        options: [
          "Because it only happens once, at page load",
          "Because it replaces the need for a front-end",
          "Because performance, reliability, and user experience all depend on how efficiently it operates",
          "Because it is the only part of an application that uses JavaScript"
        ],
        answer: 2,
        why: "The loop repeats continuously as users interact with the app, so how well it works affects performance, reliability, and user experience."
      }
    ]
  },
  {
    id: 3,
    title: "Quiz 3 – Applied Scenarios",
    description: "Short real-world situations: pick the method, read the status code, and fix the flow.",
    questions: [
      {
        q: "A user fills out a form with a photo and caption to publish a new post. Which HTTP method should the front-end use?",
        options: [
          "GET",
          "DELETE",
          "POST",
          "PATCH"
        ],
        answer: 2,
        why: "Creating new data is what POST is for. GET would only retrieve posts, PATCH would modify an existing one, and DELETE would remove one."
      },
      {
        q: "When a user opens their feed, the app needs to load existing posts from the server. Which HTTP method fits?",
        options: [
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        answer: 0,
        why: "A GET request retrieves data, which is the Read part of CRUD. POST would create a new post instead."
      },
      {
        q: "A user edits the caption of a post they already published. Which method matches this action?",
        options: [
          "POST, because a new caption is created",
          "GET, because the post is displayed again",
          "DELETE, because the old caption is removed",
          "PATCH (or PUT), because it modifies existing data"
        ],
        answer: 3,
        why: "PUT or PATCH modifies existing data. POST is reserved for creating new data and DELETE removes data entirely."
      },
      {
        q: "A user taps the trash icon on one of their posts. Which method should the request use?",
        options: [
          "PATCH",
          "DELETE",
          "GET",
          "POST"
        ],
        answer: 1,
        why: "DELETE removes data, which is the Delete part of CRUD."
      },
      {
        q: "The browser sends a request to create a post and the server responds with status 201. What does this tell the front-end?",
        options: [
          "The user sent invalid data and should fix the form",
          "The request succeeded, so the front-end can act on it, such as redirecting the user to their post page",
          "The server crashed while handling the request",
          "The request should be sent again with a different method"
        ],
        answer: 1,
        why: "A code in the 200 range indicates success. In the lesson's example, a 201 triggers a redirect to the user's new post page."
      },
      {
        q: "A user submits a post with the required image field missing, and the server rejects it with status 400. Whose problem does this code point to?",
        options: [
          "The server failed internally",
          "The database is offline",
          "The response was successfully delivered",
          "The client, because 400-level codes signal client-side issues"
        ],
        answer: 3,
        why: "400-level codes signal client-side issues, such as invalid data sent in the request. In the lesson's example the serializer errors are returned with HTTP_400_BAD_REQUEST."
      },
      {
        q: "While saving a post, an unexpected exception is thrown in the server code and a 500 status comes back. What kind of problem is this?",
        options: [
          "A server-side failure",
          "A client-side mistake in the form",
          "A successful request with extra data",
          "A missing HTTP method on the front-end"
        ],
        answer: 0,
        why: "500-level codes represent server-side failures. The lesson's example returns HTTP_500_INTERNAL_SERVER_ERROR from the except block for developer errors."
      },
      {
        q: "A feed screen shows a blank page for a moment while it waits for the server to send posts. What should the developer add?",
        options: [
          "A new database table",
          "A loading state so the component handles the time before data arrives",
          "A second HTTP method",
          "A 500-level status code"
        ],
        answer: 1,
        why: "Components often depend on data that doesn't exist at page load, so they should be designed to handle loading, empty, and error states gracefully."
      },
      {
        q: "A user logs in, but on the very next request the server acts as if it has never seen them. What explains this, and what is the fix?",
        options: [
          "The front-end skipped conditional rendering; add more components",
          "The status code was in the 200 range; change it to 400",
          "The data was not serialized; convert it to JSON",
          "HTTP is stateless, so the app needs sessions, cookies, or tokens to carry state between requests"
        ],
        answer: 3,
        why: "Because each HTTP request is independent, the server does not remember previous ones unless a system like sessions, cookies, or tokens is introduced."
      },
      {
        q: "A request arrives at the back-end with text where a number is required. What should the back-end do before storing anything?",
        options: [
          "Store it and let the front-end fix it later",
          "Serialize it and send it back as a 200",
          "Validate the data, and reject it with an error response if it does not meet expectations",
          "Ignore the request until the user logs in again"
        ],
        answer: 2,
        why: "Validation checks for correct types, required fields, and acceptable values before data is stored. If it fails, the server responds with an appropriate error."
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
