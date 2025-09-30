
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender = "user") {
  const msg = document.createElement("div");
  msg.classList.add("msg");

  if (sender === "bot") {
    msg.classList.add("msg-bot");
  }
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    addMessage("Você: " + text, "user");
    input.value = "";

    // Resposta simples do "bot"
    setTimeout(() => {
      addMessage("IA: Procurando preços de \"" + text + "\"...", "bot");
    }, 600);
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});