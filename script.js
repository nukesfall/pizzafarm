document.getElementById("chat-form").addEventListener("submit", function(event) {
    event.preventDefault();
    sendMessage();
  });
  
  function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    addUserMessage(userInput);
    getBotResponse(userInput);
    document.getElementById("user-input").value = "";
  }
  
  function addUserMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = message;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function addBotMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerText = message;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getBotResponse(userInput) {
    fetch('/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: userInput }),
    })
    .then(response => response.json())
    .then(data => addBotMessage(data.output))
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  