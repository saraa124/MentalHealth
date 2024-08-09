let userName = '';



// Set default theme
document.getElementById('chatbox').className = 'lavender';

document.getElementById('set-name').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input').value;
    if (nameInput.trim() !== '') {
        userName = nameInput.trim();
        document.getElementById('name-input').value = '';
        const welcomeMessage = `Nice to meet you, ${userName}! How can I assist you today?`;
        displayMessage('AI', welcomeMessage);
        document.getElementById('name-section').style.display = 'none';
    }
});

document.getElementById('send').addEventListener('click', function() {
    const userInput = document.getElementById('input').value;
    if (userInput.trim() !== '') {
        displayMessage('You', userInput);
        const aiResponse = generateAIResponse(userInput);
        displayMessage('AI', aiResponse);
        document.getElementById('input').value = '';
    }
});


function displayMessage(sender, message) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${sender}: ${message}`;
    messageDiv.style.marginBottom = '10px';

    // Apply CSS class based on the sender
    if (sender === 'AI') {
        messageDiv.classList.add('ai-message');
    } else if (sender === 'You') {
        messageDiv.classList.add('user-message');
    }

    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}



function generateAIResponse(userInput) {
    const responses = {
        "hello": `Hi ${userName || 'there'}! How can I assist you today?`,
        "how are you": "I'm here to listen and support you. How are you feeling?",
        "help": "I'm here to help. What’s on your mind?",
        "stress": "Stress can be overwhelming. Try to take deep breaths and focus on one thing at a time.",
        "anxiety": "It's okay to feel anxious. Talking about it might help. What’s causing your anxiety?",
        "sadness": "It's okay to feel sad sometimes. I'm here for you. Would you like to talk about what's making you feel this way?",
        "loneliness": "Feeling lonely is hard. You're not alone; I'm here with you. Want to share what you're going through?",
        "depression": "I'm really sorry you're feeling this way. Sometimes talking can help. What’s been on your mind?",
        "motivation": "Sometimes we all lose motivation. Let’s break down your tasks together, one step at a time.",
        "self-esteem": "You are valuable and capable. Can you share more about what's affecting your self-esteem?",
        "": "Please type a message."
    };

    // Normalize the user input by converting it to lowercase and trimming any extra spaces
    const normalizedInput = userInput.toLowerCase().trim();

    // Look up the response based on the normalized user input
    let response = responses[normalizedInput] || "I'm not sure how to respond to that. Can you tell me more?";

    // Return the response so it can be displayed in the chatbox
    return response;
}