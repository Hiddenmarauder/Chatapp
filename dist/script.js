// JavaScript code goes here
// You can add your logic and functionality in this script

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the input field and send button elements
    var inputField = document.querySelector('.chat__conversation-panel__input');
    var sendButton = document.querySelector('.send-message-button');
  
    // Add event listener to the send button
    sendButton.addEventListener('click', function() {
      // Get the input value
      var message = inputField.value;
  
      // Clear the input field
      inputField.value = '';
  
      // Create a new message container element
      var messageContainer = document.createElement('div');
      messageContainer.classList.add('chat__conversation-board__message-container');
  
      // Create the person element
      var personElement = document.createElement('div');
      personElement.classList.add('chat__conversation-board__message__person');
  
      // Create the avatar element
      var avatarElement = document.createElement('div');
      avatarElement.classList.add('chat__conversation-board__message__person__avatar');
  
      // Create the nickname element
      var nicknameElement = document.createElement('span');
      nicknameElement.classList.add('chat__conversation-board__message__person__nickname');

      var randomAvatarNumber = Math.floor(Math.random() * 10);
      avatarElement.style.backgroundImage = `url(https://randomuser.me/api/portraits/lego/${randomAvatarNumber}.jpg)`;
  
      // Create the context element
      var contextElement = document.createElement('div');
      contextElement.classList.add('chat__conversation-board__message__context');
      nicknameElement.textContent = 'User';

      // Create the bubble element
      var bubbleElement = document.createElement('div');
      bubbleElement.classList.add('chat__conversation-board__message__bubble');
  
      // Create the span element for the message text
      var messageText = document.createElement('span');
      messageText.textContent = message;
  
      // Append the message text to the bubble element
      bubbleElement.appendChild(messageText);
  
      // Append the avatar element, nickname element, and bubble element to the person element
      personElement.appendChild(avatarElement);
      personElement.appendChild(nicknameElement);
      personElement.appendChild(bubbleElement);
  
      // Append the person element and context element to the message container
      messageContainer.appendChild(personElement);
      messageContainer.appendChild(contextElement);
  
      // Append the message container to the conversation board
      var conversationBoard = document.querySelector('.chat__conversation-board');
      conversationBoard.appendChild(messageContainer);


    });
  });


        // Get the emoji button element
var emojiButton = document.getElementById('emoji-button');

// Add event listener to the emoji button
emojiButton.addEventListener('click', function() {
  // Open the emoji modal or popover
  openEmojiModal();
});

// Function to open the emoji modal
function openEmojiModal() {
  // Show the emoji selection modal
  // You can implement your own logic to display a modal or popover with emoji options
  // For example, you can create a hidden div with a list of emojis and show it as a modal when the emoji button is clicked
  var emojiModal = document.getElementById('emoji-modal');
  emojiModal.style.display = 'block';

  // Add event listener to the emoji options
  var emojiOptions = emojiModal.getElementsByClassName('emoji-option');
  for (var i = 0; i < emojiOptions.length; i++) {
    emojiOptions[i].addEventListener('click', function() {
      // Get the selected emoji
      var selectedEmoji = this.textContent;

      // Set the selected emoji as the value of the input field or use it in any other way you need
      inputField.value += selectedEmoji;

      // Close the emoji modal or popover
      closeEmojiModal();
    });
  }
}

// Function to close the emoji modal
function closeEmojiModal() {
  // Hide the emoji selection modal
  var emojiModal = document.getElementById('emoji-modal');
  emojiModal.style.display = 'none';
};

  
  // Check if the user is signed in
var isAuthenticated = checkUserAuthentication(); // Replace this with your own authentication check logic

// Redirect based on authentication status
if (isAuthenticated) {
  window.location.href = 'chat.html'; // Redirect to the chat UI page
} else {
  window.location.href = 'signin.html'; // Redirect to the signin page
};
