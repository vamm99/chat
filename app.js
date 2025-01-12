const formulario = document.getElementById("chat-form");
const mensaje = document.getElementById("mensaje");
const chat = document.getElementById("chat-messages");
const channel = new BroadcastChannel("chat");
const uniqueId = Math.random().toString(36).substring(7);
const sendButton = document.getElementById("send-button");

// Generar un nombre de usuario único
const username = `Usuario_${Math.random().toString(36).substring(2, 8)}`;

// Asegurar que el botón comience deshabilitado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  if (mensaje.value.trim() === "") {
    sendButton.disabled = true;
    sendButton.classList.remove("enabled");
    sendButton.classList.add("disabled");
  } else {
    sendButton.disabled = false;
    sendButton.classList.remove("disabled");
    sendButton.classList.add("enabled");
  }
});

// Evento para habilitar o deshabilitar el botón según el contenido del campo
mensaje.addEventListener("input", () => {
  if (mensaje.value.trim() === "") {
    sendButton.disabled = true;
    sendButton.classList.remove("enabled");
    sendButton.classList.add("disabled");
  } else {
    sendButton.disabled = false;
    sendButton.classList.remove("disabled");
    sendButton.classList.add("enabled");
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const messageData = {
    id: uniqueId,
    username: username,
    mensaje: mensaje.value.trim(),
  };

  // Mostrar el mensaje propio
  appendMessage(messageData, true);

  // Enviar el mensaje a otras pestañas
  channel.postMessage(messageData);

  // Limpiar el campo de entrada y deshabilitar el botón
  mensaje.value = "";
  sendButton.disabled = true;
  sendButton.classList.remove("enabled");
  sendButton.classList.add("disabled");
});

channel.onmessage = (e) => {
  if (e.data.id !== uniqueId) {
    // Mostrar mensajes de otros usuarios
    appendMessage(e.data, false);
  }
};

// Función para agregar mensajes al chat
function appendMessage(data, isUserMessage) {
  const div = document.createElement("div");
  div.classList.add(
    "message",
    isUserMessage ? "user-message" : "other-message"
  );

  const usernameSpan = document.createElement("span");
  usernameSpan.textContent = data.username;
  usernameSpan.classList.add("username");

  const messageText = document.createElement("p");
  messageText.textContent = data.mensaje;

  div.appendChild(usernameSpan);
  div.appendChild(messageText);
  chat.appendChild(div);

  // Scroll automático
  chat.scrollTop = chat.scrollHeight;
}
