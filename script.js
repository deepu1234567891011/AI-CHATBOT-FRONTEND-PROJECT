// Chatbot response function

function chatbot(input) {

    let output = "";

    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {

        output = "Hello, nice to meet you! 👋";

    } else if (input.includes("how are you")) {

        output = "I'm doing fine, thank you for asking.";

    } else if (input.includes("what is my your role in IT")) {

        output = "Python full stack developer with AI on!";

    } else if (input.includes("what is your name")) {

        output = "My name is College AI. I'm a chatbot.";

    } else if (input.includes("what can you do")) {

        output = "I can chat with you and answer some simple questions.";

    } else if (input.includes("tell me a joke")) {

        output = "Why do programmers prefer dark mode?\nBecause the light attracts bugs! 😄";

    } else {

        output = "Sorry, I don't understand that. Please try something else.";

    }

    return output;
}


// Display user message

function displayUserMessage(message) {

    const chat = document.getElementById("chat");

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");

    const userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");

    const userText = document.createElement("div");
    userText.classList.add("text");

    userText.textContent = message;

    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);

    chat.appendChild(userMessage);

    chat.scrollTop = chat.scrollHeight;
}


// Display bot message

function displayBotMessage(message) {

    const chat = document.getElementById("chat");

    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");

    const botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");

    const botText = document.createElement("div");
    botText.classList.add("text");

    botText.textContent = message;

    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);

    chat.appendChild(botMessage);

    chat.scrollTop = chat.scrollHeight;
}


// Send message

function sendMessage() {

    const inputElement = document.getElementById("input");

    const input = inputElement.value.trim();

    if (input !== "") {

        displayUserMessage(input);

        const output = chatbot(input);

        setTimeout(function () {

            displayBotMessage(output);

        }, 1000);
    }

    inputElement.value = "";
}


// Button click

document
    .getElementById("button")
    .addEventListener("click", sendMessage);


// Press Enter

document
    .getElementById("input")
    .addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    });