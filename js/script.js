const screens = ["home", "identity", "game", "result", "leaderboard"];
const missions = [
  {
    title: "MISSION 01 // SECURE PASSWORD",
    clue: "The administrator left a note: «A strong password is hard to guess, is never reused, and combines several types of characters».",
    question: "Which of these passwords would be the safest option?",
    answers: [
      { text: "12345678", correct: false },
      { text: "mipassword", correct: false },
      { text: "Luna!Río_82Nube", correct: true },
      { text: "nombre2009", correct: false }
    ],
    hint: "Choose the option that is long, hard to guess, and mixes letters, numbers, and symbols.",
    success: "Correct! A long and unique password helps protect your accounts.",
    fail: "That's not it. Avoid short, common passwords or those based on personal data."
  },
  {
    title: "MISIÓN 02 // PHISHING",
    clue: "Recibís un correo que dice: «¡Ganaste un celular! Entrá ahora a este enlace y escribí tu contraseña para reclamarlo». El remitente parece extraño.",
    question: "¿Qué deberías hacer?",
    answers: [
      { text: "Open the quick link", correct: false },
      { text: "Do not open it and verify through an official channel", correct: true },
      { text: "Reply with my password", correct: false },
      { text: "Forward it to all my contacts", correct: false }
    ],
    hint: "Los mensajes urgentes con premios inesperados pueden intentar robar tus datos.",
    success: "¡Bien! Eso puede ser phishing: verificá el mensaje sin usar el enlace sospechoso.",
    fail: "Cuidado: no ingreses datos personales desde enlaces inesperados. Verificá con la fuente oficial."
  },
  {
    title: "MISSION 03 // WI-FI NETWORK",
    clue: "You are in a public place and two networks appear: «WiFi_Gratis_Oficial» and «WIFI-GRATIS-123». Nobody confirmed which one is real.",
    question: "What is the safest behavior?",
    answers: [
     { text: "Conectarse a cualquiera de ellas", correct: false },
      { text: "Usar la que tenga más barras de señal", correct: false },
      { text: "Confirmar el nombre de la red con el personal del lugar", correct: true },
      { text: "Compartir mis contraseñas para iniciar sesión", correct: false }
    ],
    hint: "A network name can mimic a legitimate network. Confirm it before connecting.",
    success: "Exact! Confirm the network and avoid sensitive operations on unknown public networks.",
    fail: "Don't trust just the network name. Ask which one is official."
  },
  {
    title: "MISSION 04 // PERSONAL DATA",
   clue: "Un extraño en un juego te pide tu dirección, el nombre de tu escuela y una foto de tu documento de identidad para darte un premio.",
  question: "¿Qué respuesta protege mejor tu privacidad?",
    answers: [
      { text: "Send everything to win", correct: false },
      { text: "Share only the address", correct: false },
      { text: "Do not share that info and tell a trusted adult", correct: true },
      { text: "Publish it in the group chat", correct: false }
    ],
    hint: "Information that identifies where you live or study must be kept private.",
    success: "Mission accomplished! Taking care of your personal data is also part of cybersecurity.",
    fail: "Do not share private data with strangers. Ask a trusted adult for help."
  },
  {
    title: "MISIÓN 05 // ENGLISH MODE",
    clue: "En la pantalla aparece la instrucción: “Choose a strong password”. El sistema solo acepta la opción que entendiste correctamente.",
    question: "¿Qué significa “strong password” en español?",
    answers: [
    { text: "Secure password", correct: true },
      { text: "Locked screen", correct: false },
      { text: "Public network", correct: false },
      { text: "Deleted file", correct: false }
    ],
    hint: "“Password” significa contraseña. ¿Qué quiere decir “strong” en este contexto?",
    success: "Correcto. ¡Entendiste la instrucción en inglés y podés continuar!",
    fail: "“Strong password” significa contraseña segura o robusta."
  },
  {
    title: "MISIÓN 06 // DISEÑO SEGURO",
    clue: "El equipo diseña una pantalla de inicio de sesión. Necesita que los usuarios reconozcan fácilmente los campos y los mensajes de error.",
    question: "¿Qué decisión de diseño ayuda más a la persona que usa la web?",
    answers: [
      { text: "Usar texto muy pequeño y poco contraste", correct: false },
      { text: "Ocultar los mensajes de error", correct: false },
      { text: "Usar etiquetas claras, buen contraste y mensajes comprensibles", correct: true },
      { text: "Poner todos los botones juntos sin nombres", correct: false }
    ],
    hint: "Una buena interfaz debe ser legible y explicar claramente qué tiene que hacer el usuario.",
    success: "¡Bien! Un diseño claro mejora la accesibilidad y ayuda a evitar errores.",
    fail: "La mejor interfaz usa etiquetas claras, buen contraste y mensajes útiles."
  },
  {
    title: "MISIÓN 07 // DEBUGGING",
    clue: "El botón “Entrar” no funciona porque el código JavaScript busca un elemento con el identificador “loginBtn”, pero en el HTML el botón se llama “enterBtn”.",
    question: "¿Cuál es una buena forma de corregir el error?",
    answers: [
      { text: "Borrar todo el archivo CSS", correct: false },
      { text: "Hacer que el identificador usado en JavaScript coincida con el del HTML", correct: true },
      { text: "Cambiar el color de fondo", correct: false },
      { text: "Desconectar internet", correct: false }
    ],
    hint: "Revisá si el nombre del elemento que busca JavaScript es exactamente el mismo que aparece en HTML.",
    success: "¡Error corregido! Revisar la consola y comparar identificadores ayuda a encontrar fallos.",
    fail: "Comprobá que el identificador del botón coincida en HTML y JavaScript."
  },
  {
    title: "MISIÓN 08 // INTEGRACIÓN FINAL",
    clue: "Las pantallas ya están diseñadas, el código está escrito y las preguntas funcionan por separado. Ahora hay que unirlo todo y comprobar que el juego completo funcione.",
    question: "¿Qué conviene hacer antes de presentar el proyecto?",
    answers: [
      { text: "Entregarlo sin probarlo", correct: false },
      { text: "Probar cada pantalla, botón, respuesta y recorrido completo", correct: true },
      { text: "Cambiar los nombres de todos los archivos al azar", correct: false },
      { text: "Eliminar las instrucciones del juego", correct: false }
    ],
    hint: "La integración consiste en unir las partes y verificar que funcionen juntas.",
    success: "¡SISTEMA RECUPERADO! Completaste las 8 misiones y la integración final.",
    fail: "Antes de entregar, probá el recorrido completo y revisá que todos los componentes funcionen juntos."
  }
];

let player = "";
let course = "";
let current = 0;
let score = 0;
let answered = false;
let correctCount = 0;

const $ = (id) => document.getElementById(id);
function showScreen(screenId) {
  screens.forEach(id => $(id).classList.toggle("hidden", id !== screenId));
}
function formatScore(value) {
  return String(value).padStart(3, "0");
}
function startGame() {
  current = 0;
  score = 0;
  correctCount = 0;
  $("score").textContent = formatScore(score);
  $("playerLabel").textContent = player;
  renderMission();
  showScreen("game");
}
function renderMission() {
  const mission = missions[current];
  answered = false;
  $("missionTitle").textContent = mission.title;
  $("levelLabel").textContent = current + 1;
  $("progressBar").style.width = `${((current + 1) / missions.length) * 100}%`;
  $("clueText").textContent = mission.clue;
  $("questionText").textContent = mission.question;
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("hintBtn").classList.remove("hidden");
  $("nextBtn").classList.add("hidden");
  $("nextBtn").textContent = current === missions.length - 1 ? "[ VER RESULTADO ]" : "[ SIGUIENTE MISIÓN ]";
  $("answers").replaceChildren();

  mission.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer.text}`;
    button.addEventListener("click", () => chooseAnswer(answer, button));
    $("answers").appendChild(button);
  });
}
function chooseAnswer(answer, button) {
  if (answered) return;
  answered = true;
  const allButtons = [...$("answers").querySelectorAll("button")];
  allButtons.forEach(btn => btn.disabled = true);
  if (answer.correct) {
    score += 100;
    correctCount += 1;
    button.classList.add("correct");
    $("feedback").textContent = missions[current].success;
    $("feedback").classList.add("good");
  } else {
    button.classList.add("incorrect");
    const correctIndex = missions[current].answers.findIndex(a => a.correct);
    allButtons[correctIndex].classList.add("correct");
    $("feedback").textContent = missions[current].fail;
    $("feedback").classList.add("bad");
  }
  $("score").textContent = formatScore(score);
  $("hintBtn").classList.add("hidden");
  $("nextBtn").classList.remove("hidden");
}
function showHint() {
  if (answered) return;
  $("feedback").textContent = "PISTA: " + missions[current].hint;
  $("feedback").className = "feedback";
  $("feedback").style.color = "#ffd166";
}
function finishGame() {
  $("finalScore").textContent = score;
  $("resultMessage").textContent = correctCount === missions.length
    ? `¡Excelente, ${player}! Completaste las 8 etapas y la integración final.`
    : `¡Misión terminada, ${player}! Superaste ${correctCount} de las 8 misiones. Seguí practicando para mejorar tu resultado.`;
  $("resultDetails").innerHTML = `Jugador: <strong>${escapeHTML(player)}</strong><br>Curso: <strong>${escapeHTML(course)}</strong><br>Respuestas correctas: <strong>${correctCount} de ${missions.length}</strong>`;
  saveScore();
  showScreen("result");
}
function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}
function saveScore() {
  let scores = [];
  try { scores = JSON.parse(localStorage.getItem("cyberMissionScores") || "[]"); } catch { scores = []; }
  scores.push({ player, course, score, correctCount, date: new Date().toLocaleDateString("es-AR") });
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 10);
  try { localStorage.setItem("cyberMissionScores", JSON.stringify(scores)); } catch { /* El juego sigue aunque el navegador no permita guardar. */ }
}
function showScores() {
  let scores = [];
  try { scores = JSON.parse(localStorage.getItem("cyberMissionScores") || "[]"); } catch { scores = []; }
  const list = $("scoreList");
  list.replaceChildren();
  if (!scores.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Todavía no hay puntajes guardados. ¡Jugá la primera misión!";
    list.appendChild(empty);
  } else {
    scores.forEach((entry, i) => {
      const row = document.createElement("div");
      row.className = "score-entry";
      const name = document.createElement("span");
      name.textContent = `${i + 1}. ${entry.player} · ${entry.course}`;
      const points = document.createElement("strong");
      points.textContent = `${entry.score} pts`;
      row.append(name, points);
      list.appendChild(row);
    });
  }
  showScreen("leaderboard");
}

$("startBtn").addEventListener("click", () => showScreen("identity"));
$("scoresBtn").addEventListener("click", showScores);
$("identityForm").addEventListener("submit", event => {
  event.preventDefault();
  player = $("playerName").value.trim();
  course = $("course").value.trim();
  if (!player || !course) return;
  startGame();
});
$("hintBtn").addEventListener("click", showHint);
$("nextBtn").addEventListener("click", () => {
  if (current < missions.length - 1) {
    current += 1;
    renderMission();
  } else {
    finishGame();
  }
});
$("restartBtn").addEventListener("click", () => showScreen("identity"));
$("homeBtn").addEventListener("click", () => showScreen("home"));
$("leaderHomeBtn").addEventListener("click", () => showScreen("home"));
document.querySelectorAll("[data-screen]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.screen));
});

let timeLeft = 180; // 3 minutos en segundos
let timerInterval = null;

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 180;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("¡Se acabó el tiempo!"); 
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerElement = document.getElementById('timer');
  if (timerElement) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

document.getElementById('identityForm').addEventListener('submit', (e) => {
  e.preventDefault();
  startTimer(); 
});